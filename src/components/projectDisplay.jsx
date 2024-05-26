import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectDisplay = ({ title, description, children }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div
        id="projects"
        className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[60px] text-white"
      >
        <p className="text-gray-400 mb-5">{title}</p>
        <p className="text-[20px] md:text-[30px] lg:text-[38px] w-full lg:w-[811px]">
          {description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 my-[50px]">
          {children}
        </div>
        {currentPath === "/" && (
          <div className="w-full flex justify-center">
            <Link className="text-white font-semibold" href="/projects">
              <div className="rounded-3xl flex items-center py-[10px] px-[35px] border border-main-gray hover:border-black hover:bg-white text-secondary-gray font-medium hover:text-black hover:font-semibold transition-all ease-in-out duration-300 text-sm lg:text-md xl:text-lg">
                <p>See all projects</p> &nbsp;&nbsp;
                <Image
                  src="/arrow_up.svg"
                  width={20}
                  height={20}
                  alt="See all projects"
                />
              </div>
            </Link>
          </div>
        )}
      </div>
      {/* Divider */}
      {currentPath === "/" && (
        <hr className="border border-gray-700 mt-[40px]" />
      )}
    </>
  );
};

export default ProjectDisplay;
