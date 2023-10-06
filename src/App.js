import { useState } from 'react';
import Nav from './Nav';
import Menu from './Menu';
import Submenu from './Submenu';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const openSubMenu = () => setSubMenuOpen(true);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => {
    setMenuOpen(false)
    setSubMenuOpen(false)
  };

  return (
    <div className="App">
      <Nav openMenu={openMenu}/>
      <Menu closeMenu={closeMenu} openSubMenu={openSubMenu} isOpen={menuOpen}/>
      <Submenu isOpen={subMenuOpen}/>
      {
        menuOpen && (
          <div className='overlay'></div>
        )
      }
    </div>
  );
}

export default App;
