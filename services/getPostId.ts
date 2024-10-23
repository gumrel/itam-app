import type { IPosts } from "./commentsTypes";

const getPostId = async (id: number): Promise<IPosts | undefined> => {
  try {
    const result = await fetch(`https://dummyjson.com/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: IPosts = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getPostId;
