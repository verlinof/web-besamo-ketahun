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
            description1={"Starting with meeting to discuss about your needs."} >
            <p>
              <span className="text-white">Why?</span>{" "}Because understanding your needs and requirements is crucial, thoroughly addressing these aspects ensures that the project's objectives are aligned with the
              your expectations. This alignment not only enhances stakeholder satisfaction but also fosters trust and cooperation, ultimately contributing to the project's success.
              Additionally, it helps in identifying potential risks early, enabling proactive management and increasing the likelihood of project success.`
            </p>
          </WorkStep>
          <WorkStep
            step={"Step 02"}
            title={"Planning"}
            description1={"Defining clear goals and good planning."} >
            <p>
              <span className="text-white">At begins,</span> {" "} defining clear goals is essential: Establishing well-defined goals ensures that all team members understand the project's purpose and objectives, leading
              to a focused and cohesive effort. This clarity not only enhances motivation and alignment but also provides measurable benchmarks for success, driving the project towards its desired outcomes.
            </p>
            <br />
            <p>
              <span className="text-white">Choosing the right tech stack is critical,</span> {" "} Selecting the appropriate technology stack ensures that the project is built on robust, scalable, and
              maintainable foundations. This decision influences the app's performance, development speed, and future scalability, directly impacting the overall success and sustainability of the project.
            </p>
            <br />
            <p>
              <span className="text-white">Understanding the app flow is fundamental, </span> {" "}
              A well-designed app flow guarantees a smooth and intuitive user experience, reducing friction and increasing user satisfaction. By
              mapping out the user journey, potential issues can be identified and addressed early, leading to a more polished and user-friendly application.
            </p>
            <br />
            <p>
              <span className="text-white">Good requirement analysis is vital, </span> {" "}
              Conducting comprehensive requirement analysis ensures that the project meets both functional and non-functional needs. This process
              aligns the development with stakeholder expectations, mitigates risks, and sets clear criteria for success, ensuring the project delivers value and meets its goals efficiently.
            </p>
            <br />
          </WorkStep>
        </WorkStepContainer>
        <Footer />
      </div>
    </>
  );
}