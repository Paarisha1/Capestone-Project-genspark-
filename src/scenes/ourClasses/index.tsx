import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Strengthen your muscles and build endurance through our Weight Training Classes. Designed for all fitness levels, this class includes a combination of free weights, resistance machines, and bodyweight exercises to help you achieve your fitness goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find your inner peace and improve your flexibility with our Yoga Classes. These sessions combine traditional poses, breathing exercises, and mindfulness to enhance your physical and mental well-being.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and improve stability with our Ab Core Classes. This workout targets your abdominal muscles through a variety of dynamic exercises like planks, crunches, and twists to help you achieve a strong, toned core.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience the thrill of fitness with our Adventure Classes! These high-energy sessions incorporate obstacle courses, outdoor challenges, and fun team activities that boost endurance, strength, and camaraderie.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Enhance your overall health and stamina with our Fitness Classes. These sessions combine cardio, strength, and flexibility training to keep you motivated and help you achieve your fitness goals.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Take your fitness journey to the next level with our specialized Training Classes. These sessions include customized workout plans focusing on improving strength, endurance, and performance tailored to your fitness level.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Discover a variety of fitness classes tailored to meet your goals,
              whether you're seeking strength, flexibility, or adventure. Each
              class is designed to challenge and inspire you to reach your best
              self.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
