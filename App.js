import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import BusinessScreen from "./src/screens/BusineessScreen";

const navigator = createStackNavigator(
  {
    SearchScreen,
    BusinessScreen,
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
