import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

// hooks => react functions which has specific task
//example => useState, useEffect, useRef, useCallback, useMemo
//third-party hooks => redux => useSelector, useDispatch
//router => useNavigate

//? event
//? onClick, onChange, onKeyPress, onSubmit

const Counter = () => {
  //   let count = 1;
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Typography variant="h3">This ia a counter app</Typography>
      <Typography>Count:{count}</Typography>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        Increase Count
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={() => {
          let newCount = count - 1;
          setCount(newCount);
        }}
      >
        Decrease Count
      </Button>

      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Count
      </Button>
    </Box>
  );
};

export default Counter;
