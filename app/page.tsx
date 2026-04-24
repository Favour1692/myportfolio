import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Projcard from "@/components/Projcard";
import { featuredcard } from "@/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="overflow-x-hidden">
      {/* hero section */}
      <Hero />
      {/* marquee section */}
      <section className="my-2">
        <Stack />
      </section>

      {/* featured work section */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 data-aos="fade-right">Projects</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            A selection of projects built with care and precision
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Projcard card={featuredcard} />
          </div>
          <Link href="/work">
            <Button variant="outline" data-aos="fade-up" data-aos-delay="150">
              More projects
            </Button>
          </Link>
        </div>
      </section>

      {/* about me */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 data-aos="fade-right">about me</h2>
        <div
          className="max-w-6xl mx-auto border bg-lightsurface dark:bg-darksurface rounded-lg py-6"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* image */}
            <div className="px-4">
              <Image
                src="/mockup1.png"
                alt="websites mockup"
                width={500}
                height={400}
                className="mx-auto lg:mx-0 rounded-lg"
                data-aos="zoom-in-right"
              ></Image>
            </div>

            {/* text */}
            <div className="space-y-2 text-left px-4">
              <p data-aos="fade-up" data-aos-delay="100">
                I design and develop modern web interfaces with a focus on
                clarity, performance, and usability. My goal is to build
                websites that are not just visually appealing but also fast and
                functional.
              </p>
              <div className="">
                <Link href="/about">
                  <Button
                    variant="default"
                    data-aos="fade-left"
                    data-aos-delay="150"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 data-aos="fade-right">Services</h2>
        <div
          className="max-w-6xl mx-auto border bg-lightsurface dark:bg-darksurface rounded-lg py-6"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* text */}
            <div className="flex flex-col gap-2 pl-6 order-2 lg:order-1">
              <p data-aos="fade-up" data-aos-delay="100">
                I offer website development, redesign, and maintenance services.
                To learn more about what each service includes, click the button
                below to view the full details.
              </p>
              <div className="flex justify-start">
                <Link href="/services">
                  <Button
                    variant="outline"
                    data-aos="fade-right"
                    data-aos-delay="150"
                  >
                    View details
                  </Button>
                </Link>
              </div>
            </div>

            {/* image */}
            <div className="px-4 order-1 lg:order-2">
              <Image
                src="/mockup2.png"
                alt="websites mockup"
                width={500}
                height={400}
                className="lg:mx-0 rounded-lg"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
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
            <Button data-aos="fade-up" data-aos-delay="150">
              start a project
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default page;
