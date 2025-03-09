import React, { useState } from "react";

type TabsProps = {
  tabs: string[];
  children: React.ReactNode;
};

export function Tabs({ tabs, children }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={`tab-${tab}-${index}`}
            className={`tab ${activeTabIndex === index ? "active" : ""}`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {React.Children.toArray(children)[activeTabIndex]}
      </div>
    </div>
  );
}

Tabs.Tab = ({ children }: { children: React.ReactNode }) => children;
