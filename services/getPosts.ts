import type { IPosts } from "./commentsTypes";

const getPosts = async (count: number): Promise<IPosts | undefined> => {
  try {
    const result = await fetch(`https://dummyjson.com/posts?limit=${count}`, {
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

export default getPosts;
