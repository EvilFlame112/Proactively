import React, { useState, useRef } from "react";
import styles from "./LifestylePillars.module.css";

const tabs = [
  { id: "nutrition", label: "Nutrition" },
  { id: "physical", label: "Physical activity" },
  { id: "restorative", label: "Restorative sleep" },
  { id: "stress", label: "Stress management" },
  { id: "social", label: "Social connection" },
  { id: "substance", label: "Substance abuse" },
];

const cards = [
  {
    id: "nutrition",
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent and treat chronic illness.",
    image: "/images/nutrition.jpg",
    stat: "121/80 mmHg",
  },
  {
    id: "physical",
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight and improving mental health.",
    image: "/images/physical.jpg",
    stat: "32 minutes",
  },
  {
    id: "restorative",
    title: "Restorative sleep",
    description: "Consistent, quality sleep enhances brain function and physical health.",
    image: "/images/restorative.jpg",
    stat: "8 hours",
  },
  {
    id: "stress",
    title: "Stress management",
    description: "Managing stress improves mental and physical well-being.",
    image: "/images/stress.jpg",
    stat: "Calm state",
  },
  {
    id: "social",
    title: "Social connection",
    description:
      "Strong social connections reduce stress and promote longevity.",
    image: "/images/social.jpg",
    stat: "5 interactions/day",
  },
  {
    id: "substance",
    title: "Substance abuse",
    description: "Avoiding substance abuse is critical for long-term health.",
    image: "/images/substance.jpg",
    stat: "No use",
  },
];

const LifestylePillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    const container = cardContainerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / cards.length;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleArrowClick = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(cards.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    scrollToCard(index);
  };

  return (
    <div className={styles.lifestylePillars}>
      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className={activeIndex === index ? styles.activeTab : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Arrow Buttons */}
      <div className={styles.arrows}>
        <button
          className={styles.arrow}
          onClick={() => handleArrowClick("left")}
          disabled={activeIndex === 0}
        >
          &#8592;
        </button>
        <button
          className={styles.arrow}
          onClick={() => handleArrowClick("right")}
          disabled={activeIndex === cards.length - 1}
        >
          &#8594;
        </button>
      </div>

      {/* Cards */}
      <div className={styles.cardContainer} ref={cardContainerRef}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`${styles.card} ${
              index === activeIndex ? styles.focusedCard : ""
            }`}
          >
            <img src={card.image} alt={card.title} />
            <div className={styles.pressure}>{card.stat}</div>
            <div className={styles.content}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestylePillars;
