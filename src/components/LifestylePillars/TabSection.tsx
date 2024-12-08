import React, { useState } from "react";
import styles from "./LifestylePillars.module.css";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabSectionProps = {
  tabs: Tab[];
};

const TabSection: React.FC<TabSectionProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? styles.activeTab : styles.tab}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSection;
