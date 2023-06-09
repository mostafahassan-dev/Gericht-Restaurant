import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from "react-icons/md"
import images from '../../constants/images'
import './Navbar.css'


function Navbar() {
  const [menu, setmenu] = useState(false);
  
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo flex__center">
        <img src={images.gericht} alt= "logo" />
      </div>
      <ul className="app__navbar-links">
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu </a></li>
        <li className='p__opensans'><a href='#award'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href='#login' className='p__opensans'>Log In | Registration</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>

      <div className="app__navbar-smallScreen ">
        <GiHamburgerMenu className='menu__btn' color= '#DCCA87'  fontSize={27} onClick= {()=>{setmenu(true)}}/>

          { menu && (

            <div className="app__navbar-smallScreen_overlay flex__center slide-bottom" >
              <MdOutlineRestaurantMenu  className='close__btn' color= '#DCCA87'  fontSize={27} onClick= {()=>{setmenu(false)}}/>
              
              <ul className="app__navbar-smallScreen_links">
                <li className='p__opensans' onClick= {()=>{setmenu(false)}} ><a href='#home'>Home</a></li>
                <li className='p__opensans' onClick={()=>{setmenu(false)}} ><a href='#about'>About</a></li>
                <li className='p__opensans' onClick={()=>{setmenu(false)}} ><a href='#menu'>Menu </a></li>
                <li className='p__opensans' onClick={()=>{setmenu(false)}} ><a href='#award'>Awards</a></li>
                <li className='p__opensans' onClick={()=>{setmenu(false)}} ><a href='#contact'>Contact</a></li>
              </ul>
              
            </div>  
            )
          }
          
        
      </div>
    </nav>
  )
}

export default Navbar
