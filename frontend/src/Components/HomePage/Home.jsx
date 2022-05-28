import Nav from "./Nav";
import Sidebar from "./SideBar";
import Main from "./Main";
import Container from "./Container";

const Home = () => {
  return (
    <div>
      <Nav />

      <Container>
        <Sidebar />

        <Main />
      </Container>
    </div>
  );
};

export default Home;
