import { createElement, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Sidebar from "./components/Sidebar.component";
import FixedPlugin from "./components/FixedPlugin";
import { DashboardComponents } from "../../routes/dashboard/Dashboard.routes";
import PersonalBot from "./components/PersonalBot.component";
import styled from "styled-components";

export const RootContainer = styled.div`
    padding: 5vh 10vw;
    max-width: 2000px;
    margin-left: 300px;
    background-color: #f0f0f0;
`

function Admin(props: any) {
    const [image, setImage] = useState("");
    const [color, setColor] = useState("black");
    const [childrenElement, setChildrenElement] = useState<any>();
    const [hasImage, setHasImage] = useState(true);
    const location = useLocation();
    const mainPanel = useRef(null);

    useEffect(() => {
      const el = createElement(getElement());
      setChildrenElement(el)
    }, [location])

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        (document.scrollingElement as any).scrollTop = 0;
        (mainPanel.current as any).scrollTop = 0;

      if (
        window.innerWidth < 993 &&
        document.documentElement.className.indexOf("nav-open") !== -1
      ) {
        document.documentElement.classList.toggle("nav-open");
        var element = document.getElementById("bodyClick");
        (element?.parentNode as any).removeChild(element);
      }
    }, [location]);

    const getElement = () => {
      for (let i = 0; i < DashboardComponents.length; i++) {
        if (location.pathname.indexOf(DashboardComponents[i].layout + DashboardComponents[i].path) !== -1) {
          return DashboardComponents[i].component;
        }
      }
      return "Brand";
    };

    return (
      <>
        <div className="wrapper">
          <Sidebar color={color} image={hasImage ? image : ""} routes={DashboardComponents} />
          <div className="main-panel" ref={mainPanel}>
            <RootContainer style={{ minHeight: window.innerHeight }}>
              {childrenElement}
            </RootContainer>
            {
              /*
              <Footer />
              */
            }
            
          </div>
        </div>
        <PersonalBot />
      </>
    );
  }
  
  export default Admin;