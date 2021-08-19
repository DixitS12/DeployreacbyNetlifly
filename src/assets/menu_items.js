import React from 'react'
import insideSale from './images/458702_Inside Sales.svg'
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

export const commonItems = [{
        menuName: "Systems",
        menutype: "internal",
        menuIcon: <ViewList />,
        menuPath: "/systems",
        pageTitle: "Systems",
    },
    {
        menuName: "Business Intelligence",
        menutype: "internal",
        menuIcon: <TrendingUp />,
        menuPath: "/business-intelligence",
        pageTitle: "Business Intelligence",
    },
    {
        menuName: "Departments & Sites",
        menutype: "internal",
        menuIcon: <Language />,
        menuPath: "/departments-sites",
        pageTitle: "Departments & Sites",
    },
    {
        menuName: "Properties",
        menutype: "internal",
        menuIcon: <Apartment />,
        menuPath: "/properties",
        pageTitle: "Properties",
    },
    {
        menuName: "Demo Items",
        menutype: "internal",
        menuIcon: <SaveOutlined />,
        menuPath: "/demo-items",
        pageTitle: "Demo Items",
    },
];

const menuItems = [
    {
        menuName: "Overview",
        menutype: "internal",
        menuIcon: <img src={insideSale} style={{ height: '2rem' }} />,
        applist: true,
        pageTitle: "Overview",
        //menuPath: "/inside_sales",
        items: [
            {
                menuName: 'My List',
                menuIcon: <Streetview />,
                menuPath: "/inside_sales/MyList",
            },
            {
                menuName: 'Overview',
                menuIcon: <Streetview />,
                menuPath: "/inside_sales/overview",
            },
            {
                menuName: 'Create',
                menuIcon: <Create />,
                menuPath: "/inside_sales/create",
            },
            {
                menuName: 'Tasks',
                menuIcon: <ViewList />,
                menuPath: "/inside_sales/tasks",
            },
            {
                menuName: 'Assets',
                menuIcon: <DataUsage />,
                menuPath: "/inside_sales/assets",
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
        ],
    },
    {
        menuName: "Tasks",
        menutype: "internal",
        menuIcon: <ViewList />,
        menuPath: "/Tasks",
        pageTitle: "Tasks",
    },
    {
        menuName: "Assets",
        menutype: "internal",
        menuIcon: <DataUsage />,
        menuPath: "/assets",
        pageTitle: "Assets",
    },
    {
        menuName: "Checklists",
        menutype: "internal",
        menuIcon: <Assignment />,
        menuPath: "/checklists",
        pageTitle: "Checklists",
    },

    {
        menuName: "Standards",
        menutype: "internal",
        menuIcon: <AllOut />,
        menuPath: "/standards",
        pageTitle: "Standards",
    },
    {
        menuName: "People",
        menutype: "internal",
        menuIcon: <People />,
        menuPath: "/people",
        pageTitle: "People",
    },
    //{
    //    menuName: "Entity Creator",
    //    menutype: "internal",
    //    menuIcon: <DataUsage />,
    //    menuPath: "/entity-create",
    //    pageTitle: "Entity Creator",
    //},
    //// dixit solanki  update links on 27042021
    //{
    //    menuName: "Quest",
    //    menutype: "external",
    //    menuIcon: <AcUnit />,
    //    menuPath: "https://quest.boxerproperty.com/NewForm.aspx",
    //    pageTitle: "Quest",
    //},
    //{
    //    menuName: "Standards",
    //    menutype: "external",
    //    menuIcon: <AllOut />,
    //    menuPath: "https://standards.boxerproperty.com/",
    //    pageTitle: "Standards",
    //},
];

export default menuItems