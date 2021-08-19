import { Box, Collapse, Hidden, IconButton, Link, Paper, Tooltip } from "@material-ui/core";
import { ExpandMore, Refresh } from '@material-ui/icons';
import clsx from "clsx";
import React, { useRef } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
// react bootsrtrap table 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import InfiniteScroll from "react-infinite-scroll-component";
import { attchmentFormatter, CustomToggleList, dateFormatter, MyExportCSV, nameFormatter, ownernameFormatter } from "./bootstrap_grid_function";
import CommonCard from "./card/card";
import logo from "./image/011-boy-5.svg";
import PageTitle from "./PageTitle/PageTitle";
// css part
import useStyles from "./styles";
import './theme.css';

import WidgetActions from "./widgetAction/widget";
import FilterWidget from "./widgetFilter/filterlist";



var dateFormat = require("dateformat");
function BootstrapTableGrid(props) {
    var _ = require('lodash');
    const { init_products, products, columns } = props;

    const componentRef = useRef();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [rowData, setRowData] = React.useState([]);
    const [isSelected, setSelected] = React.useState(false);
    const [isSelectedRow, setSelectedRow] = React.useState([]);
    const [expanded, setExpanded] = React.useState(true);
    const { SearchBar, ClearSearchButton } = Search;
    const [hasMore, sethasMore] = React.useState(true);
    const [prod, setprod] = React.useState(init_products);
    const [selectedAction, setSelectedAction] = React.useState("")


    const defaultSorted = [{
        dataField: 'CaseTypeName',
        order: 'desc'
    }];

    const handleRefreshClick = () => {

        setprod(init_products);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: (row, isSelect, rowIndex, e) => {

            setSelected(isSelect)
            setSelectedRow(row)
        },
        onSelectAll: (isSelect, rows, e) => {
            setSelected(isSelect)
            setSelectedRow(rows)
        }
    };

    const fetchMoreData = () => {
        var abc;
        if (prod.length >= products.length) {
            sethasMore(false);
            console.log("end of page ", hasMore);
            return;
        } else {
            abc = products.slice(prod.length, prod.length + 15);

        }
        setTimeout(() => {
            setprod((prod) => prod.concat(abc));
        }, 1500);

    };


    const callFormatter = (is_formatter) => {
        switch (is_formatter) {
            case "badge":
                return (
                    nameFormatter
                );
            case "nameEmail":
                return (
                    ownernameFormatter
                );
            case "date":
                return (
                    dateFormatter
                );
            case "attchment":
                return (
                    attchmentFormatter
                );
            default: return (
                <>
                    not bind a Formatter.
                </>
            );
        }
    }


    columns.forEach(function (item, index, array) {

        if (item.is_formatter) {
            item.formatter = callFormatter(item.is_formatter);
        }
    });
    const handleTableChange = (type,
        { page, sizePerPage, filters, sortField, sortOrder },) => {

        let dataSort = _.orderBy(prod, [sortField],
            [sortOrder]);
        setprod(dataSort);
        const currentIndex = (page - 1) * sizePerPage;
    };
    const handleCardClick = () => {
    }

    //  Search
    const MySearch = () => {
        let input;
        const handleClick = () => {
            let items = products.filter(item => item.CaseOwnerDisplayName == input.value.trim() || item.CaseTypeName == input.value.trim() || item.id == input.value.trim());
            if (!items.length) {
                setprod([]);
            }
            setprod(items);
        };



        return (
            <div className="input-group">
                <input
                    id="search-bar-0"
                    placeholder="Search.."
                    className="form-control custome-search-field"
                    ref={n => input = n}
                    type="text"
                />
                <button className="btn btn-secondary" onClick={handleClick}>Search</button>
            </div>
        );
    };

    return (
        <>
            <div className="ui-table react-bs-table">
                <Paper className={classes.paper}>
                    <InfiniteScroll
                        dataLength={prod.length}
                        hasMore={hasMore}
                        next={fetchMoreData}
                        loader={<h6></h6>}
                        height={800}>
                        <ToolkitProvider
                            bootstrap4
                            keyField='id'
                            data={prod}
                            columns={columns}
                            search
                            columnToggle
                            exportCSV={{
                                fileName: 'dixit.csv',
                                noAutoBOM: false,
                                blobType: 'text/csv;charset=ansi'
                            }}
                        >
                            {
                                props => (
                                    <>
                                        <div className="st-grid-top-container">
                                            <PageTitle title="Cases" button={
                                                <span className="d-flex">
                                                    <Hidden only={['xs', 'sm']}>
                                                        <WidgetActions
                                                            isSelectedRow={isSelectedRow}
                                                            isSelected={isSelected}
                                                            selectedAction={selectedAction}
                                                            setSelectedAction={setSelectedAction} />
                                                    </Hidden>


                                                    <FilterWidget columns={columns}

                                                    />
                                                    <Hidden only={['xs', 'sm']}><CustomToggleList {...props.columnToggleProps} /></Hidden>

                                                    <Tooltip title="Refresh">
                                                        <IconButton aria-label="Refresh" onClick={handleRefreshClick}>
                                                            <Refresh />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Hidden only={['xs', 'sm']}>  <MyExportCSV {...props.csvProps} />
                                                        <MySearch  {...props.searchProps} /> </Hidden>


                                                    <Tooltip title="Expand/Collaps">
                                                        <IconButton
                                                            className={clsx(classes.expand, {
                                                                [classes.expandOpen]: expanded
                                                            })}
                                                            onClick={handleExpandClick}
                                                            aria-expanded={expanded}
                                                            aria-label="show more">
                                                            <ExpandMore />
                                                        </IconButton>
                                                    </Tooltip>
                                                </span>
                                            } />
                                        </div>

                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <hr />
                                            <div className="st-grid-table-container">
                                                <Hidden only={['xs', 'sm']}>
                                                    <BootstrapTable ref={componentRef}
                                                        id="table-resize"
                                                        selectRow={selectRow}
                                                        defaultSorted={defaultSorted}
                                                        keyField='id'
                                                        hover
                                                        pagination={false}
                                                        filter={filterFactory()}
                                                        filterPosition="top"
                                                        {...props.baseProps}
                                                        remote={{ filter: true, sort: true, pagination: true }}
                                                        onTableChange={handleTableChange}
                                                    />
                                                </Hidden>
                                                {
                                                    prod && prod.length > 0
                                                        ?
                                                        <Hidden only={['lg', 'md', 'xl']}>
                                                            {
                                                                prod.map((product, index) => (
                                                                    <Box width="100%">
                                                                        <Link onClick={handleCardClick}>
                                                                            <CommonCard
                                                                                id={'Due Date: ' + product.CaseDue}
                                                                                listId={'case: ' + product.id}
                                                                                title={'Created Date: ' + dateFormat(product.CaseCreatedDate, 'DD/MM/YYYY')}
                                                                                type={product.CaseTypeName}
                                                                                assignTo={product.CaseOwnerDisplayName}
                                                                                isPopOut={false}
                                                                                isCheckBox={false}
                                                                                IsMultiSelect={false}
                                                                                ImageUrl={logo}
                                                                            />
                                                                        </Link>
                                                                    </Box>
                                                                ))
                                                            }

                                                        </Hidden>
                                                        :
                                                        null
                                                }
                                            </div>

                                        </Collapse>


                                    </>
                                )
                            }
                        </ToolkitProvider>
                    </InfiniteScroll>
                </Paper>
            </div>
        </>
    );
}
export default BootstrapTableGrid;

