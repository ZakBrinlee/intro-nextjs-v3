import Todo, { TodoType } from "./Todo"

const TodoList = ({todos}: {todos: TodoType[]}) => {
  return (
    <div className="mt-2">
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList