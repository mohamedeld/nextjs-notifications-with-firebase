
const Button = ({children,type,...props}) => {
  return (
    <button {...props} className={`btn ${type==='secondary'?'btn--secondary':''}`}>{children}</button>
  )
}

export default Button