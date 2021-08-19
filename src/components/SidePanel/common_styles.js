import { makeStyles } from "@material-ui/core";
export default makeStyles(
  (theme) => {
    return {
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      details: {
        display: "flex",
        flexDirection: "column"
      },
      content: {
        flex: "1 0 auto"
      }
      
    };
  },
);
