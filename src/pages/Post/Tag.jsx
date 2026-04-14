import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/PostList";
import { useEffect } from "react";
import { getUser, selectUserById } from "../../redux/slice/userSlice";
import { useParams } from "react-router-dom";
import { selectStatus } from "../../redux/slice/userSlice";
import Error from "../../components/Error";

export default function Tag() {
    const { tag } = useParams();

    return (
        <>
            <h1>Tag: {tag}</h1>
            <PostList filter="tag" value={tag} />
        </>
    );
}
