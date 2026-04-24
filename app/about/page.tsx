import Wobble from "@/components/Wobble";
import Image from "next/image";

const page = () => {
  return (
    <section className="pt-24 overflow-x-hidden">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 data-aos="fade-right">about me</h2>
        <h4 className="font-semibold" data-aos="fade-up" data-aos-delay="100">
          Front-end developer focused on building clean, fast, and responsive
          websites.
        </h4>
        <p data-aos="fade-up" data-aos-delay="150">
          I specialize in creating modern user interfaces and responsive
          websites that help businesses establish a strong online presence. My
          focus is on performance, usability, and clean design.
        </p>
      </section>

      {/* my story */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 data-aos="fade-right">my story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <Image
              src="/mystory.png"
              alt="websites mockup"
              width={500}
              height={400}
              className="lg:mx-0 rounded-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            ></Image>
          </div>

          <div className="lg:col-span-2">
            <p data-aos="fade-up" data-aos-delay="150">
              I&apos;m a front-end developer passionate about building modern and
              user-friendly websites. I focus on creating responsive layouts,
              clean UI, and smooth user experiences. Over the years, I&apos;ve
              sharpened my craft through consistent practice, real-world
              projects, and a genuine curiosity for how great interfaces are
              built.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              I enjoy turning ideas and designs into fully functional websites
              using modern tools and best practices. By building from scratch,
              redesigning an existing website and maintaining a live project, I
              aim to deliver reliable and scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* stack section */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 data-aos="fade-right">skills</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Technologies and tools I use to build modern, responsive, and
          high-performance websites.
        </p>
        <div className="flex flex-wrap gap-8 py-4">
          <div
            className="flex flex-col gap-2 p-4 border border-darkbg dark:border-lightbg rounded-br-2xl rounded-tl-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3
              className="text-lighttext dark:text-darktext text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              frontend
            </h3>
            <ul className="flex flex-wrap gap-3">
              <li className="badge" data-aos="fade-up" data-aos-delay="100">
                HTML5
              </li>
              <li className="badge" data-aos="fade-up" data-aos-delay="150">
                CSS3
              </li>
              <li className="badge" data-aos="fade-up" data-aos-delay="200">
                JavaScript
              </li>
              <li className="badge" data-aos="fade-up" data-aos-delay="250">
                TypeScript
              </li>
            </ul>
          </div>
          <div
            className="flex flex-col gap-2 p-4 border border-darkbg dark:border-lightbg rounded-br-2xl rounded-tl-2xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3
              className="text-lighttext dark:text-darktext text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              frameworks
            </h3>
            <ul className="flex flex-wrap gap-3">
              <li className="badge" data-aos="fade-up" data-aos-delay="100">
                Reactjs
              </li>
              <li className="badge" data-aos="fade-up" data-aos-delay="150">
                Nextjs
              </li>
            </ul>
          </div>
          <div
            className="flex flex-col gap-2 p-4 border border-darkbg dark:border-lightbg rounded-br-2xl rounded-tl-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3
              className="text-lighttext dark:text-darktext text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              styling
            </h3>
            <ul className="flex flex-wrap gap-3">
              <li className="badge" data-aos="fade-up" data-aos-delay="100">
                Tailwindcss
              </li>
              <li className="badge" data-aos="fade-up" data-aos-delay="150">
                UI component libraries
              </li>
            </ul>
          </div>
          <div
            className="flex flex-col gap-2 p-4 border border-darkbg dark:border-lightbg rounded-br-2xl rounded-tl-2xl"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h3
              className="text-lighttext dark:text-darktext text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              tools and deployment
            </h3>
            <ul className="flex flex-wrap gap-3">
              <li className="badge" data-aos="fade-up" data-aos-delay="100">
                git
              </li>
              <li className="badge" data-aos="fade-up" data-aos-delay="150">
                vercel
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 data-aos="fade-right">Services</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-4 md:px-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Wobble />
        </div>
      </section>

      {/* why work with me section */}
      <section className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-10">
        <h2 data-aos="fade-right">why choose me?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <Image
              src="/whychoose.png"
              alt="websites mockup"
              width={500}
              height={400}
              className="lg:mx-0 rounded-lg"
              data-aos="zoom-in"
              data-aos-delay="100"
            ></Image>
          </div>

          <div className="lg:col-span-2">
            <ul className="space-y-2">
              {" "}
              <li>
                <h4 data-aos="fade-up" data-aos-delay="100">
                  Clean and purposeful design
                </h4>
                <p className="" data-aos="fade-up" data-aos-delay="150">
                  I focus on layouts that are simple, clear, and easy to use so
                  visitors understand your message without confusion.
                </p>
              </li>
              <li>
                <h4 data-aos="fade-up" data-aos-delay="200">
                  Built for peformance
                </h4>
                <p className="" data-aos="fade-up" data-aos-delay="250">
                  Every site I build is optimized to load fast and run smoothly
                  across devices, without unnecessary bloat.
                </p>
              </li>
              <li>
                <h4 data-aos="fade-up" data-aos-delay="300">
                  Responsive across all devices
                </h4>
                <p className="" data-aos="fade-up" data-aos-delay="350">
                  Your website will look and function properly on mobile,
                  tablet, and desktop screens.
                </p>
              </li>
              <li>
                <h4 data-aos="fade-up" data-aos-delay="400">
                  Attention to detail
                </h4>
                <p className="" data-aos="fade-up" data-aos-delay="450">
                  From spacing and typography to interactions and structure, I
                  make sure everything feels polished and consistent.{" "}
                </p>
              </li>
              <li>
                <h4 data-aos="fade-up" data-aos-delay="500">
                  Clear communication
                </h4>
                <p className="" data-aos="fade-up" data-aos-delay="550">
                  I keep things straightforward and transparent so you always
                  know what&apos;s being built and why.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
