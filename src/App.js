import img from './Assets/Img/cranium-2099119.svg';
import './App.css';
import './Button.css'
import MyButton from './components/ButtonComponent';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <MyButton buttonText="clicca"/>
        
      </header>
    
      
    


    </div>
  );
}

export default App;
