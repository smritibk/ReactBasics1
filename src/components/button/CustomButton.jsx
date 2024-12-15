import { Button, IconButton } from "@mui/material";
import React from "react";
import "./buttons.styles.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CustomButton = () => {
  return (
    <div>
      {" "}
      <section
        id="variant-section"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Button variant="text">text</Button>
        <Button variant="contained">click me</Button>
        <Button variant="outlined">send message</Button>
      </section>
      <section className="button-section" id="color-section">
        <h1>Button Color</h1>
        <Button color="primary" variant="contained">
          primary
        </Button>
        <Button color="secondary" variant="contained">
          secondary
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="warning" variant="contained">
          warning
        </Button>
        <Button color="error" variant="contained">
          error
        </Button>
        <Button color="info" variant="contained">
          info
        </Button>
        <Button
          sx={{ background: "beige", color: "black", padding: "1rem" }}
          variant="contained"
          size="large"
        >
          Success
        </Button>
      </section>
      <section className="button-section">
        <h1>Button-size section</h1>
        <Button size="small" variant="contained">
          Small
        </Button>
        <Button size="medium" variant="contained">
          Medium
        </Button>
        <Button size="large" variant="contained">
          Large
        </Button>
      </section>
      <section className="button-section">
        <h1>Icon Button/Icon with button</h1>
        <Button
          variant="contained"
          color="success"
          startIcon={<DeleteIcon />}
          onClick={() => {
            alert("Deleted");
          }}
        >
          Delete product
        </Button>
        <Button variant="outlined" color="warning" endIcon={<EditIcon />}>
          Edit product
        </Button>
      </section>
      <section>
        <h1>Icon Button</h1>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </section>
    </div>
  );
};

export default CustomButton;
