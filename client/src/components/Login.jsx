import React from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Center from "./Center";

export default function Login() {
  return (
    <Center>
      <Card sx={{ width: 400 }}>
        <CardContent sx={{textAlign:"center"}}>
          <Typography variant="h4" sx={{my: 3}}>Quiz App</Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                margin: 1,
                width: "90%",
              },
            }}>
            <form noValidate autoComplete="off">
              <TextField label="Email" name="email" variant="outlined" />
              <TextField label="Name" name="name" variant="outlined" />
              <Button
                sx={{ width: "90%" }}
                type="submit"
                variant="contained"
                size="large"> Start </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}
