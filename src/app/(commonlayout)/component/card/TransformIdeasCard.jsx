
import { TbDatabaseDollar } from "react-icons/tb";
import { FaHeartbeat, FaRocket } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa6";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { IoCart } from "react-icons/io5";
const TransformIdeasCard = () => {
  const data = [
    {
      id: 1,
      name: "Fintech",
      icon: <TbDatabaseDollar className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description:
        "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
    },
    {
      id: 2,
      name: "Healthcare",
      icon: <FaHeartbeat className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description:
        "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
    },
    {
      id: 3,
      name: "Automation",
      icon: <TbSteeringWheelFilled className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description:
        "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
    },
    {
      id: 4,
      name: "E-Commerce",
      icon: <IoCart  className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description:
        "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
    },
    {
      id: 5,
      name: "Telco",
      icon: <FaSatelliteDish className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description:
        "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
    },
    {
      id: 6,
      name: "Startup",
      icon: <FaRocket className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description:
        "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="group p-8 flex flex-col gap-4 rounded-2xl shadow-md bg-white hover:bg-deepblue duration-300 transition"
        >
          <div className="flex items-center justify-start ">
            <div className="bg-lightblue/20  rounded-full p-4">
                {item.icon}
            </div>
          
          </div>
          <h3 className="text-lg md:text-2xl font-semibold text-black group-hover:text-white transition">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-white transition">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransformIdeasCard;
