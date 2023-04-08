import { FaReact, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto py-8 mb-36 w-[80%]">
      <h1 className="text-4xl font-bold mb-4 font-Roboto">About Us</h1>
      <div className="flex items-center mb-4">
        <FaReact className="text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold font-Roboto">React Blog</h2>
      </div>
      <p className="text-lg mb-4 font-Raleway">
        Welcome to React Blog! This blog is dedicated to all things React, from
        beginner tutorials to advanced techniques and best practices. We hope
        you find our content useful and informative.
      </p>
      <div className="flex items-center mb-4">
        <FaHeart className="text-red-500 mr-2" />
        <h2 className="text-2xl font-bold font-Roboto">About the Author</h2>
      </div>
      <p className="text-lg mb-4 font-Raleway">
        Hi, I'm Ali Hussnain, the author of this blog. I'm a software developer with
        a passion for React and front-end development. I make this blog App to
        share my knowledge as a Project and help others learn and grow as developers.Only 
        Admin allow to write useful blog for viewers. 
      </p>
    </div>
  );
};

export default About;
