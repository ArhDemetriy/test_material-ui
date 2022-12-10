import { RootState, store } from "../../app/store"
import { IHideDispatch, StaticImplements } from "../../types"
import { actions, incrementAsync } from "./counterSlice"

type ICounterActions = IHideDispatch<
    & typeof actions
    & { incrementAsync: typeof incrementAsync }
>

export class CounterActions implements StaticImplements<ICounterActions, typeof CounterActions>{
    // set
    public static increment() {
        store.dispatch(actions.increment())
    }

    public static decrement() {
        store.dispatch(actions.decrement())
    }

    public static incrementByAmount(amount: number) {
        store.dispatch(actions.incrementByAmount(amount))
    }

    public static incrementIfOdd(amount: number) {
        const currentValue = CounterActions.get().value
        if (currentValue % 2 === 1) {
            CounterActions.incrementByAmount(amount)
        }
    }

    public static incrementAsync(amount: number) {
        store.dispatch(incrementAsync(amount))
    }

    // select
    public static select(state: RootState) {
        return state.counter
    }

    public static selectValue(state: RootState) {
        return CounterActions.select(state).value
    }

    public static selectStatus(state: RootState) {
        return CounterActions.select(state).status
    }

    // get
    private static get() {
        return CounterActions.select(store.getState())
    }
}