import './HomePage.css'
import NavHomePage from '../NavHomePage/NavHomePage.jsx'
import titleImg from '../../../public/img/titulo.png'

const HomePage = () => {
  return (
    <div className='homePage'>
      <NavHomePage/>
      <div className="home-conteiner">
        <div className="banner">
          <img className='titleImg' src={titleImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage