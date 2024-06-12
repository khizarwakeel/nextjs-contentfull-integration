import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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
  const imageUrl = blogDataCont.includes.Asset[0].fields.file.url;
  const imageWidth = blogDataCont.includes.Asset[0].fields.file.details.image.width;
  const imageHeight = blogDataCont.includes.Asset[0].fields.file.details.image.height;

  return (
    <>
      <h1>{blogDataCont.items[0].fields.title}</h1>
      <Image
        src={`https:${imageUrl}`}
        width={imageWidth}
        height={imageHeight}
        alt="Blog Image"
        title="Blog Image"
        className="w-[60%] h-[60%] flex justify-center"
      />
      <div className="prose">{documentToReactComponents(blogDataCont.items[0].fields.body)}</div>
    </>
  );
};

export default MyBlog;