const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>T{props.text}</li>;
};

export default TodoItem;
