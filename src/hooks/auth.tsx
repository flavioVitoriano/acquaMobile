import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/index";

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        "@WaterPlus:token",
        "@WaterPlus:user",
      ]);
      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post("/auth/", {
      username,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ["@WaterPlus:token", token],
      ["@WaterPlus:user", JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Token ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@WaterPlus:user", "@WaterPlus:token"]);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(" useAuth must be used within an authProvider ");
  }
  return context;
}
export { AuthProvider, useAuth };
