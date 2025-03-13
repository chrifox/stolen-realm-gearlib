import { styled } from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.section.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  margin: 28px 0;
  padding: 24px 16px 16px;
  position: relative;
`;

export const SectionHeading = styled.div`
  background: ${({ theme }) => theme.colors.section.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text.title};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  line-height: 20px;
  padding: 4px 12px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
