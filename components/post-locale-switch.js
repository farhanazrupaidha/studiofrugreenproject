
import Chip from "@mui/material/Chip";
import { makeStyles } from '@mui/styles';
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  bigg: {
    // backgroundColor: "pink"
  },
  tomrw: {
    margin: "20px",
    // backgroundColor: "pink",
    background: "pink",
    // "&:hover, &:focus": {
    //   background: "red"
    // },
    "&:active, &:focus ,&selected": {
      background: "red"
    }
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    // [theme.breakpoints.down("sm")]: {
    //   display: "none"
    // }
  }
}));

export default function App() {
  const classes = useStyles();
  const [color, setcolor] = useState("pink");
  const [restcolor, setrestcolor] = useState("blue");
  const handleClick1 = () => {
    console.log("clicked 1");
    setcolor("blue");
  };
  const handleClick2 = () => {
    console.log("clicked 2");
  };
  const handleClick3 = () => {
    console.log("clicked 3");
  };
  const [alignment, setAlignment] = React.useState("one");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [selectedBtn, setSelectedBtn] = React.useState(-1);

  return (
  <div className="App">
  <div className={classes.root}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            color={selectedBtn === 1 ? "secondary" : "primary"}
            onClick={() => setSelectedBtn(1)}
            sx={{ my: 2, display: 'block' }}
            href="/id"
          >
            ID
          </Button>
          <Button
            color={selectedBtn === 2 ? "secondary" : "primary"}
            onClick={() => setSelectedBtn(2)}
            sx={{ my: 2, display: 'block' }}
            href="/en/englishversion"
          >
            EN
          </Button>
        </ButtonGroup>
</div>
</div>
  );
}
