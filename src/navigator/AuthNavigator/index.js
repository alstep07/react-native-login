
const AuthNavigator = () => 
<Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={SignUp} />
    </>
</Stack.Navigator>