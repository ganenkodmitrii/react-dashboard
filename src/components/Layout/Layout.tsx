import { Layout as Container, InputSearch, Sidebar } from 'ebs-design';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

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
            {routes.map(({ path, text }, index) => (
              <NavLink key={index} to={path}>
                <Sidebar.Options.Item text={text} />
              </NavLink>
            ))}
          </Sidebar.Options.TopSide>
        </Sidebar.Options>
      </Sidebar>

      <Container.Content>{children}</Container.Content>

      <Container.Footer />
    </Container>
  );
};
export default Layout;
