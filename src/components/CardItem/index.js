// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="head1">{title}</h1>
        <p className="para1">{description}</p>
      </div>
      <div>
        <img src="{imageUrl}" className="img" alt="{title}" />
      </div>
    </li>
  )
}
export default CardItem
