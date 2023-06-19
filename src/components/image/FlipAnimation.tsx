import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    transition: "all 0.8s ease-in",
    animation: "$rotation 15s infinite",
    transformStyle: "preserve-3d",
    position: "relative",
  },
  front: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    backfaceVisibility: "hidden",
    position: "absolute",
  },
  back: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    transform: "rotateY(180deg)",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  "@keyframes rotation": {
    "0%": {
      transform: "perspective(3000px) rotateY(0deg)",
    },
    "25%": {
      transform: "perspective(3000px) rotateY(0deg)",
    },
    "50%": {
      transform: "perspective(3000px) rotateY(180deg)",
    },
    "75%": {
      transform: "perspective(3000px) rotateY(180deg)",
    },
    "100%": {
      transform: "perspective(3000px) rotateY(0deg)",
    },
  },
});

interface Props {
  img1: string;
  img2: string;
}

export const FlipAnimation: React.FC<Props> = ({ img1, img2 }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box className={classes.image}>
        <Box className={classes.front}>
          <img
            width="100%"
            height="100%"
            style={{
              borderRadius: "20px",
              filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, .3))",
            }}
            src={img1}
          />
        </Box>
        <Box className={classes.back}>
          <img
            width="100%"
            height="100%"
            style={{
              borderRadius: "20px",
              filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, .3))",
            }}
            src={img2}
          />
        </Box>
      </Box>
    </Box>
  );
};
