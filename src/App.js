// import logo from './logo.svg';
import Card from './Card';
import Cardlist from './Cardlist';
// import style from'./App.module.css'
import robot from './Data'


function App() { 
  return (
    <div>
     <Cardlist robot ={robot}></Cardlist>
    </div>
  );
}

export default App;
