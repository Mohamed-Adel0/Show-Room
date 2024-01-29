import React from "react";
import Css from "./Intro.module.css";
const Intro = () => {
  const products = [
    {
      id: 1,
      title: "01. Intro",
      descraption: "Guide to the Nørebro",
    },
    {
      id: 2,
      descraption:
        "Entering that gable-ended Spouter-Inn, you found yourself in a wide, low, straggling entry with old-fashioned wainscots, reminding one of the bulwarks of some condemned old craft. On one side hung a very large oilpainting so thoroughly besmoked, and every way defaced, that in the unequal crosslights by which you viewed.",
    },
  ];
  return (
    <div>
      <div className={Css.parent} id="intro">
        <div className={Css.container}>
          {products?.map((r) => (
            <div className={Css.card} key={r.id}>
              <h1>{r.title}</h1>
              <p>{r.descraption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
