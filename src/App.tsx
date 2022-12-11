import styles from './App.module.scss';
// import { Counter } from './features/counter/Counter';
import { CustomTreeView } from './features/treeVIew/CustomTreeView';

function App() {
  return (
    <div className="App">
      <div className={styles['App__columns']}>
        {/* <Counter /> */}
        <CustomTreeView />
      </div>
    </div>
  );
}

export default App;
