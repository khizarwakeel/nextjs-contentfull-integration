const getBlogsData = async () => {
  const URL = `https://cdn.contentful.com/spaces/756bo1qps4ce/entries?access_token=e2gAdpdzZunrg4ryxiqckuZRfbuMowVHbq8gNjpO59g&content_type=blog`;
  try {
    const response = await fetch(URL, {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Failed to load data!");
    }
    const blogData = await response.json();
    return blogData;
  } catch (error: any) {
    console.log(error.message);
  }
};

const MyBlog = async () => {
  const blogDataCont = await getBlogsData();
  console.log(blogDataCont);

  return <>{blogDataCont.items[0].fields.title}</>;
};

export default MyBlog;