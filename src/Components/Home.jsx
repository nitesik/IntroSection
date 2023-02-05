import { useState, useEffect } from "react";

import logo from "./Images/logo.svg"
import menu from "./Images/icon-menu.svg"
import close_menu from "./Images/icon-close-menu.svg"
import arrow_down from "./Images/icon-arrow-down.svg";
import "./Styles.css";
import databiz from "./Images/client-databiz.svg";
import audiophile from "./Images/client-audiophile.svg";
import meet from "./Images/client-meet.svg";
import maker from "./Images/client-maker.svg";
import todo from "./Images/icon-todo.svg";
import calendar from "./Images/icon-calendar.svg";
import reminders from "./Images/icon-reminders.svg";
import planning from "./Images/icon-planning.svg";

function DesktopNavbar() {

  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  
  return (
    <nav>
      <div className="nav-components">
        <img src={logo} alt="logo" className="logo" />
        <div className="text">
          <div onClick={() => setFeaturesDropdown(!featuresDropdown)} style={{display: "flex", alignItems: "center", gap: "5px"}} >
            <div>Features</div> 
            <img src={arrow_down} alt="button" />
          </div>
          {featuresDropdown && <DropdownComponents>
          <div><img src={todo} /><div>TodoList</div></div>
          <div><img src={calendar} /><div>Calendar</div></div>
          <div><img src={reminders} /><div>Reminders</div></div>
          <div><img src={planning} /><div>Planning</div></div>
        </DropdownComponents>}
        </div>
        
        <div className="text">
          <div style={{display: "flex", alignItems: "center", gap: "5px"}} onClick={() => setCompanyDropdown(!companyDropdown)}>
            <div>Company</div> 
            <img src={arrow_down} alt="button" />
          </div>
          <div style={{marginLeft: 50}}>
            {companyDropdown && <DropdownComponents>
              <div>History</div>
              <div>Our Team</div>
              <div>Blog</div>
            </DropdownComponents>}
          </div>
        </div>
        
        <div className="text">Careers</div>
        <div className="text">About</div>
      </div>
      <div className="nav-components">
        <div className="text">Login</div>
        <div className="text button">Register</div>
      </div>
    </nav>
  )
}

function DropdownComponents({children}) {

  return (
  <div className="dropdown">
    {children}
  </div>)
}

function MobileNavbar() {

  const [menuBar, setMenuBar] = useState(false);

  return (
    <nav>
      <img src={logo} style={{marginTop: 10}} />
      <img src={menu} onClick={() => setMenuBar(true)}/>
      { menuBar && <MobileMenu setMenuBar={setMenuBar} />}
    </nav>
  )
}

function MobileMenu({setMenuBar}) {

  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  
  return (
    <div className="menu">
      <div className="menu-container">
       <div className="logo_close"><img src={close_menu} onClick={() => setMenuBar(false)} /></div>
        <div className="upper">
          <div style={{display: "flex", alignItems: "center", gap: "15px"}} onClick={() => setFeaturesDropdown(!featuresDropdown)} >
            <div className="text">Features</div> 
            <img src={arrow_down} />
          </div>
          { featuresDropdown && <div className="menu-container-components">
            <div><img src={todo} /><div>TodoList</div></div>
            <div><img src={calendar} /><div>Calendar</div></div>
            <div><img src={reminders} /><div>Reminders</div></div>
            <div><img src={planning} /><div>Planning</div></div>
          </div>}
          <div style={{display: "flex", alignItems: "center", gap: "15px"}} onClick={() => setCompanyDropdown(!companyDropdown)} >
            <div className="text">Company</div> 
            <img src={arrow_down} />
          </div>
          { companyDropdown && <div className="menu-container-components">
            <div>History</div>
            <div>Our Team</div>
            <div>Blog</div>
          </div>}
          <div className="text">Careers</div>
          <div className="text">About</div>
        </div>
        <div className="lower">
          <div className="text">Login</div>
          <div className="text button">Register</div>
        </div>
      </div>
    </div>
  )
}

function Home() {

  const [width, setWidth] = useState(window.innerWidth);
  
  function getWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", getWidth);
  });

  return (
    <div className="container">
      {/* <DesktopNavbar />       */}
      {/* <MobileNavbar /> */}
      { width >= 738 ? <DesktopNavbar /> : <MobileNavbar />}
      <section>
        <div className="left">
          <div className="upper">
            <div className="title">Make remote work</div>
            <div className="text description">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</div>
          <div className="button">Learn more</div>
          </div>
          <div className="lower">
            <img src={databiz} alt="client" />
            <img src={audiophile} alt="client" />
            <img src={meet} alt="client" />
            <img src={maker} alt="client" />
          </div>
        </div>
        <div className="right"></div>
      </section>
    </div>
  )
}

export default Home;