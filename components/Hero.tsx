import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        {/* text */}
        <div className="flex flex-col gap-4 px-4 lg:pl-8">
          <h1 data-aos="fade-left">
            frontend developer building fast, modern websites
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            I build modern, responsive websites, and help improve existing ones
            through redesign and maintenance.
          </p>
          <div className="sm:flex sm:place-content-start">
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contact">
                <Button
                  variant="default"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  Get in touch
                </Button>
              </Link>

              <Link href="/work">
                <Button
                  variant="outline"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  Browse projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="hidden lg:flex lg:justify-center">
          <Image
            src="/fay.png"
            alt="Favour Aniefiok Akpan"
            width={350}
            height={350}
            className="object-cover object-top border-3 rounded-[50%_50%_40%_40%/60%_60%_40%_40%] border-brandblack dark:border-brandwhite"
            priority
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
