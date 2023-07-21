
import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

export default function App() {

  const {useState,Fragment} = React;
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
}

  return (
  <center>
        <ButtonGroup disableElevation variant="contained" sx={{borderRadius: 5}} color="secondary" backgroundColor="white" aria-label="medium secondary button group">
          <Button
            key={1}
            className={active === "1" ? "active" : undefined}
            id={"1"}
            onClick={handleClick}
            sx={{ my: 2, display: 'block' }}
            href="/id"         
            >
            ID
          </Button>
          <Button
            key={2}
            className={active === "2" ? "active" : undefined}
            id={"2"}
            onClick={handleClick}
            sx={{ my: 2, display: 'block' }}
            href="/en/englishversion"         
            >
            EN
          </Button>
        </ButtonGroup>
  </center>
  );
}
