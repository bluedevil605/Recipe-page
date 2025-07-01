import logo from '../assets/image-omelette.jpeg'
import Nutrition from '../Nutrition'
import Instructions from './Instructions'
import Recipe from './Recipe'

const Avatar = () => {
  return (
    <div className='omeelete'>
      <img src={logo} alt='ommelete'></img>
      <Recipe />
      <Instructions />
      <Nutrition />
    </div>
  )
}

export default Avatar
