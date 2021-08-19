import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  widgetWrapper: {
    display: "flex",
    minHeight: "100%",
  },

  widgetBody: {
    padding: theme.spacing(2),
  },
  noPadding: {
    padding: 0,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "auto",
    padding: theme.spacing(2),
  },

  moreButton: {
    margin: -theme.spacing(1),
    padding: 0,
    width: 40,
    height: 40,
    color: theme.palette.text.hint,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "rgba(255, 255, 255, 0.35)",
    },
  },
  noWidgetShadow: {
    boxShadow: "none",
  },
  mb_one: {
    marginBottom: "1rem",
  },
  mr_one: {
    marginRight: "1rem",
  },
  table_scroll: {
    height: 500,
    overflow: "scroll",
    marginRight: "1rem",
  },
  //  Expand Collaps
  expand: {
    transform: "rotate(0deg)",
    marginLeft: ".5rem",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

}));
