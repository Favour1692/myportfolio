import Image from "next/image";
import { socials } from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <section className="w-full h-screen place-content-center overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {/* text */}
          <div className="flex flex-col gap-4 px-4 lg:pl-8">
            <h1 data-aos="fade-right">get in touch</h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Let&apos;s turn your vision into a website your customers will love.
              Reach out through any of the channels below:
            </p>
            <div>
              <ul className="space-y-2">
                <li data-aos="fade-up" data-aos-delay="150">
                  email: akpanfayvhor@gmail.com
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  whatsapp: click to send a whatsapp message
                </li>
                <li data-aos="fade-up" data-aos-delay="250">
                  linkedIn: akpan fayvhor
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  className="text-lg text-brandaccent hover:text-lightmuted"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  {social.logo}
                </Link>
              ))}
            </div>
          </div>
          {/* image */}
          <div className="">
            <Image
              src="/contact.png"
              alt="web dev mockup"
              width={600}
              height={500}
              className=""
              data-aos="zoom-in-left"
            ></Image>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
