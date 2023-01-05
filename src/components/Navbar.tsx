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
// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

// export const DrawerAppBar: React.FC = ({ props }) => {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6">MUI</Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item}>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div">
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button key={item}>{item}</Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// };

export const Header: React.FC = () => {
  const pages = ["about", "experience", "portfolio", "connect"];

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
