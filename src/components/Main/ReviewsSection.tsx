import { useState, useRef, useEffect, HTMLAttributes } from "react";
import { motion } from "framer-motion";

const reviewsArray = [
  {
    id: 1,
    avatar: "./assets/images/avatar-anisha.png",
    name: "Anisha Li",
    review: `"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone f all times keeps everyone motivated."`,
  },
  {
    id: 2,
    avatar: "./assets/images/avatar-ali.png",
    name: "Ali Bravo",
    review: `"We have been able to cancel so many others subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."`,
  },
  {
    id: 3,
    avatar: "./assets/images/avatar-richard.png",
    name: "Richard Watts",
    review: `"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"`,
  },
  {
    id: 4,
    avatar: "./assets/images/avatar-shanai.png",
    name: "Shanai Gough",
    review: `"Their software allows us to tract, manage, and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."`,
  },
];

const ReviewsSection = () => {
  const [selectedReview, setSelectedReview] = useState("Ali Bravo");
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const reviewToDisplay = reviewsArray.filter((el) => {
    return el.name === selectedReview;
  });

  const slidesMobileElement = reviewToDisplay.map((el) => (
    <li className="reviews__each">
      <img src={el.avatar} alt="" />
      <p className="name">{el.name}</p>
      <p className="desc">{el.review}</p>
    </li>
  ));
  const slidesDesktopElement = reviewsArray.map((el) => (
    <motion.li className="reviews__each">
      <img src={el.avatar} alt="" />
      <p className="name">{el.name}</p>
      <p className="desc">{el.review}</p>
    </motion.li>
  ));

  const slidesSelection = reviewsArray.map((el) => (
    <button
      className={`reviews__selection-each ${
        el.name === selectedReview ? "active" : ""
      }`}
      onClick={() => setSelectedReview(el.name)}
    >
      <span className="sr-only">{el.name}</span>
    </button>
  ));

  return (
    <section ref={carousel} className="reviews">
      <h3>What they've said</h3>
      <ul className="reviews__all mobile">{slidesMobileElement}</ul>
      <motion.ul
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="reviews__all desktop"
      >
        {slidesDesktopElement}
      </motion.ul>
      <div className="reviews__selection">{slidesSelection}</div>
      <a href="#" className="primary-btn">
        Get Started
      </a>
    </section>
  );
};

export default ReviewsSection;
