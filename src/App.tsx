import "./App.css";
import { Accordion, Button, Carousel } from "@swarmakit/react";

function App() {
  const accordionItems = [
    { title: "First Item", content: "Content for the first item" },
    { title: "Second Item", content: "Content for the second item" },
    { title: "Third Item", content: "Content for the third item" },
  ];

  const handleClick = () => {
    alert("Button Clicked!");
  };

  const carouselSlides = [
    { src: "https://via.placeholder.com/300", alt: "Slide 1" },
    { src: "https://via.placeholder.com/300", alt: "Slide 2" },
    { src: "https://via.placeholder.com/300", alt: "Slide 3" },
  ];
  return (
    <>
      <h1 className="swam"> Swarmauri Assessment Demo</h1>

      {/* Accordion Component */}
      <Accordion items={accordionItems} />

      {/* Button Component */}
      <Button onClick={handleClick}>Click Me!</Button>

      {/* Carousel Component */}
      <Carousel slides={carouselSlides} />
    </>
  );
}

export default App;
