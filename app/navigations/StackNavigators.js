import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Shop from "../screens/Shop";
import Catalog from "../screens/Catalog";
import Filters from "../screens/Filters";
import ProductDetails from "../screens/ProductDetails";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShopScreen" component={Shop} />
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
