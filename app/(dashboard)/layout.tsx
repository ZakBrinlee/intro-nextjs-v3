import NewTodoForm from "@/components/NewTodoForm"

const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NewTodoForm />
      {children}
    </div>
  )
}

export default DashboardLayout