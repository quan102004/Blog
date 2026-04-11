import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
export default function Loading({ type = "backdrop" }) {
  return type === "backdrop" ? (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <CircularProgress />
  );
}
