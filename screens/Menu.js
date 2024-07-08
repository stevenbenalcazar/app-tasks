import { createMaterialBottonTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@react-navigation/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";

import Tasks from "./Tasks";
import NewTasks from "./NewTask";
import { Tabs } from "expo-router";
import { getBackgroundColorAsync } from "expo-system-ui";

const Tab = createMaterialBottonTabNavigator();

const Menu = () => {
    return(
        <Tab.Navigator
            tabBarActivateBackgroundColor = "#fff"
            activeColor = '#000'
            inactiveColor = '#000'
            barStyle={styles.navigatorBar}

            >

          <Tab.Screen
          name="Tareas"
          component={Tasks}
          options={{
            tabBarLabel: "Tareas",
            tabBarIcon: () => (
                <MaterialCommunityIcons name="view-list" color="#000" size={24} />
            )
          }}  
          />
          
          <Tab.Screen
          name="Nueva Tarea"
          component={NewTasks}
          options={{
            tabBarLabel: "Tareas",
            tabBarIcon: () => (
                <MaterialCommunityIcons name="view-list" color="#000" size={24} />
            )
          }}  
          />
          </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    navigatorBar: {
        getBackgroundColor: "#fff",
    }
})