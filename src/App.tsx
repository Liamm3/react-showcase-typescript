import Container from "react-bootstrap/Container";

import Navigation from "./components/Navigation";
import Router from "./components/Router";

function App() {
  return (
    <>
      <Navigation />
      <Container className="mt-3">
        <Router />
      </Container>
    </>
  );
}

export default App;
