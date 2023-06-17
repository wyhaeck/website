import React, { useCallback } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  styled,
} from "@mui/material";
import useViewsStore from "../../stores/useViewsStore";

export const Header: React.FC = () => {
  const pages = ["home", "story", "experience", "portfolio"];

  const { setView } = useViewsStore((state) => state);

  const handleClick = useCallback(
    async (view: string) => {
      console.log(view);
      setView(view);
    },
    [setView]
  );

  const ButtonTypography = styled(Typography)({
    color: "#ffffed",
    textTransform: "none",
  });

  return (
    <Box display="flex" justifyContent="center">
      <Box pt={2} width="25%">
        <AppBar
          position="fixed"
          sx={{
            width: "30%",
            borderRadius: 32,
            top: 16,
            left: "50%",
            marginLeft: "-15%",
          }}
        >
          <Toolbar
            sx={{
              zIndex: "3",
              justifyContent: "center",
              background: "#00274C",
              borderRadius: 32,
            }}
          >
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  color="inherit"
                  onClick={() => handleClick(page)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#293d55",
                    },
                  }}
                >
                  <ButtonTypography>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </ButtonTypography>
                </Button>
              );
            })}
            <a
              style={{ color: "inherit", textDecoration: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
              key={`connect`}
              href={`https://www.linkedin.com/in/william-haeck-041b37191/`}
            >
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    backgroundColor: "#293d55",
                  },
                }}
              >
                <ButtonTypography>Connect</ButtonTypography>
              </Button>
            </a>
            {/* <IconButton>
          <Avatar alt="Will Haeck" src="profile.png" />
        </IconButton> */}
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};
