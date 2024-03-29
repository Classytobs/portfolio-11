import React, {useState, useEffect} from 'react';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Technologies from './Components/Technologies/Technologies';
import { ThemeContext, themes } from './Components/Context/Theme-context';
import Dropdown from './Components/Dropdown/Dropdown';


function App() {
  const [theme, setTheme] = useState(themes.light);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  function changeTheme() {
    // console.log(theme)
    setTheme(!theme)
  }

  useEffect( () => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener ('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }

  })
  
  useEffect(() => {
    switch (theme) {
        case themes.light:
          document.body.classList.remove("bg-light");
          document.body.classList.remove("text-dark")
          document.body.classList.add("bg-dark");
          document.body.classList.add("text-light")
          break;
        case themes.dark:
          document.body.classList.remove("bg-dark");
          document.body.classList.remove("text-light")
          document.body.classList.add("bg-light");
          document.body.classList.add("text-dark")   
          break;

        default:
    }
  }, [theme])
  
  return (
    <div className='overflow-hidden'>
    <ThemeContext.Provider value={{theme, changeTheme}} >
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
