import Button from "../Button"

const Navbar = (props) => {
  const {children} = props
  return(
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-xl">{children}</div>
      <div>
        <Button classname='bg-slate-600 text-white'>Logout</Button>
      </div>
    </div>
  </nav>
  )
}
export default Navbar