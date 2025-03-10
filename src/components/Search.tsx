import { type ChangeEvent } from "react";
import { styled } from "styled-components";

type SearchProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchBar = styled.div`
  text-align: right;
`;

export const FullWidthSearch = styled(Search)`
  width: 100%;
`;

export function Search({ onChange, value, ...props }: SearchProps) {
  return (
    <SearchBar {...props}>
      <label>
        Search: <input type="search" value={value} onChange={onChange} />
      </label>
    </SearchBar>
  );
}
