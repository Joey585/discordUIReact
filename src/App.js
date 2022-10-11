import './App.css';
import MessageFrame from "./components/MessageFrame";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
        <h3 className="text-info">Create artificial discord message</h3>
        <label className="form-label m-3">Avatar Link</label>
        <input type="text" className="form-text"/>
        <label className="form-label m-3">Message</label>
        <input className="form-text" type="text"/>
        <button className="btn-primary btn m-3">Submit</button>

        <MessageFrame />
    </div>
  );
}

export default App;
