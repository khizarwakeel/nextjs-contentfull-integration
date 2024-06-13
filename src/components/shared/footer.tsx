import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-5">
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <Link
            href="https://khizarwakeel.vercel.app/"
            className="hover:text-[#719b8f]"
            target="_blank"
          >
            Khizar Wakeel
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;