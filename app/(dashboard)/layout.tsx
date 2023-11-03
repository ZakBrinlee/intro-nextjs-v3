import NewTodoForm from "@/components/NewTodoForm"

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NewTodoForm />
      {children}
    </div>
  )
}

export default DashboardLayout