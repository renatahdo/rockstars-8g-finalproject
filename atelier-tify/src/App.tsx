import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Cover } from './components/Cover/Cover';

const App = () => {
  return (
    <>
      <Cover></Cover>
      <Navbar type="home"></Navbar>
    </>
  );
}

export default App;
