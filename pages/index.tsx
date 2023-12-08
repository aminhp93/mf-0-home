import dynamic from "next/dynamic";
// import { useSettings } from "@/@core/hooks/useSettings";
import { useSettings } from "mf-packages";
import { Button as MuiButton } from "@mui/material";
import axiosInstance from "@/@core/services";

import Link from "next/link";

const IndexPage = () => {
  const { settings, saveSettings } = useSettings();

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
    <div>
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
      <MuiButton
        variant="outlined"
        onClick={() => {
          saveSettings({
            ...settings,
            ["mode"]: settings.mode === "light" ? "dark" : "light",
          });
        }}
      >
        Mode {settings.mode}{" "}
      </MuiButton>
      <MuiButton onClick={() => handleLogin()}>test login</MuiButton>
    </div>
  );
};

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false,
});
