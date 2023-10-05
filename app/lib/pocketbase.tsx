import PocketBase from "pocketbase";

export const pocketbase = () => {
  const pb = new PocketBase(
    "http://127.0.0.1:8090/"
  );

  pb.autoCancellation(false);

  const getPosts = async () => {
    return pb.collection("posts").getFullList();
  };

  return {
    getPosts,
  };
};

