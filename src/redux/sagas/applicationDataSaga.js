import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as type from '../types'
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

let subAPP = [
    {
        menuName: 'List',
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
]

const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
);


function getSubApp(id) {
    console.log(id);
    const abc = chunk(subAPP, id);
    console.log(abc);
    return abc[0];
}

function* fetchSubApp(action) {
    try {
        const subAppData = yield call(getSubApp, action.id);
        yield put({ type: type.GET_SUB_APP_SUCCESS, subApp: subAppData })
    } catch (error) {
        yield put({
            type: type.GET_SUB_APP_FAILED, message: error.message
        })
    }
}

function* applicationDataSaga() {
    yield takeLatest(type.GET_SUB_APP_REQUESTED, fetchSubApp)
}

export default applicationDataSaga;