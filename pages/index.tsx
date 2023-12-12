// Import libraries
import dynamic from "next/dynamic";
import { useSettings, useTheme, log } from "mf-packages";
import { Button, Box } from "@mui/material";
import Link from "next/link";

// Import local files
import axiosInstance from "@/@core/services";
import Dialog from "@/@core/components/dialog/Dialog";
import DialogWrapper from "@/@core/components/dialog/DialogWrapper";

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
  const logData = log();
  console.log({
    theme: theme.components?.MuiButton?.styleOverrides?.root,
    logData,
  });

  const handleLogin = async () => {
    const res = await axiosInstance({
      url: "http://10.250.0.142:8000/api/v1/auth/login",
      method: "POST",
      data: {
        username: "admin",
        password: "admin",
      },
    });
    console.log(res);
  };

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
        variant="outlined"
        onClick={() => {
          saveSettings({
            ...settings,
            ["mode"]: settings.mode === "light" ? "dark" : "light",
          });
        }}
      >
        Mode {settings.mode}
      </Button>
      <Button variant="contained" onClick={() => handleLogin()}>
        test login
      </Button>
      <DialogWrapper>
        <Dialog
          style={style}
          default={{
            x: 0,
            y: 0,
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

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false,
});
