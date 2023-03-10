import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import addTodo from '../modules/todos';
import { v4 as uuidv4 } from 'uuid';

function Input() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const dispatch = useDispatch();

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentsInputChange = (e) => {
    setContents(e.target.value);
  };

  return (
    <StyledInputBox>
      <form onSubmit={handleSubmitButtonClick}>
        <input onChange={handleTitleInputChange} value={title} type='text' />
        <input
          onChange={handleContentsInputChange}
          value={contents}
          type='text'
        />
        <button type='submit'>추가</button>
      </form>
    </StyledInputBox>
  );
}

export default Input;

const StyledInputBox = styled.div`
  background-color: aqua;
  padding: 20px;
`;
