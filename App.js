import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen, // Any key name works.
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      cardStyle: {
        backgroundColor: "white",
      },
    },
  }
);

export default createAppContainer(navigator);
