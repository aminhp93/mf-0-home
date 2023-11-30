import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const GridItem = ({ children, ...props }: Props) => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        color: "black",
        overflow: "hidden",
        borderRadius: "6px",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default GridItem;
