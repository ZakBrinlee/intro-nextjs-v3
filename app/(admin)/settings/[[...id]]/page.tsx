// Proof of pages being SSR by default, able to do anything you can do in node.js env
// console.log(process.argv)

const SettingsPage = ({params}: { params: { slug: string[] }}) => {
  // Example of catch-all dynamic route segments
  // Note: no access to query params on the server
  console.log(params)
  return <div>Settings Page example for grouping</div>
}

export default SettingsPage