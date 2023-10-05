import PocketBase from "pocketbase";


export const pocketbase = () => {
  const pb = new PocketBase("http://127.0.0.1:8090/api/collections/posts/records");

  pb.autoCancellation(false);

  const getPosts = async () => {
    return pb.collection("posts").getFullList();
  };

  return {
    getPosts,
  }
};




