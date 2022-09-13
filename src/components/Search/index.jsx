import styled from 'styled-components';
import { useContext } from 'react';
import { SearchContext } from '../../App';
const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 40px;
  transition: all ease 0.3s;
  font-size: 18px;

  &:focus {
    border: 2px solid black;
    width: 500px;
  }
`;

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <>
      <Input
        type="text"
        placeholder="поиск пиццы..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </>
  );
};

export default Search;
