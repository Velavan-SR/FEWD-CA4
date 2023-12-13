import {useState} from 'react'
import Quiz from './Quiz'

const Nav = () => {

    const [theme,setTheme] = useState(true)

  return (
    <>
    
    <nav>
        <div className='empty'></div>
        <div className='logo'>
          <h1 className={`${theme ? 'light' : 'dark'}`}> Quizavan </h1>
          
        </div>
        <div id='mode'>
          <button id='theme' className={`${theme ? 'light' : 'dark'}`} onClick={() => {setTheme(!theme)}}>
            {theme ? 'Dark' : 'Light'}
          </button>
        </div>
    </nav>

    <Quiz theme={theme}/>

    </>
  )
}

export default Nav
