"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          <div className="w-52"></div>
          {cards.map((card) => {
            return <Card card={card} key={card.id + "cars"} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  card,
}: {
  card: {
    url: string;
    title: string;
    id: number;
  };
}) => {
  return (
    <div
      key={card.id + "-list"}
      className="group relative h-[600px] w-[600px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://www.goalcollectorimmigration.com/images/b01.jpg",
    title: "Title 7",
    id: 7,
  },
];
