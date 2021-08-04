import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PostDetails from "./component/Posts/PostDetails/PostDetails";
import Posts from "./component/Posts/Posts";
import { fetchAllPosts } from "./store/post/postAction";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPosts.allPosts);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [posts.length]);
  console.log(posts);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:id" component={PostDetails} />
      </Switch>
    </>
  );
}

export default App;
