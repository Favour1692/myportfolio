import Projcard from "@/components/Projcard";
import { projectcard } from "@/constants";

const page = () => {
  return (
    <section className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-6">
      <h2 data-aos="zoom-right" data-aos-delay="100">
        My portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        <Projcard card={projectcard} />
      </div>
    </section>
  );
};

export default page;
