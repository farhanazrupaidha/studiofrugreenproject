import React, { useState } from "react";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function ShareButton () {
    const [copied, setCopied] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };


function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

    return (
          <ContentCopyIcon color="primary" size="small" onClick={copy} />
    )
}

