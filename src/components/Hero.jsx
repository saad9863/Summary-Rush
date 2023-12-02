import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-10 pt-3">
        <img
          src={logo}
          className="w-28 object-contain "
          alt="Summary_Rush_Logo"
        />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Your Favourite Articles Now With
        <br className="max-md:hidden" />
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>

      <h2 className="desc">
        Summary Rush is a open-source web application that uses the OpenAI GPT-4
        model to generate clear and consise summaries of your favourite
        articles.
      </h2>
    </header>
  );
};

export default Hero;
