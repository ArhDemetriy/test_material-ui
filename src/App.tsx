import styles from './App.module.scss';
import { CustomTable } from './features/CustomTable/CustomTable';
// import { Counter } from './features/counter/Counter';
import { CustomTreeView } from './features/treeVIew/CustomTreeView';
// import { CustomSelect } from './features/SelectorTest/CustomSelect';

function App() {
  return (
    <div className="App">
      <div className={styles['App__columns']}>
        <CustomTable />
        <CustomTreeView />
        {/* <Counter /> */}
        {/* <CustomSelect /> */}
      </div>
    </div>
  );
}

export default App;
