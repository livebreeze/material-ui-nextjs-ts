"use client";

import {
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  OutlinedInput,
  ThemeProvider,
} from "@mui/material";
import NextLink from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { createTheme } from "@mui/material/styles";
import Image from "next/image";
import logPic from "../../../public/images/logo.png";

declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: "#FCCB11",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Image src={logPic} alt="logo" />
          </Box>
          {/* <LoginForm /> */}
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-id">
                  使用者ID
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-id"
                  type="text"
                  label="id"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  密碼
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <Button variant="contained" color="ochre">
                  Contained
                </Button>
              </FormControl>
            </div>
          </Box>
        </Container>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: "sm" }}>
            <Button variant="contained" component={NextLink} href="/">
              Go to the home page
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
