import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";
import { userAuth } from "../context/AuthContext";
import NavLinks from "./shared/NavLink";

const Header = () => {
  const auth = userAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavLinks
                bg="#00fffc"
                to="/chat"
                text="Go to Chat"
                textColor="black"
              ></NavLinks>
              <NavLinks
                bg="#51538f"
                to="/"
                text="Logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavLinks
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              ></NavLinks>
              <NavLinks
                bg="#51538f"
                to="/signup"
                text="Sign Up"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
