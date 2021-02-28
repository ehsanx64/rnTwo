import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./Home";
import Sidebar from '../Sidebar';

const HomeRouter = DrawerNavigator({
    Home: {
        screen: Home
    }
}, {
    contentComponent: props => <Sidebar {...props} />
});

export default HomeRouter;