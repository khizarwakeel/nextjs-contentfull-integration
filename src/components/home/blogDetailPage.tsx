import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const getBlogsData = async () => {
  const URL = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`;
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

const BlogDetailPage = async () => {
  const blogDataCont = await getBlogsData();
  console.log("blogDataCont", blogDataCont);

  const imageUrl = blogDataCont.includes.Asset[0].fields.file.url;
  const imageWidth =
    blogDataCont.includes.Asset[0].fields.file.details.image.width;
  const imageHeight =
    blogDataCont.includes.Asset[0].fields.file.details.image.height;
  return (
    <section>
      <div className="max-w-3xl mx-auto px-5">
        <div className="flex">
          <Link
            href="/"
            className="flex items-center gap-2 mt-10 hover:text-[#719b8f] text-sm md:text-base text-[#3d483d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-5 size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>{" "}
            Back to Home{" "}
          </Link>
        </div>
        <div className="flex justify-between md:mt-10 mt-8">
          <div className="text-gray-500">June 4, 2024</div>
          <div className="flex gap-5">
            <FaLinkedinIn className="h-6 w-6 text-[#3d483d]" title="Linkedin" />
            <FaGithub className="h-6 w-6 text-[#3d483d]" title="GitHub" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center md:text-4xl text-xl font-bold md:mt-10 mt-8 mb-4 text-[#719b8f]">
            9 Proven Strategies and Signs of High-Functioning Anxiety
          </h1>
          <div className="text-left mb-4 text-xl text-[#719b8f] font-bold px-4">
            <span className="text-black font-normal">Written by</span> | John
            Doe
          </div>
        </div>
        <div>
          <Image
            src={`https:${imageUrl}`}
            width={imageWidth}
            height={imageHeight}
            alt={blogDataCont.items[0].fields.title}
            title={blogDataCont.items[0].fields.title}
            className="h-full w-full rounded-xl flex justify-center"
            // placeholder="blur"
          />
        </div>
        <div className="prose max-w-full mb-10 md:text-justify lg:px-5 md:mt-10 mt-5">
          {documentToReactComponents(blogDataCont.items[0].fields.body)}
        </div>{" "}
        <div className="flex">
          <Link
            href="/"
            className="flex items-center gap-2 mt-2 hover:text-[#719b8f] text-sm md:text-base text-[#3d483d] mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-5 size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>{" "}
            Back to Home{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
