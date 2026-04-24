import { Card, CardContent } from "@/components/ui/card";
import { process } from "@/constants";

const Processcard = () => {
  return (
    <>
      {process.map((card) => (
        <Card
          key={card.id}
          className="bg-lightsurface dark:bg-darksurface"
          data-aos="fade-up"
        >
          <CardContent>
            <div className="flex flex-col gap-2">
              <h2>{card.process}</h2>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Processcard;
