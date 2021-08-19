import * as type from "../types"
import React from "react";
import {
    Assignment,
    Create,
    Dvr,
    People,
    Streetview,
    Timeline,
    ViewList,
    DataUsage,
    AcUnit,
    AllOut,
    SaveOutlined,
    Language,
    Apartment,
    TrendingUp

} from "@material-ui/icons";

const subAPP = [
    {
        menuName: 'Your List',
        menuIcon: <Streetview />,
        menuPath: "/inside_sales/MyList",
    },
    {
        menuName: 'Overview',
        menuIcon: <Streetview />,
        menuPath: "/inside_sales/overview",
    },
    {
        menuName: 'Checklists',
        menuIcon: <Assignment />,
        menuPath: "/inside_sales/checklists",
    },
    {
        menuName: 'Standards',
        menuIcon: <AllOut />,
        menuPath: "/inside_sales/standards",
    },
    {
        menuName: 'People',
        menuIcon: <People />,
        menuPath: "/inside_sales/people",
    },
    //{
    //    menuName: 'Level 2',
    //    menuIcon: <DataUsage />,
    //    items: [
    //        {
    //            menuName: 'Level 3',
    //            menuIcon: <DataUsage />,
    //        },
    //        {
    //            menuName: 'Level 3',
    //            menuIcon: <DataUsage />,
    //        },
    //    ],
    //},
]


export function getSubApp(id) {
    return {
        type: type.GET_SUB_APP_REQUESTED,
        id: id,
        subApp: subAPP
    }
}

export function setApplicationDrpStatus(status) {
    return {
        type: type.SET_APPLICATION_DRP_STATUS,
        application_status: status
    }
}
// setLanguage
export function setLanguage(language){
    return {
        type:type.SET_LANGUAGE,
        language: language
    }
}
export function setLangStatus(status) {
    return {
        type: type.SET_LANGUAGE_DRP_STATUS,
        language_status: status
    }
}
