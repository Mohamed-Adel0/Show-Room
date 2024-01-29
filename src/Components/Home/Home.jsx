import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Css from "./Home.module.css";
import Picture1 from "../Picture/dm29__projects_01-min.jpg";
import Picture2 from "../Picture/dm29__projects_02-min.jpg";
import Picture3 from "../Picture/dm29__projects_03-min.jpg";
import Picture4 from "../Picture/dm29__projects_04-min.jpg";
import Picture5 from "../Picture/dm29__projects_05-min.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "Stylish Løft Kitchen Interior Design",
      desgin: "DESIGN",
      descraption:
        "European minnow priapumfish mosshead warbonnet shrimpfish bigscale cutlassfish porbeagle shark ricefish walking catfish glassfish. Always remember in the jungle there’s a lot of they in there…",
      img: Picture1,
      src: "content",
      total: "01/05",
      animat:
        "animate__animated animate__bounce animate__slow animate__zoomInDown",
      slow: "animate__animated animate__bounce animate__slower animate__zoomIn",
      butt: "animate__animated animate__bounce animate__slow animate__jackInTheBox",
    },
    {
      id: 2,
      title: "Stylish Løft Kitchen Interior Design",
      desgin: "DESIGN",
      descraption:
        "European minnow priapumfish mosshead warbonnet shrimpfish bigscale cutlassfish porbeagle shark ricefish walking catfish glassfish. Always remember in the jungle there’s a lot of they in there…",
      img: Picture2,
      src: "content",
      total: "02/05",
      animat:
        "animate__animated animate__bounce animate__slow animate__zoomInLeft",
      slow: "animate__animated animate__bounce animate__slower animate__zoomInRight",
      butt: "animate__animated animate__bounce animate__slow animate__hinge",
    },
    {
      id: 3,
      title: "Stylish Løft Kitchen Interior Design",
      desgin: "DESIGN",
      descraption:
        "European minnow priapumfish mosshead warbonnet shrimpfish bigscale cutlassfish porbeagle shark ricefish walking catfish glassfish. Always remember in the jungle there’s a lot of they in there…",
      img: Picture3,
      src: "content",
      total: "03/05",
      animat:
        "animate__animated animate__bounce animate__slow animate__zoomInDown",
      slow: "animate__animated animate__bounce animate__slower animate__zoomIn",
      butt: "animate__animated animate__bounce animate__slow animate__jackInTheBox",
    },
    {
      id: 4,
      title: "Stylish Løft Kitchen Interior Design",
      desgin: "DESIGN",
      descraption:
        "European minnow priapumfish mosshead warbonnet shrimpfish bigscale cutlassfish porbeagle shark ricefish walking catfish glassfish. Always remember in the jungle there’s a lot of they in there…",
      img: Picture4,
      src: "content",
      total: "04/05",
      animat:
        "animate__animated animate__bounce animate__slow animate__zoomInUp",
      slow: "animate__animated animate__bounce animate__slower animate__zoomInRight",
      butt: "animate__animated animate__bounce animate__slow animate__hinge",
    },
    {
      id: 5,
      title: "Stylish Løft Kitchen Interior Design",
      desgin: "DESIGN",
      descraption:
        "European minnow priapumfish mosshead warbonnet shrimpfish bigscale cutlassfish porbeagle shark ricefish walking catfish glassfish. Always remember in the jungle there’s a lot of they in there…",
      img: Picture5,
      src: "content",
      total: "05/05",
      animat:
        "animate__animated animate__bounce animate__slow animate__zoomInLeft",
      slow: "animate__animated animate__bounce animate__slower animate__zoomInRight",
      butt: "animate__animated animate__bounce animate__slow animate__jackInTheBox",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <Carousel className={Css.container}>
          {products?.map((r) => (
            <Carousel.Item interval={3550} key={r.id}>
              <div className={Css.card}>
                <div className={Css.img}>
                  <div className={Css.boxcard}></div>
                  <div className={Css.boxcard}>
                    <img src={r.img} alt="" />
                  </div>
                  <div className={Css.bg}></div>
                </div>
                <Carousel.Caption className={Css.paragraph}>
                  <div className={Css.text}>
                    <button className={r.butt}>{r.desgin}</button>
                    <h1 className={r.animat}>{r.title}</h1>
                    <p className={r.slow}>{r.descraption}</p>
                    <div className={Css.location}>
                      <Link to={r.src}>View Project</Link>
                    </div>
                    <h3 className="animate__animated animate__bounce animate__slow animate__rubberBand">
                      {r.total}
                    </h3>
                    <div className={Css.scroll}>
                      <h5 className="animate__animated animate__bounce animate__slow animate__backInRight">
                        <div className={Css.bar}></div> Scroll
                      </h5>
                    </div>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
