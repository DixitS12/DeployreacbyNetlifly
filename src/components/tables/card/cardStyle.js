var primary = '#f3f6f9';
var secondary = "fff";
var tarnary = 'rgb(199 199 199)';

const cardStyle = {
  card: {
    cursor:'pointer',
    border: "0",
    marginBottom: "20px",
    borderRadius: "6px",
    color: secondary,
    background: primary,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + '0 0 0' + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    "&:hover,&:focus": {
      color: secondary,
      background: tarnary,
    },
  },
  cardBody: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0"
  },
};

export default cardStyle;
