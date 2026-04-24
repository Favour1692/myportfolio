"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { featured } from "@/type";
import Link from "next/link";
import Image from "next/image";

type props = {
  card: featured[];
};

const Projcard = ({ card }: props) => {
  return (
    <>
      {card.map((data) => (
        <CardContainer
          key={data.id}
          className="inter-var"
          containerClassName="py-4"
        >
          <CardBody className="bg-lightsurface relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/60 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem translateZ="100" className="w-full">
              <Image
                src={data.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="screenshot of the project's home page"
              />
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-lightmuted dark:text-darkmuted mt-2"
            >
              <h3>{data.title}</h3>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <p>{data.description}</p>
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <p>{data.stack}</p>
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-brandaccent dark:bg-lightbg dark:text-black text-white hover:bg-lightmuted dark:hover:bg-darkmuted dark:hover:text-lightbg text-xs font-bold"
              >
                <Link href={data.link} target="_blank">
                  View live →
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </>
  );
};

export default Projcard;
