import React from "react";
import { Checklist } from "./features/checklist/Checklist";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SchoolIcon from "@mui/icons-material/School";

const SubHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          textAlign: "center",
          backgroundColor: "#3eb1c8",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <SchoolIcon />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f7f7f7",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "white",
          color: "#5b6770",
          textAlign: "center",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon sx={{ color: "#095576" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
            }}
          >
            Orientation
          </Typography>
        </Toolbar>
      </AppBar>
      <SubHeader />
      <Checklist />
    </Container>
  );
}

export default App;
