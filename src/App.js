import logo from './logo.svg';
import './App.css';
import {MyComponent} from './component/MyComponent';
import {MyFuncComponent} from './component/MyFuncComponent';

function App() {
  return (
    <div>
      <div>
        <h2> This content is from App.js</h2>
      </div>
      <MyComponent name ="Mark"/>
      <p>Separating components::</p>
      <MyFuncComponent state ="WB"/>
    </div>
  );
}

export default App;
