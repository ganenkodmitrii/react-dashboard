import { Layout as Container, InputSearch, Sidebar } from '@ebs-integrator/react-ebs-ui';

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
        Sidebar text
      </Sidebar>

      <Container.Content>{children}</Container.Content>

      <Container.Footer />
    </Container>
  );
};
export default Layout;
