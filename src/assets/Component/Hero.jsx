import { delay, motion } from "framer-motion";

const Hero = () => {


  return (
    <section className="relative  w-full h-[50vh] font-Roboto ">
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="Hero Image"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
          Welcome to my Blog
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 text-center">
          Read the latest articles about web development and technology
        </p>
      </div>
    </section>
  );
};

export default Hero;
