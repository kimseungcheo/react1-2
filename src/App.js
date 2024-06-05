import './App.css';
import SplitPane from './SplitPane';


function App() {
  return (
    <>

      <SplitPane
        left = { <Contacts/>}
        rigth = { <Chat/>}
      />

    </>

  );
}

export default App;
