import React, {Component} from 'react';
import {createBottomTabNavigator} from "react-navigation";
import ChatRoom from "./src/screens/ChatRoom";
import ConnectDoctor from "./src/screens/ConnectDoctor";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import HealthyLife from "./src/screens/HealthyLife";

export default createBottomTabNavigator({
        'زندگی سالم': HealthyLife,
        'خانه': Home,
        'ارتباط با پزشک': ConnectDoctor,
        'اتاق های گفتگو': ChatRoom,
        'پروفایل من': Profile
    },
);