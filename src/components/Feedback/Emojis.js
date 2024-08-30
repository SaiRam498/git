import './index.css'

const Emojis = props => {
  const {obj, isHappy} = props
  const {id, name, imageUrl} = obj
  const thanks = () => {
    isHappy(id)
  }
  return (
    <li>
      <img src={imageUrl} alt={name} className="emojies" onClick={thanks} />
      <p>{name}</p>
    </li>
  )
}

export default Emojis
