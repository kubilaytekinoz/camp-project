import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import Categories from './layouts/Categories';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Navi></Navi>
      
      <Container className="main">
        <Dashboard></Dashboard>
        </Container>
      
    </div>
  );
}

export default App;
