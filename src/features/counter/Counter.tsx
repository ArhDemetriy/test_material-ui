import { useState, FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { CounterActions } from './CounterActions';
import styles from './Counter.module.scss';

export const Counter: FC = () => {
  const count = useAppSelector(CounterActions.selectValue);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles['row']}>
        <button
          className={styles['button']}
          aria-label="Decrement value"
          onClick={CounterActions.decrement}
        >
          -
        </button>
        <span className={styles['value']}>{count}</span>
        <button
          className={styles['button']}
          aria-label="Increment value"
          onClick={CounterActions.increment}
        >
          +
        </button>
      </div>
      <div className={styles['row']}>
        <input
          className={styles['textbox']}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles['button']}
          onClick={() => CounterActions.incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles['asyncButton']}
          onClick={() => CounterActions.incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles['button']}
          onClick={() => CounterActions.incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
