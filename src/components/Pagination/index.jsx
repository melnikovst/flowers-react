import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;

  .selected {
    background-color: black;
    color: white;
  }
`;

const StyledButton = styled.button`
  border: 1px solid grey;
  border-radius: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Pagination = ({ onChangePage }) => {
  const buttons = [1, 2, 3];
  const [activeClass, setActiveClass] = useState(0);
  console.log(activeClass);

  const handleChangeIncrement = () => {
    if (activeClass < buttons.length - 1) {
      setActiveClass(activeClass + 1);
      onChangePage(activeClass + 2);
    } else {
      setActiveClass(0);
      onChangePage(1);
    }
  };

  const linterSosi = '>';

  return (
    <Wrapper>
      {buttons.map((button, i) => (
        <StyledButton
          key={i}
          className={activeClass === i ? 'selected' : ''}
          onClick={() => {
            setActiveClass(i);
            onChangePage(i + 1);
          }}
        >
          {button}
        </StyledButton>
      ))}
      <StyledButton onClick={handleChangeIncrement}>{linterSosi}</StyledButton>
    </Wrapper>
  );
};

export default Pagination;
