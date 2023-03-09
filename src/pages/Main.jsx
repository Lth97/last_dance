import Header from '../redux/components/Header';
import Input from '../redux/components/Input';
import TodoList from '../redux/components/TodoList';
function Main() {
  return (
    <>
      <Header />
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
}

export default Main;
