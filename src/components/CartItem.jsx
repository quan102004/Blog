import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Link,
} from "@mui/material";
import LinkBehavior from "./LinkBehavior";

export default function CartItem({ id, title, image }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title={title} />
        <CardContent style={{ paddingBottom: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize={18}
            style={{ minHeight: "50px" }}
          >
            <Link
              color="inherit"
              style={{ textDecoration: "none" }}
              to={`/post/${id}`}
              component={LinkBehavior}
            >
              {title}
            </Link>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            component={LinkBehavior}
            to={`/post/${id}`}
          >
            Xem chi tiết
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
