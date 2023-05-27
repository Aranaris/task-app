import './App.css';
import Overview from './components/Overview';

function App () {
  return (
    <div className="App">
      <Overview title="Task List">
      </Overview>
      <form>
          <label htmlFor="newtask">Add New Task: </label>
          <input type="text" id="newtask"></input>
          <input type="submit" value="submit"></input>
        </form>
    </div>
  );
}
  

export default App;
