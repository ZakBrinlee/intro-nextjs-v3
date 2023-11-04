const delayForLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
}

const DocsPage = async () => {
  await delayForLoading()
  return (
    <div>
      docs - dynamic routes available + example of 3 second loading state
    </div>
  )
}

export default DocsPage