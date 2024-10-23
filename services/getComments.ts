import type { IComments } from "./commentsTypes";

const getComments = async (id: number): Promise<IComments | undefined> => {
  try {
    const result = await fetch(`https://dummyjson.com/posts/${id}/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: IComments = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getComments;
