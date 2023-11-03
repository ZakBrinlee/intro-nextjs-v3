import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      {todos.length > 0 && <h1>Todos:</h1>}
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage