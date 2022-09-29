import styled from 'styled-components';
import { useCallback, useContext, useState } from 'react';
import { SearchContext } from '../../App';
import { useRef } from 'react';
import debounce from 'lodash.debounce';
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
  const [value, setValue] = useState('');
  const { setSearch } = useContext(SearchContext);
  const inputRef = useRef();

  console.log(inputRef);

  const holdFocus = () => {
    setValue('');
    setSearch('');
    inputRef.current.focus();
  };

  const debouncedInput = useCallback(
    debounce((str) => {
      setSearch(str);
    }, 1000),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    debouncedInput(e.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="поиск цветов..."
        onChange={onChangeInput}
        value={value}
      />
      {value.length > 0 ? <Button onClick={holdFocus}>del</Button> : null}
    </div>
  );
};

export default Search;
