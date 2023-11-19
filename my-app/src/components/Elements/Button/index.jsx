/* eslint-disable react/prop-types */
const Button = (props) => {
  const { classname,children, onClick = () => {}, type = 'button'} = props
  return (
    <button className={`h-10 rounded-md py-2 px-3 ${classname}`} 
    onClick={onClick}
    type={type}
    >{children}</button>
  )
}

export default Button