import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const Animal = () => {
  const [text, setText] = useState("random text");
  const [text1, setText1] = useState("Hello dear");
  return (
    <Box>
      <Typography variant="h3">{text}</Typography>
      <TextField
        label="Type something..."
        color="success"
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></TextField>

      <Box>
        <Typography variant="h3">{text1}</Typography>
        <TextField
          label="How are you?"
          color="warning"
          onChange={(event) => {
            setText1(event.target.value);
          }}
        ></TextField>
      </Box>
    </Box>
  );
};

export default Animal;
