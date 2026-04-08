import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  selectAllPosts,
  selectStatus,
} from "../../redux/slice/postSlice";
import CardItem from "../../components/CartItem";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  if (status === "error") {
    return <h2>Error</h2>;
  }

  return (
    <>
      <h1>Blog</h1>
      <Grid container spacing={2}>
        {status === "pending" ? (
          <h2>Loading...</h2>
        ) : (
          posts.map(({ id, title }) => {
            return (
              <Grid item xs={4} key={id}>
                <CardItem
                  image={
                    "http://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
                  }
                  id={id}
                  title={title}
                />
              </Grid>
            );
          })
        )}
      </Grid>
    </>
  );
}
