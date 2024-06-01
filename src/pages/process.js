import WorkStepContainer from "@/components/WorkStepContainer";
import Footer from "@/components/footer";
import JumbotronProcess from "@/components/jumbotronProcess";
import Navbar from "@/components/navbar";
import WorkStep from "@/components/workStep";

export default function Process() {
  return (
    <>
      <div className="font-urbanist bg-black">
        <Navbar active={"process"} />
        <JumbotronProcess />
        <WorkStepContainer>
          <WorkStep
            step={"Step 01"}
            title={"Get Started"}
            description1={"Starting with create a coming soon page for your website."}
            description2={"Why? Because It builds anticipation: A coming soon page generates buzz and excitement about your website before it even launches. This can be particularly helpful for new businesses or startups that want togenerate interest and curiosity around their brand."} />
          <WorkStep
            step={"Step 02"}
            title={"Planning"}
            description1={"Starting with create a coming soon page for your website."}
            description2={"Why? Because It builds anticipation: A coming soon page generates buzz and excitement about your website before it even launches. This can be particularly helpful for new businesses or startups that want togenerate interest and curiosity around their brand."} />
          <WorkStep
            step={"Step 03"}
            title={"Design"}
            description1={"Starting with create a coming soon page for your website."}
            description2={"Why? Because It builds anticipation: A coming soon page generates buzz and excitement about your website before it even launches. This can be particularly helpful for new businesses or startups that want togenerate interest and curiosity around their brand."} />
        </WorkStepContainer>
        <Footer />
      </div>
    </>
  );
}