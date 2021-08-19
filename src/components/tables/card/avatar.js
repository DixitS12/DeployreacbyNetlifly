import React from 'react';
import { Avatar } from "@material-ui/core";
export default function CommonAvatar(props){

    const addDefaultSrc = (event) => {
        let userDefaultImage = props.name;
        if (userDefaultImage) {
          event.target.src = userDefaultImage;
        }
      };

      if (props.name) {
        return (
          <Avatar 
          onError={(event) => addDefaultSrc(event)}
            boxShadow={1}
            className={props.sizeClass +' card-avatar'}
            alt={props.name}
            
            src={props.url}
          />
        );
      } else {
        return (
          <Avatar 
          onError={(event) => addDefaultSrc(event)}
            className={props.sizeClass+' card-avatar'}
            alt="Test"
            src={process.env.DEFAULT_IMAGE_PATH}
          />
        );
      }
   
}