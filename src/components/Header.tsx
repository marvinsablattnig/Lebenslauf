import { useState } from "react";

const log = console.log;
// let path = "/";
function Header() {
  const [menuActive, changeMenuState] = useState(false);

  const changeMenu = () => {
    const overlay = document.querySelector<HTMLElement>(".grey-overlay");
    const burger = document.querySelector<HTMLElement>(".burger");
    const navbar = document.querySelectorAll<HTMLElement>(".menu-element");

    if (overlay && !menuActive) {
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "all";
      overlay.style.zIndex = "0";
      burger?.classList.add("closed");
      navbar;

      navbar.forEach((element) => {
        if (element) {
          element.style.width = "20vw";
          element.style.opacity = "1";
          element.style.pointerEvents = "all";
          element.style.zIndex = "3";
          log(element);
        }
      });

      changeMenuState(true);
    } else if (overlay && menuActive) {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      overlay.style.zIndex = "-3";
      burger?.classList.remove("closed");

      navbar.forEach((element) => {
        if (element) {
          element.style.width = "5vw";
          element.style.opacity = "0";
          element.style.pointerEvents = "none";
          element.style.zIndex = "2";
          log(element);
        }
      });

      changeMenuState(false);
    }
  };
  return (
    <>
      <header>
        <button className="burger" onClick={changeMenu}>
          <div className="burgercontent"></div>
        </button>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark screen-nav">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#school">
                  Ausbildung
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Berufe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navigation mobile">
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#home" onClick={changeMenu}>
                Home
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#about" onClick={changeMenu}>
                About
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#school" onClick={changeMenu}>
                Ausbildung
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#work" onClick={changeMenu}>
                Berufe
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#contact" onClick={changeMenu}>
                Contact
              </a>
            </div>
          </nav>
        </div>
        <div className="grey-overlay" id="overlay" onClick={changeMenu}></div>
      </header>
    </>
  );
}

export default Header;
