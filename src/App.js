import React, {useState, useEffect} from 'react';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ThemeContext, themes } from './Components/Context/Theme-context';


function App() {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme() {
    // console.log(theme)
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }
  
  let docBody= document.body;
  useEffect(() => {
    switch (theme) {
        case themes.light:
          docBody.classList.remove("bg-light");
          docBody.classList.remove("text-dark")
          docBody.classList.add("bg-dark");
          docBody.classList.add("text-light")
          break;
        case themes.dark:
          docBody.classList.remove("bg-dark");
          docBody.classList.remove("text-light")
          docBody.classList.add("bg-light");
          docBody.classList.add("text-dark")   
          break;
    }
  }, [theme])
  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
