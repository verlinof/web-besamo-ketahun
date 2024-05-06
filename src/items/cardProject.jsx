import Image from "next/image";

const CardProject = () => {
  return (
    <div>
      <div className="w-full border border-gray-500 rounded-3xl overflow-hidden">
        <Image
          className="w-full object-cover"
          quality={100}
          src={"/projects/kubuku.png"}
          width={560}
          height={250}
        />
        <div className="p-5">
          <p className="font-semibold text-[25px]">Kubuku</p>
          <p className="text-[18px]">
            This application is a book e-commerce, where users can borrow books
            through this application. This application uses Firebase as the main
            database and also as Authorization.
          </p>
          <div className="flex flex-wrap items-center justify-between py-[20px]">
            <div className="rounded-3xl py-[10px] px-[35px] border border-gray-500 hover:border-black hover:bg-white text-gray-500 font-medium hover:text-black hover:font-semibold transition-all ease-in-out duration-300 cursor-default">
              Backend
            </div>
            <div className="rounded-3xl py-[10px] px-[35px] border border-gray-500 hover:border-black hover:bg-white text-gray-500 font-medium hover:text-black hover:font-semibold transition-all ease-in-out duration-300 cursor-default">
              Kotlin & Firebase
            </div>
            <a href="https://github.com/verlinof/KuBuku">
              <div className="rounded-3xl py-[10px] px-[35px] border border-gray-500 hover:border-black hover:bg-white text-gray-500 font-medium hover:text-black hover:font-semibold transition-all ease-in-out duration-300">
                Details
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
