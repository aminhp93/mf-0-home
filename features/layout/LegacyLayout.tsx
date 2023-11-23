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
        <ListItem>navigation</ListItem>
        <ListItem>tag groups</ListItem>
        <ListItem>journals</ListItem>
        <ListItem>user log</ListItem>
        <ListItem>reports</ListItem>
        <ListItem>alarm settings</ListItem>
      </List>
    </Drawer>
  );

  const footer = (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#424242",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Button onClick={() => setOpenDrawer(true)}>Open</Button>
      <div>
        <Button>alarm</Button>
        <Button>user</Button>
        <Button>plot</Button>
        <Button>tag</Button>
        <Button>app builder</Button>
        <Button>edit view</Button>
      </div>
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
