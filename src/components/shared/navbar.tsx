import Image from "next/image";
import Logo from "../../../public/assets/blog.png";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 py-5">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="My Blogs"
                title="My Blog"
                width={500}
                height={500}
                className="md:w-28 w-24"
              />
            </Link>
          </div>
          <div className="flex md:gap-5 gap-3">
            <Link
              href={"https://pk.linkedin.com/in/khizarwakeel"}
              target="_blank"
              className="text-xl text-[#3d483d] font-bold"
            >
              <FaLinkedinIn
                className="md:h-8 md:w-8 w-6 h-6 text-[#3d483d]"
                title="Linkedin"
              />
            </Link>
            <Link
              href={"https://github.com/khizarwakeel"}
              target="_blank"
              className="text-xl text-[#3d483d] font-bold"
            >
              <FaGithub
                className="md:h-8 md:w-8 w-6 h-6 text-[#3d483d]"
                title="GitHub"
              />
            </Link>
            <Link
              href={"https://khizarwakeel.vercel.app/"}
              target="_blank"
              className="text-xl text-[#3d483d] font-bold"
            >
              <CgWebsite
                className="md:h-8 md:w-8 w-6 h-6 text-[#3d483d]"
                title="Portfolio"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;