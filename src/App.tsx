import './App.scss';
import { Counter } from './features/counter/Counter';
import { CustomTreeView } from './features/treeVIew/CustomTreeView';

function App() {
  return (
    <div className="App">
      <Counter />
      <CustomTreeView />
    </div>
  );
}

export default App;
