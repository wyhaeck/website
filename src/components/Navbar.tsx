import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
  Avatar,
} from "@material-ui/core";
import Link from "next/link";

export const Header: React.FC = () => {
  const pages = ["home", "about", "experience", "portfolio", "connect"];

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box>
          {pages.map((page) => {
            return (
              <Link key={`${page}`} href={`./${page}`}>
                <Button color="inherit">{page}</Button>
              </Link>
            );
          })}
        </Box>
        <IconButton>
          <Avatar alt="Will Haeck" src="profile.png" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
