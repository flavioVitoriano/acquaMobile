
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,


import Input from "../../components/Input";
import Button from "../../components/Button";

const Client: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const phoneInputRef = useRef<TextInput>(null);
  const passswordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: ClientFormData) => {
      try {
        formRef.current?.setErrors({});


        const schema = Yup.object().shape({
          full_name: Yup.string().required('Nome obrigatório'),
          phone: Yup.string().required('telefone obrigatório'),
          preferred_price: Yup.number().min(1, 'digite um número'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/clients/', data)
        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer login na aplicação',
        );
          navigation.navigate('ClientCreated')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer cadastro');
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView

          <Container>
            <View>
              <Title>Cadastrar Cliente</Title>
            </View>


              <Input
                autoCapitalize="none"
                autoCorrect={false}
                name="full_name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  phoneInputRef.current?.focus();
                }}
              />
              <Input
                ref={phoneInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                name="phone"
                icon="phone"

                returnKeyType="next"
                onSubmitEditing={() => {
                  passswordInputRef.current?.focus();
                }}
              />
              <Input
                name="preferred_price"
                icon="bell"
                placeholder="preço padrão"
                returnKeyType="send"
              />
              <Input

                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <View>

                  Cadastrar
                </Button>
              </View>
            </Form>
          </Container>
      </KeyboardAvoidingView>


    </>
  );
};

export default Client;
