import logo from './logo.svg';
import './App.css';
import {MyComponent} from './component/MyComponent';
import {MyFuncComponent} from './component/MyFuncComponent';
import Counter from './component/Counter';
import RefDemo from './component/RefDemo';
import Component1 from './component/Component1';
import Component2 from './component/Component2';
import DynamicContent from './component/DynamicContent';
import RouteDemo from './component/RouteDemo';
import { BrowserRouter } from 'react-router-dom';
import NavigateComponent from './component/NavigateComponent';

function App() {
  return (
    <div>
      {/* <div>
        <h2> This content is from App.js</h2>
      </div>
      <MyComponent name ="Mark"/>
      <p>Separating components::</p>
      <MyFuncComponent state ="WB"/>
      <hr>
      </hr>

      <Counter /> */}
<BrowserRouter>
      <NavigateComponent/>
 </BrowserRouter>   

    </div>
  );
}

export default App;
