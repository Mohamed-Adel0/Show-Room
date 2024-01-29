import React from "react";
import Css from "./TheBrief.module.css";
import { FaPlus } from "react-icons/fa";
const TheBrief = () => {
  const products = [
    {
      id: 1,
      title: "02. The Brief",
      descraption: "Guide to the Nørebro",
    },
    {
      id: 2,
      descraption:
        "Entering that gable-ended Spouter-Inn, you found yourself in a wide, low, straggling entry with old-fashioned wainscots, reminding one of the bulwarks of some condemned old craft. On one side hung a very large oilpainting so thoroughly besmoked, and every way defaced, that in the unequal crosslights by which you viewed.",
    },
  ];
  const info = [
    {
      id: 1,
      title: "Make Concept",
    },
    {
      id: 2,
      title: "Prototyping & Design",
    },
    {
      id: 3,
      title: "Web Development",
    },
  ];
  return (
    <div>
      <div className={Css.parent} id="thebrief">
        <div className={Css.container}>
          {products?.map((r) => (
            <div className={Css.card} key={r.id}>
              <h1>{r.title}</h1>
              <p>{r.descraption}</p>
            </div>
          ))}
        </div>
        <div className={Css.twoContainer}>
          {info?.map((r) => (
            <div className={Css.card} key={r.id}>
              <h5>{r.title}</h5>
              <button>
                <FaPlus />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheBrief;
