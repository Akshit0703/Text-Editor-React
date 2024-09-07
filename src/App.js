import './App.css';
import Editor from './Editor';
import EditorToolbar from './EditorToolbar';

function App() {
  return (
    <div className="App">
      <h1>TEXT EDITOR</h1>
      <div className="container">
        <div className="textArea">
          <Editor></Editor>
        </div>
        <div className="Toolbar">
          <EditorToolbar></EditorToolbar>
        </div>
      </div>
    </div>
  );
}

export default App;
