import BlogDetailPage from "@/components/home/blogDetailPage";

interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
}

const Page = ({ params }: PageProps) => {
  const { slug } = params;

  return <BlogDetailPage slug={slug} />;
};

export default Page;