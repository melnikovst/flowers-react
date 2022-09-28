import styled from 'styled-components';
import { useContext } from 'react';
import { SearchContext } from '../../App';
import { useRef } from 'react';
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
  }
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  border: 1px solid black;
  top: 0;
  right: 10px;

  &:hover {
    background-color: grey;
    color: red;
  }
`;

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const inputRef = useRef();

  console.log(inputRef);

  const holdFocus = () => {
    setSearch('');
    inputRef.current.focus();
  };

  return (
    <div style={{ position: 'relative' }}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="поиск пиццы..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search.length > 0 ? <Button onClick={holdFocus}>del</Button> : null}
    </div>
  );
};

export default Search;
