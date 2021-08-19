import {
  Paper, Card, Typography, CardContent
} from "@material-ui/core";

import Grid from '@material-ui/core/Grid';
import { FilterList, KeyboardArrowRight, MoreVert } from "@material-ui/icons";

import React from 'react';
import { default as useStyles } from "./common_styles";
import './style.css';
import Sidedata from "./Sidedata";
import BackButton from "../backButton";
export default function SidePanel() {
  const [subitems, setSubItems] = React.useState([]);
  const [dataList, setDatalist] = React.useState(Sidedata);
  const classes = useStyles();




  const handleMetaData = (e, parent_item_id) => {
    e.preventDefault()
    if (parent_item_id) {
      for (var i in dataList.list) {
        let flag = 0;
        if (dataList.list[i].items.find(item => item.item_id == parent_item_id)) {
          flag = 1;
        }
        if (flag) {
          setSubItems(dataList.list[i].items.find(item => item.item_id == parent_item_id))
        }
      }
    }
  }
  return (

    <div id="side-panel" className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid item xs={2} sm={2} lg={2} md={2} className="top-filter">
           <BackButton page={'/Tasks'}/>  
          </Grid>
          <Grid item xs={10} sm={10} lg={8} md={10} className="top-search">
         <input type="text" placeholder="Search" className="search-input" style={{ "width": '92%', "textAlign": 'center' }} />
          </Grid>
          <Grid item xs={2} sm={2} lg={2} md={2} className="top-filter">
            <FilterList style={{ cursor: "pointer" }} style={{ 'cursor': 'pointer' }} />
          </Grid>
        </Grid>
        <div className="side-data-list">
          {
            Sidedata.list.length && Sidedata.list.map((item, index) => {
              return (
                <div className="item-list panel-list" key={index}>
                  <Typography component="h6" variant="h6" className="panel-label">
                    {item.name}
                  </Typography>
                  {
                    item.items.length && item.items.map((data, index) => {
                      return (
                        <Grid container spacing={3}>
                          <Grid item xs={11} sm={11} lg={11} md={11} className="panel-grid-left">
                            <Card className={classes.root + ' panel-card'} key={index} onClick={(e) => handleMetaData(e, data.item_id)}>
                              <CardContent className="panel-body">
                                <Typography component="h6" variant="h6">
                                  {data.item_name}
                                </Typography>
                                <div className="icon">
                                  <KeyboardArrowRight />
                                </div>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid item xs={1} sm={1} lg={1} md={1} className="panel-grid-right">
                            <Card className={classes.root + ' panel-card'} key={index}>
                              <CardContent className="panel-body panel-icon-body">
                                <Typography component="h6" variant="h6">
                                  <MoreVert />
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>

                      );
                    })
                  }
                </div>

              );
            })
          }
          {
          subitems?.sub_items?.length
              ?
              <div className="item-list panel-list">
                <Typography component="h6" variant="h6" className="panel-label">
                  MetaData
                </Typography>

                {
                   subitems?.sub_items?.length &&  subitems?.sub_items?.map((data, index) => {
                    return (
                      <Grid container spacing={3}>
                        <Grid item xs={11} sm={11} lg={11} md={11} className="panel-grid-left">
                          <Card className={classes.root + ' panel-card'} key={index}>
                            <CardContent className="panel-body">
                              <Typography component="h6" variant="h6">
                                {data.item_name}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={1} sm={1} lg={1} md={1} className="panel-grid-right">
                          <Card className={classes.root + ' panel-card'} key={index}>
                            <CardContent className="panel-body panel-icon-body">
                              <Typography component="h6" variant="h6">
                                <MoreVert />
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>

                    );
                  })
                }
              </div>

              :
              null
          }
        </div>
      </Paper>
    </div>



  );
}