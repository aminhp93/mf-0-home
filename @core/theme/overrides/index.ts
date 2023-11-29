// ** MUI Imports
import { Theme } from "@mui/material/styles";

// ** Type Import
import { Settings } from "@/@core/context/settingsContext";

// ** Overrides Imports

import MuiButton from "./button";

const Overrides = (theme: Theme, settings: Settings) => {
  const { skin } = settings;

  const button = MuiButton(theme);

  return Object.assign(button);
};

export default Overrides;
