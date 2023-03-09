import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeTodo, switchTodo } from '../modules/todos';

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (id) => {
    dispatch(removeTodo(id));
  };

  const handleSwitchButtonClick = (id) => {
    dispatch(switchTodo(id));
  };

  return (
    <StyledListBox>
      <h4>{isActive ? '해야할 일' : '완료된 일'}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button
                onClick={() => {
                  handleSwitchButtonClick(item.id);
                }}
              >
                {isActive ? '완료' : '취소'}
              </button>
              <button
                onClick={() => {
                  handleDeleteButtonClick(item.id);
                }}
              >
                삭제
              </button>
              <br />
              <br />
              <button onClick={() => navigate(`/${item.id}`)}>상세보기</button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

export default TodoList;

const StyledListBox = styled.div`
  background-color: beige;
  padding-top: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: #b9f0d6;
  padding: 10px;
  margin: 5px;
`;
