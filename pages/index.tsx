import dynamic from "next/dynamic";
// import { useSettings } from "@/@core/hooks/useSettings";
import { useSettings } from "mf-packages";
import { Button } from "@mui/material";

import Link from "next/link";

const IndexPage = () => {
  const { settings, saveSettings } = useSettings();

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
        Mode {settings.mode}{" "}
      </Button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false,
});
