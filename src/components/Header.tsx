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
      overlay.style.display = "inherit";
      // overlay.style.opacity = "1";
      // overlay.style.pointerEvents = "all";
      // overlay.style.zIndex = "1";
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
      overlay.style.display = "none";
      // overlay.style.opacity = "0";
      // overlay.style.pointerEvents = "none";
      // overlay.style.zIndex = "-3";
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
  const changeLanguage = (i: number) => {
    const english = document.querySelectorAll(".english");
    const german = document.querySelectorAll(".german");

    const englishBtns = document.querySelectorAll(".en");
    const germanBtns = document.querySelectorAll(".de");

    switch (i) {
      case 0: //activate german
        germanBtns.forEach(function (elem) {
          elem.classList.add("active");
        });
        englishBtns.forEach(function (elem) {
          elem.classList.remove("active");
        });

        english.forEach(function (elem) {
          elem.classList.add("invisible");
        });
        german.forEach(function (elem) {
          elem.classList.remove("invisible");
        });
        break;
      case 1: //activate english
        germanBtns.forEach(function (elem) {
          elem.classList.remove("active");
        });
        englishBtns.forEach(function (elem) {
          elem.classList.add("active");
        });

        german.forEach(function (elem) {
          elem.classList.add("invisible");
        });
        english.forEach(function (elem) {
          elem.classList.remove("invisible");
        });
        break;
      default:
        break;
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutnav">
                  <div className="german invisible">Über Mich</div>
                  <div className="english">About Me</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schoolnav">
                  <div className="german invisible">Ausbildung</div>
                  <div className="english">Education</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#worknav">
                  <div className="german invisible">Berufe</div>
                  <div className="english">Jobs</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactnav">
                  <div className="german invisible">Kontakt</div>
                  <div className="english">Contact</div>
                </a>
              </li>
              <li className="nav-item">
                <div className="language nav-link">
                  <button
                    className="en btn btn-secondary active"
                    onClick={() => {
                      changeLanguage(1);
                    }}
                  >
                    EN
                  </button>
                  <button
                    className="de btn btn-secondary"
                    onClick={() => {
                      changeLanguage(0);
                    }}
                  >
                    DE
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navigation mobile">
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#" onClick={changeMenu}>
                Home
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#aboutnav" onClick={changeMenu}>
                <div className="german invisible">Über Mich</div>
                <div className="english">About Me</div>
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a
                className="navbar-brand"
                href="#schoolnav"
                onClick={changeMenu}
              >
                <div className="german invisible">Ausbildung</div>
                <div className="english">Education</div>
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a className="navbar-brand" href="#worknav" onClick={changeMenu}>
                <div className="german invisible">Berufe</div>
                <div className="english">Jobs</div>
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="container-fluid nav-item">
              <a
                className="navbar-brand"
                href="#contactnav"
                onClick={changeMenu}
              >
                <div className="german invisible">Kontakt</div>
                <div className="english">Contact</div>
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary menu-element">
            <div className="language nav-link nav-item">
              <button
                className="en btn btn-secondary active"
                onClick={() => {
                  changeLanguage(1);
                }}
              >
                EN
              </button>
              <button
                className="de btn btn-secondary"
                onClick={() => {
                  changeLanguage(0);
                }}
              >
                DE
              </button>
            </div>
          </nav>
        </div>
        <div className="grey-overlay" id="overlay" onClick={changeMenu}></div>
      </header>
    </>
  );
}

export default Header;
