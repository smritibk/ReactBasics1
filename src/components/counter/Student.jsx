import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: " Suyasha",
    age: 20,
  });
  return (
    <Box>
      <Typography variant="h3">Name:{student.name}</Typography>
      <Typography variant="h3" gutterBottom>
        Age:{student.age}
      </Typography>

      <TextField
        label="Name"
        onChange={(event) => {
          const name = event.target.value;
          setStudent({ ...student, name: name });
        }}
      />

      <TextField
        label="Age"
        type="number"
        onChange={(event) => {
          const age = event.target.value;
          setStudent({ ...student, age: age });
        }}
      />
    </Box>
  );
};

export default Student;
