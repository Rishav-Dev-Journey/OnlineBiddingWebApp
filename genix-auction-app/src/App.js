import './App.css';
import { VectorLogo } from './assets/icons/icons';
import CommonButton from './components/atoms/CommonButton';
import Header from './components/organisms/Header';
import SceneWireframe from './assets/images/SceneWireframe.svg';
import HomePageGroup from './assets/images/HomePageGroup.svg'
import Input from './components/atoms/Input';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
     <RegisterPage/>
    </div>
  );
}

export default App;