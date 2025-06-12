import { useState } from "react";
import serviceImage from "../assets/service-image.png"; 

const services = [
  {
    title: "Flutter App Development",
    // content:
    //   "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? ",
    // linkText: "Let’s get started today!",
  },
  { title: "UI/UX Design" },
  { title: "Customization & Integration" },
  { title: "Testing & Quality Assurance" },
  { title: "Maintenance & Support" },
  { title: "Consulting & Training" },
  { title: "Migration & Upgrades" },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full bg-black text-white px-6 md:px-2 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Dynamic Services Suite!</h2>
        <h3 className="text-lg text-gray-300 mb-2">Embrace Innovation: Let’s Create Together!</h3>
        <p className="text-gray-400">
          Step into innovation! Explore our range of services and let’s create something extraordinary together. Your vision, our expertise. Let’s begin!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="md:w-1/2 space-y-6">
          {services.map((service, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center cursor-pointer text-xl font-semibold"
                onClick={() => toggleAccordion(index)}
              >
                <span>{service.title}</span>
                <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
              </div>
              
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img src={serviceImage} alt="Service Illustration" className="rounded-lg w-full h-100" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
