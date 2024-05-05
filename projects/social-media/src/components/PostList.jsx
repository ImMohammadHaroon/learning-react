import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
    {
      postList.length === 0 && <WelcomeMessage/>
    }
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
