
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide } from "../features/slider/sliderSlice";

const images = [
  "https://img.freepik.com/premium-vector/vector-illustration-business-dashboard-concept-flat-style_858355-378.jpg?w=740",
  "https://media.istockphoto.com/id/1189953288/vector/annual-report-financial-growth-chart-analysis-group-of-people-stand-near-big-screen-with.jpg?s=612x612&w=0&k=20&c=5OWmigqHTrFcC8fHt7S4_gDsipMTfphqJ1r4lfv1rAo=",
  "https://media.istockphoto.com/vectors/collection-of-employees-analyzing-data-vector-id1337682592?k=20&m=1337682592&s=612x612&w=0&h=bMS4syD1yGyO4pOQ5z3SE7MHN7MrzMFkmdnercEP-Qc="
];

export default function Slider() {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.slider.index);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide(images.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="slide"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
