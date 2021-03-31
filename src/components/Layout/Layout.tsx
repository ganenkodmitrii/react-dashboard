import { Layout as Container, InputSearch, Sidebar } from '@ebs-integrator/react-ebs-ui';
import { NavLink } from 'react-router-dom';
const Layout: React.FC = ({ children }) => {
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
        <Sidebar.TopMenu></Sidebar.TopMenu>

        <Sidebar.Options>
          <Sidebar.Options.TopSide>
            <NavLink to="/">
              <Sidebar.Options.Item text="initial" />
            </NavLink>
            <NavLink to="/dashboard">
              <Sidebar.Options.Item text="advance" />
            </NavLink>
            <NavLink to="/form">
              <Sidebar.Options.Item text="form" />
            </NavLink>
          </Sidebar.Options.TopSide>
        </Sidebar.Options>
      </Sidebar>

      <Container.Content>{children}</Container.Content>

      <Container.Footer />
    </Container>
  );
};
export default Layout;
