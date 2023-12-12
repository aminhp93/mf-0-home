import { styled } from "mf-packages";
import Box, { BoxProps } from "@mui/material/Box";

const DialogWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  "& .react-draggable": {
    color: theme.palette.primary.main,
  },
}));

export default DialogWrapper;
