import { Button } from "@mui/material";

const CustomButton = ({ label, ...props }: any) => {
  return <Button {...props}>{label}</Button>;
};

export default CustomButton;
