
const Item = ({name,packed}) => {
  return (
    <li className="item">
      <label>
        <input checked={packed} type="checkbox" />{name}</label>
        <button>
        ❌
        </button>
      </li>
  )
}

export default Item