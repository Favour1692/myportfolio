"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { servicecard } from "@/constants";

const Wobble = () => {
  return (
    <>
      {servicecard.map((service) => (
        <WobbleCard
          key={service.id}
          className="bg-lightsurface dark:bg-darksurface py-6"
        >
          <div className="flex flex-col gap-2">
            <div className="text-brandaccent text-4xl">{service.icon}</div>
            <h3 className="text-lighttext dark:text-darktext">
              {service.title}
            </h3>
            <p>{service.description}</p>
          </div>
        </WobbleCard>
      ))}
    </>
  );
};

export default Wobble;
