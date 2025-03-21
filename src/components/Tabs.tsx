import React, { useState } from "react";
import { css, styled } from "styled-components";

type TabsProps = {
  tabs: string[];
  children: React.ReactNode;
};

const TabsContainer = styled.div`
  width: 100%;

  .tab-buttons {
    position: sticky;
    top: 0;
    z-index: ${({theme}) => theme.zIndex.tabButtons};

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 4px;
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 8px 8px 0;

    button {
      border-bottom: none;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .tab-content {
  }
`;

const TabButton = styled.button<{ $active?: boolean }>`
  ${({ $active }) =>
    $active
      ? css`
          background: ${({ theme }) => theme.colors.active};
        `
      : ""}
`;

export function Tabs({ tabs, children }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <TabsContainer>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <TabButton
            key={`tab-${tab}-${index}`}
            onClick={() => setActiveTabIndex(index)}
            $active={activeTabIndex === index}
          >
            {tab}
          </TabButton>
        ))}
      </div>

      <div className="tab-content">
        {React.Children.toArray(children)[activeTabIndex]}
      </div>
    </TabsContainer>
  );
}

Tabs.Tab = ({ children }: { children: React.ReactNode }) => children;
