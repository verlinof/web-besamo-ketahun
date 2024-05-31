import JumbotronProcess from "@/components/jumbotronProcess";
import Navbar from "@/components/navbar";

export default function Process() {
  return (
    <>
      <div className="font-urbanist bg-black">
        <Navbar active={"process"} />
        <JumbotronProcess />
      </div>
    </>
  );
}