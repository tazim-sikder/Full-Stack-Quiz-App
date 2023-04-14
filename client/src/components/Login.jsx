import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Center from "./Center";
import useForm from "../hooks/useForm";

const getFreshModel = () => ({
  name: "",
  email: "",
});

export default function Login() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const login = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
    }
  };

  const validate = () => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(values.email) ? "" : "Email is not valid";
    temp.name = values.name != "" ? "" : "This field is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };

  return (
    <Center>
      <Card sx={{ width: 400 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ my: 3 }}>
            Quiz App
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                margin: 1,
                width: "90%",
              },
            }} >
            <form noValidate autoComplete="off" onSubmit={login}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleInputChange}
                value={values.email}
                {...(errors.email && { error: true, helperText: errors.email })}/>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                onChange={handleInputChange}
                value={values.name}
                {...(errors.name && { error: true, helperText: errors.name })}/>
              <Button
                sx={{ width: "90%" }}
                type="submit"
                variant="contained"
                size="large"
              >
                Start
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}
