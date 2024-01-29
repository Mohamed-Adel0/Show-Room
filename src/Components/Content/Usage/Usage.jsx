import React from "react";
import Css from "./Usage.module.css";
const Usage = () => {
    const products = [
        {
          id: 1,
          title: "03. Usage",
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
      <div className={Css.parent} id="Usage">
        <div className={Css.twocontainer}>
          <div className={Css.card}>
            <button className={Css.button}>
              <svg
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="26px"
              >
                <path
                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
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

export default Usage;
