import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LatestNews from "../components/LatestNews";

const DragonNewsAbout = () => {
  return (
    <div className="min-h-screen  flex flex-col container mx-auto mt-6">
       <div className="mb-4">
             <Navbar></Navbar>
       </div> 
      <header className="bg-black bg-opacity-60 p-6 shadow-md rounded-md">
        <h1 className="text-4xl font-extrabold text-center text-white tracking-wide">Dragon News</h1>
        <p className="mt-2 text-yellow-300 text-center italic">Your fiery source for dragon tales and news</p>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12 rounded-md">
        <section className="max-w-3xl mx-auto  bg-opacity-50 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            About Dragon News
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Welcome to <span className="font-bold">Dragon News</span>, your ultimate destination for all things dragon-related! From ancient legends to modern tales, we bring you the latest and greatest stories about dragons worldwide.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Our mission is to ignite your imagination with fiery news, breathtaking artwork, and in-depth articles about these magnificent creatures. Whether you're a dragon enthusiast or just curious, Dragon News has something for everyone.
          </p>
          <p className="text-lg leading-relaxed">
            Join us on this epic journey and stay updated with the hottest dragon news around!
          </p>
        </section>
      </main>

      <footer className="bg-black bg-opacity-60 p-6 text-center text-yellow-300 rounded-md">
        &copy; {new Date().getFullYear()} Dragon News. All rights reserved.
      </footer>
    </div>
  );
};

export default DragonNewsAbout;
