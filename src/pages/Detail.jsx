import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail() {
  const navigate = useNavigate();
  const paramID = useParams().id;

  const todos = useSelector((state) => state.todos);
  const filteredTodos = todos.filter((item) => item.id === paramID)[0];

  return (
    <StyledDetailBox>
      <h3>입력받은 ID와 일치하는 상세보기를 출력</h3>
      제목 : {filteredTodos.title}
      <br />
      내용 : {filteredTodos.contents}
      <br />
      완료여부 : {filteredTodos.isDone.toString()}
      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        이전 페이지로
      </button>
    </StyledDetailBox>
  );
}

export default Detail;

const StyledDetailBox = styled.div`
  background-color: lavender;
  padding: 20px;
`;
