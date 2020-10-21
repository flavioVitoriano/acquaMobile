

const Drawer = createDrawerNavigator();

const DrawerNavgation: React.FC = () => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: "#313131",
      paddingVertical: 20,
    }}
    drawerContentOptions={{
      activeBackgroundColor: "#fff",
      inactiveTintColor: "#FFF",
    }}
  >
    <Drawer.Screen
      name="Home"
      component={HomePage}
      options={{
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#313131" : "#fff" }}>Home</Text>
        ),
        drawerIcon: ({ focused }) => (
          <Icon color={focused ? "#313131" : "#fff"} name="home" />
        ),
      }}
    />

    <Drawer.Screen
      name="Client"
      component={Client}
      options={{
        drawerLabel: ({ focused }) => (

        ),
      }}
    />

    <Drawer.Screen
      name="Shopping"
      component={Shopping}
      options={{
        drawerLabel: ({ focused }) => (

        ),
      }}
    />

    <Drawer.Screen
      name="Sales"
      component={Sales}
      options={{
        drawerLabel: ({ focused }) => (

        ),
      }}
    />

    <Drawer.Screen
      name="CarboyLoans"
      component={CarboyLoans}
      options={{
        drawerLabel: ({ focused }) => (

        ),
      }}
    />

    <Drawer.Screen
      name="Reports"
      component={Reports}
      options={{
        drawerLabel: ({ focused }) => (
        ),
      }}
    />

    <Drawer.Screen
      name="RoutesClients"
      component={RoutesClients}
      options={{
        drawerLabel: ({ focused }) => (

        ),
      }}
    />

    <Drawer.Screen
      name="Expenses"
      component={Expenses}
      options={{
        drawerLabel: ({ focused }) => (

        ),
      }}
    />

    <Drawer.Screen
      name="Inputs"
      component={Inputs}
      options={{
        drawerLabel: ({ focused }) => (

        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavgation;
