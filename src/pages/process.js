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
            description1={"Starting with meeting to discuss about your needs."}
            description2={`Why? Because understanding your needs and requirements is crucial, thoroughly addressing these aspects ensures that the project's objectives are aligned with the 
            your expectations. This alignment not only enhances stakeholder satisfaction but also fosters trust and cooperation, ultimately contributing to the project's success. 
            Additionally, it helps in identifying potential risks early, enabling proactive management and increasing the likelihood of project success.`} />
          <WorkStep
            step={"Step 02"}
            title={"Planning"}
            description1={"Starting with create a coming soon page for your website."}
            description2={`At begins, defining clear goals is essential: Establishing well-defined goals ensures that all team members understand the project's purpose and objectives, leading to a 
            focused and cohesive effort. This clarity not only enhances motivation and alignment but also provides measurable benchmarks for success, driving the project towards its desired outcomes.

            Choosing the right tech stack is critical: Selecting the appropriate technology stack ensures that the project is built on robust, scalable, and maintainable foundations. 
            This decision influences the app's performance, development speed, and future scalability, directly impacting the overall success and sustainability of the project.
            
            Understanding the app flow is fundamental: A well-designed app flow guarantees a smooth and intuitive user experience, reducing friction and increasing user satisfaction. By 
            mapping out the user journey, potential issues can be identified and addressed early, leading to a more polished and user-friendly application.
            
            Good requirement analysis is vital: Conducting comprehensive requirement analysis ensures that the project meets both functional and non-functional needs. This process 
            aligns the development with stakeholder expectations, mitigates risks, and sets clear criteria for success, ensuring the project delivers value and meets its goals efficiently.`} />
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