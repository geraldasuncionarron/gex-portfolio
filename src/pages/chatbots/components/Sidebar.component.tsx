
import { useLocation, NavLink } from "react-router-dom";

import { Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { LIGHT_GRAY, PRIMARY } from "../../../config/colors.config";
import Icon from "../../portfolio/browser/components/icon.browser.component";

const SidebarComponent = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  min-width: 100px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 50px
`

const SelectedOption = styled.div`
  padding: 10px 15px;
  border-radius: 8px;
  margin: 5px 10px;
`

function Sidebar({ color, image, routes }: any) {
  const location = useLocation();
  const activeRoute = (routeName: string) => {
    return location.pathname.indexOf(routeName) > -1 ? "bg_active" : "";
  };
  return (
    <SidebarComponent>
      <Container>
      <div style={{ display: "flex", flexDirection: "row" }}>
          <img src="../../assets/images/gex_logo_plain.png" alt="logo" style={{ width: 40 }} />
          <span style={{ paddingTop: 15 , paddingLeft: 10 }}>ChatLink</span>
        </div>
      </Container>
        <Nav defaultActiveKey="/admin" className="flex-column" style={{ marginTop: 20 }}>
          {routes.map((prop: any, key: number) => {
            if (!prop.redirect) {
              const _activeRoute = activeRoute(prop.layout + prop.path);
              return (
                <SelectedOption
                  className={
                    prop.upgrade
                      ? "bg_active"
                      : _activeRoute
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    style={{ width: "100%" }}
                  >
                    <Icon name={prop.icon.name} size={prop.icon.size} color={
                      prop.upgrade
                      ? "bg_active"
                      : _activeRoute ? "white" :  LIGHT_GRAY
                    }/>
                    <span style={{ marginLeft: 10, color: 
                      prop.upgrade
                      ? "bg_active"
                      : _activeRoute ? "white" :  LIGHT_GRAY
                     }}>{prop.name}</span>
                  </NavLink>
                </SelectedOption>
              );
            }
            return null;
          })}
        </Nav>
    </SidebarComponent>
  );
}

export default Sidebar;
