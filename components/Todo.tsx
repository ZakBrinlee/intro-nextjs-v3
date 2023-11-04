'use client'
import { useTransition } from "react"
import { completeTodo } from "@/utils/actions"

type TodoType = {
  id: string
  content: string
  completed: boolean
  createdAt: Date
}

const Todo = ({todo}: {todo: TodoType}) => {
  const {
    content,
    id,
    completed,
    createdAt
  } = todo
  const [isPending, startTransition] = useTransition()

  return (
    <div className="flex my-2 py-2 px-2 justify-between items-center border border-black/20 rounded-md">
      <div className={completed ? 'line-through' : ''}>{content}</div>
      <div className={completed ? 'line-through' : ''}>Created At: {createdAt.toLocaleString()}</div>
      <div>
        {completed ? (
          <span className="text-green-500">Complete!</span>
        ) : (
          <button
            onClick={() => {
              startTransition(() => {completeTodo(id)})
            }}
             className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Complete todo
          </button>
        )}
      </div>
    </div>
  )
}

export default Todo