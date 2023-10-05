import PocketBase from "pocketbase";

export const pocketbase = () => {
  const pb = new PocketBase(
    "http://127.0.0.1:8090/api/collections/posts/records"
  );

  pb.autoCancellation(false);

  const getPosts = async () => {
    return pb.collection("posts").getFullList();
  };

  return {
    getPosts,
  };
};

const url = "http://127.0.0.1:8090/api/collections/posts/records";

export const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Статус: ${response.status}`);
    }
    const data = await response.json();
    return data; // Повертаємо дані у вигляді масиву
  } catch (error) {
    console.error("Виникла помилка:", error);
    throw error;
  }
};

