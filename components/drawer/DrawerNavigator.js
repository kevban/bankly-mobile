import React from "react";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import TransactionsList from "./screens/TransactionList";
import { MaterialIcons } from '@expo/vector-icons';
import Dashboard from "./screens/stats/Dashboard";
import RulesPage from "./screens/rules/RulesPage";
import CustomDrawer from "./CustomDrawer";
import AddTransactionButton from "../transaction/AddTransactionButton";
import CategoriesPage from "./screens/categories/CategoriesPage";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}>
                <Drawer.Screen name="Transactions" component={TransactionsList}
                    options={{
                        title: 'Transactions',
                        drawerIcon: ({ focused, size }) => <MaterialIcons name='receipt' size={size} color={'black'}></MaterialIcons>,
                    }} />
                <Drawer.Screen name="Rules" component={RulesPage}
                    options={{
                        title: 'Rules',
                        drawerIcon: ({ focused, size }) => <MaterialIcons name="rule-folder" size={size} color="black" />,
                    }} />
                <Drawer.Screen name="Categories" component={CategoriesPage}
                    options={{
                        title: 'Categories',
                        drawerIcon: ({ focused, size }) => <MaterialIcons name="category" size={size} color="black" />,
                    }} />
                <Drawer.Screen name="Statistics" component={Dashboard}
                    options={{
                        title: 'Statistics',
                        drawerIcon: ({ focused, size }) => <MaterialIcons name='bar-chart' size={size} color={'black'}></MaterialIcons>,
                    }} />
            </Drawer.Navigator>
        </>
    );
}

export default DrawerNavigator