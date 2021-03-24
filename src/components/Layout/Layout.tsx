import {
  Layout as Container,
  InputSearch,
  Sidebar,
  Icon,
} from '@ebs-integrator/react-ebs-ui';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HomeView from '../../features/home/HomeView/HomeView';
import ChatView from '../../features/home/ChatView/ChatView';

const Layout = () => {
  return (
    <Container>
      <Container.Topbar>
        <Container.Topbar.Toggler />

        <Container.Topbar.Title>Logo</Container.Topbar.Title>

        <Container.Topbar.LeftSide>
          <InputSearch />
        </Container.Topbar.LeftSide>

        <Container.Topbar.RightSide>text</Container.Topbar.RightSide>
      </Container.Topbar>

      <Sidebar>
        <Sidebar.TopMenu>
          <NavLink to="/" exact>
            <Sidebar.Item
              label="home"
              prefix={<Icon type="search" />}
              text="Top parent tab"
            />
          </NavLink>
          <NavLink to="/chat" exact>
            <Sidebar.Item
              label="chat"
              prefix={<Icon type="search" />}
              text="Top parent tab"
            />
          </NavLink>
        </Sidebar.TopMenu>
        Sidebar text
      </Sidebar>

      <Container.Content>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/chat" exact>
          <ChatView />
        </Route>
        Content text
      </Container.Content>
      <Container.Footer />
    </Container>
  );
};
export default Layout;
