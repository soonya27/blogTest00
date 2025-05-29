"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, styled, Toolbar, Typography } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const menuList = [
  { href: "/", text: "works" },
  { href: "/about", text: "about" },
  { href: "/contact", text: "contact" },
];

export default function Header(props: Props) {
  const pathname = usePathname();
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <header className="">
      <AppBar component="nav" color="inherit" style={{ boxShadow: "none" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            =
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuList.map((item) => (
              <Link key={item.text} className={`${pathname === item.href && 'text-black after:content-[""] after:w-[0.35rem] after:h-[0.35rem] after:bg-s after:block after:rounded-full after:absolute after:top-0 after:-right-1'} text-sm sm:text-xl `} href={item.href}>
                {item.text}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* sideMenu */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <List>
            {menuList.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Link className={`block w-full text-left p-3 ${pathname === item.href && 'text-black after:content-[""] after:w-[0.35rem] after:h-[0.35rem] after:bg-s after:block after:rounded-full after:absolute after:top-0 after:-right-1'} text-sm sm:text-xl dark:hover:text-slate-300 ${pathname === item.href ? "dark:text-slate-200" : "dark:text-slate-400"}`} href={item.href}>
                  {item.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </header>
  );
}
