import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
  Avatar,
  Typography,
  withStyles,
} from "@material-ui/core";
import Link from "next/link";

export const Header: React.FC = () => {
  const pages = ["home" /*, "about", "experience"*/];

  const ButtonTypography = withStyles({
    root: {
      color: "#ffffed",
    },
  })(Typography);

  return (
    <AppBar position="static" style={{ background: "#00274C" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box>
          {pages.map((page) => {
            return (
              <Link key={`${page}`} href={`./${page}`}>
                <Button color="inherit">
                  <ButtonTypography>{page}</ButtonTypography>
                </Button>
              </Link>
            );
          })}
          <a
            style={{ color: "inherit", textDecoration: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
            key={`connect`}
            href={`https://www.linkedin.com/in/william-haeck-041b37191/`}
          >
            <Button color="inherit">
              <ButtonTypography>Connect</ButtonTypography>
            </Button>
          </a>
        </Box>
        <IconButton>
          <Avatar alt="Will Haeck" src="profile.png" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
