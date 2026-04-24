import { Button } from "@/components/ui/button";
import Processcard from "@/components/Processcard";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="pt-24 overflow-x-hidden">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 data-aos="fade-right">services</h2>
        <p data-aos="fade-up">
          I help businesses and individuals build modern, responsive websites
          that perform well and look professional.
        </p>
        <p data-aos="fade-up" data-aos-delay="100">
          From building new websites to redesigning existing ones, I provide
          frontend development services tailored to your needs.
        </p>
      </section>

      {/* services section */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto border bg-lightsurface dark:bg-darksurface text-lighttext dark:text-darktext rounded-lg">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 justify-center items-center">
            {/* image */}
            <div className="p-4 order-2 lg:order-1">
              <Image
                src="/dev.png"
                alt="websites mockup"
                width={500}
                height={400}
                className="lg:mx-0 rounded-lg"
                data-aos="zoom-in"
                data-aos-delay="100"
              ></Image>
            </div>

            {/* text */}
            <div className="space-y-2 p-4 order-1 lg:order-2">
              <h3 data-aos="fade-left">website creation & deployment</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                A complete website built from the ground up and delivered fully
                live, responsive, and ready to use.
              </p>
              <p data-aos="fade-left" data-aos-delay="150">
                What&apos;s included:
              </p>
              <ul className="">
                <li data-aos="fade-up" data-aos-delay="200">
                  Responsive design
                </li>
                <li data-aos="fade-up" data-aos-delay="250">
                  Modern UI
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Performance optimization
                </li>
                <li data-aos="fade-up" data-aos-delay="350">
                  Deployment to production
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border bg-lightsurface dark:bg-darksurface text-lighttext dark:text-darktext rounded-lg mt-6">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 justify-center items-center">
            {/* text */}
            <div className="space-y-2 p-4">
              <h3 data-aos="fade-right">Website Redesign</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                A visual and structural upgrade that transforms your existing
                site into something modern, clear, and more effective.
              </p>
              <p data-aos="fade-up" data-aos-delay="150">
                What&apos;s included:
              </p>
              <ul className="">
                <li data-aos="fade-up" data-aos-delay="200">
                  UI refresh
                </li>
                <li data-aos="fade-up" data-aos-delay="250">
                  Layout improvements
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Mobile responsiveness
                </li>
                <li data-aos="fade-up" data-aos-delay="350">
                  Performance improvements
                </li>
              </ul>
            </div>

            {/* image */}
            <div className="p-4">
              <Image
                src="/redesign.png"
                alt="websites mockup"
                width={500}
                height={400}
                className="lg:mx-0 rounded-lg"
                data-aos="zoom-in"
                data-aos-delay="100"
              ></Image>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border bg-lightsurface dark:bg-darksurface text-lighttext dark:text-darktext rounded-lg mt-6">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 justify-center items-center">
            {/* image */}
            <div className="p-4 order-2 lg:order-1">
              <Image
                src="/maintenance.png"
                alt="websites mockup"
                width={500}
                height={400}
                className="lg:mx-0 rounded-lg"
                data-aos="zoom-in"
                data-aos-delay="100"
              ></Image>
            </div>

            {/* text */}
            <div className="space-y-2 p-4 order-1 lg:order-2">
              <h3 data-aos="fade-left">Website Maintenance</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Ongoing support to keep your website running smoothly, secure,
                and consistently performing at its best.
              </p>
              <p data-aos="fade-left" data-aos-delay="150">
                What&apos;s included:
              </p>
              <ul className="">
                <li data-aos="fade-up" data-aos-delay="200">
                  Content updates
                </li>
                <li data-aos="fade-up" data-aos-delay="250">
                  UI adjustments
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Adding new sections/pages
                </li>
                <li data-aos="fade-up" data-aos-delay="350">
                  Responsive improvements
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  Performance tweaks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* process section */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Processcard />
        </div>
      </section>

      {/* contact banner */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 pb-6 max-w-7xl mx-auto">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h3 data-aos="fade-up">Ready to Build Something Great?</h3>
          <p data-aos="fade-up" data-aos-delay="100">
            Let&apos;s turn your vision into a website your customers will love.
            Reach out and let&apos;s build.
          </p>
          <Link href="/contact">
            <Button data-aos="fade-left" data-aos-delay="150">
              start a project
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default page;
