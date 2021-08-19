import React from "react";



import {
  Card,
  CardActions,
  CardContent,
  Checkbox
} from "@material-ui/core";

// for css style 
import { makeStyles } from "@material-ui/core/styles";
import Cardstyle from "./cardStyle";
import Commonstyle from "./common_styles";


// Common Component
import CommonAvatar from "./avatar";
import CommonTitle from "./titie";
import CommonPopout from "./popout";
// Chind Component;


const Cardstyles = makeStyles(Cardstyle);

export default function CommonCard(props) {

  const classes = Cardstyles();
  const commonClass = Commonstyle();

  // component properties 
  const { id, listId, title, type, assignTo, isPopOut, isCheckBox, ImageUrl } = props;

  
  return (
    <Card className={classes.card}>

      <CardContent className={classes.cardBody}>
        <div className={commonClass.d_flex} >
          {isCheckBox ? <Checkbox className={commonClass.p_zero} color="primary" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> : null}
          {title ? <CommonTitle title={title} variant={'subtitle2'} /> : null}
        </div>
        {id ? <CommonTitle color={'textSecondary'} title={id} /> : null}
      </CardContent>

      <div className={classes.cardBody + ' ' + commonClass.d_flex + ' ' + commonClass.p_zero} >
        {type ? <CommonTitle color={'textSecondary'} title={type} variant={'subtitle2'} /> : null}
      </div>

      <CardActions className={classes.cardBody}>
        <div className={commonClass.d_flex} >
          {
            isPopOut
              ?
              <CommonPopout />
              :
              null
          }
          {listId ? <CommonTitle color={'textSecondary'} title={listId} /> : null}
        </div>
        <div className={commonClass.d_flex} >
          <CommonTitle color={'textSecondary'} title={assignTo} dclass={commonClass.d_flex + ' ' + commonClass.mr_one} />
          {
            ImageUrl
              ?
              <CommonAvatar
                name={assignTo}
                url={ImageUrl}
                sizeClass={''}
              />
              :
              null
          }
        </div>
      </CardActions>
    </Card>
  );
}

