// Import libraries
import { useSettings, useTheme } from "mf-packages";
import { Button, Box } from "@mui/material";
import Link from "next/link";
import Dialog from "@/@core/components/dialog/Dialog";
import DialogWrapper from "@/@core/components/dialog/DialogWrapper";
import dynamic from "next/dynamic";

const Logout = dynamic(() => import("@/features/auth/Logout"), {
  ssr: false,
});

const UserDetail = dynamic(() => import("@/features/users/UserDetail"), {
  ssr: false,
});

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
} as const;

const IndexPage = () => {
  const { settings, saveSettings } = useSettings();
  const theme = useTheme();
  console.log({
    theme: theme.components?.MuiButton?.styleOverrides?.root,
  });

  return (
    <Box>
      <h1>Index page</h1>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/view/123">view id</Link>
        </li>
        <li>
          <Link href="/edit/123">edit id</Link>
        </li>
        <li>
          <Link href="/dashboard">dashboard</Link>
        </li>
      </ul>
      <Button
        variant="contained"
        onClick={() => {
          saveSettings({
            ...settings,
            ["mode"]: settings.mode === "light" ? "dark" : "light",
          });
        }}
      >
        Mode {settings.mode}
      </Button>
      <Logout />
      <UserDetail />
      <DialogWrapper>
        <Dialog
          style={style}
          default={{
            x: 300,
            y: 300,
            width: 200,
            height: 200,
          }}
        >
          ReactRnd
        </Dialog>
      </DialogWrapper>
    </Box>
  );
};

export default IndexPage;
