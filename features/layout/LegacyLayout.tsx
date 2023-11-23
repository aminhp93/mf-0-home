import { useState, ReactNode } from "react";
import { ListItem, AppBar, Drawer, Button, List } from "@mui/material";

type Props = {
  children?: ReactNode;
};

const LegacyLayout = ({ children }: Props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawer = (
    <Drawer
      anchor={"left"}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Alarm statistic</ListItem>
        <ListItem>settings</ListItem>
        <ListItem>tools</ListItem>
      </List>
    </Drawer>
  );

  const footer = (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#424242" }}
    >
      <Button onClick={() => setOpenDrawer(true)}>Open</Button>
      <div>Footer</div>
    </AppBar>
  );

  return (
    <div>
      {drawer}
      {children}
      {footer}
    </div>
  );
};

export default LegacyLayout;
