import React from 'react';
import { Typography } from "@material-ui/core";
import logo from "./image/011-boy-5.svg";
import WidgetDocument from "./widgetDocument/widgetdocument";
import WidgetGallary from "./widgetGallary/widgetgallary";
import WidgetColumnHide from "./widgetColumnHide/column_hide";
import WidgetExport from "./widgetExport/widgetexport";
import { imagesContext } from './commonContext/context';
// Inner Function
import { columnsContext } from "./commonContext/context";
export function nameFormatter(cell, row) {



    if (row.CaseTypeName === "Training") {
        return (

            <Typography>
                {row.CaseTypeName}
            </Typography>

        );
    } else {
        return (
            <Typography>
                {row.CaseTypeName}
            </Typography>


        );
    }
}
export function dateFormatter(cell, row) {
    return (
        <div className="text-primary text-center">
            {cell}
        </div>
    );
}
export function ownernameFormatter(cell, row) {
    return (
        <div className="d-flex align-items-center px-2">
            <div className="symbol-label">
                <img className="" src={logo} alt="photo" />
            </div>
            <div className="ml-4">
                <div className=" font-weight-bolder ">{row.CaseOwnerDisplayName}</div>
                <a href="#" className="font-weight-bold text-muted">dummy@dummy.com</a>
            </div>
        </div>
    );
}
export const MyExportCSV = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <React.Fragment>
            <WidgetExport onExport={props.onExport} />
        </React.Fragment>
    );
};
export function attchmentFormatter(cell, row) {

    return (

        <React.Fragment>
            {
                row.attchement
                    ?
                    <WidgetDocument attchement={row.attchement} />
                    :
                    null
            }
            {
                row.gallary
                    ?
                    <imagesContext.Provider value={row.gallary}>
                        <WidgetGallary />
                    </imagesContext.Provider>
                    :
                    null
            }



        </React.Fragment>
    );
}
export const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (

    <columnsContext.Provider value={columns}>
        <WidgetColumnHide color="secondary" onColumnToggle={onColumnToggle} />
    </columnsContext.Provider>


);

