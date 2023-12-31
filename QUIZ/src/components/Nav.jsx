import {useState} from 'react'
import Quiz from './Quiz'
import logo from '../assets/icon.png'
import logo2 from '../assets/icon2.png'

const Nav = () => {

    const [theme,setTheme] = useState(true)

  return (
    <>
    
      <div id='cover' style={theme ? {backgroundColor : "white"} : {display : 'block'}}>

       <nav>
         <div className='empty'></div>
         <div className='logo'>
           <h1 className={`${theme ? 'light' : 'dark'}`}> Quizavan </h1>
           <img src={theme ? logo : logo2} alt="" />
         </div>
         <div id='mode'>
           <button id='theme' className={`${theme ? 'light' : 'dark'}`} onClick={() => {setTheme(!theme)}}>
             {theme ? 'Dark' : 'Light'}
           </button>
         </div>
       </nav>

       <Quiz theme={theme}/>

      </div>

    </>
  )
}

export default Nav
