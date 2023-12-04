import React, { PropsWithChildren } from "react";

interface CounterContextModel {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const CounterContext = React.createContext<CounterContextModel>(null);

const CounterProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return <CounterContext.Provider value={{
        count: count,
        increment: increment,
        decrement:decrement
    }} >{children}</CounterContext.Provider>
}

const Increment: React.FC = () => {
    const { count, increment} = React.useContext(CounterContext);
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment!</button>
        </>
    )
}

const Decrement: React.FC = () => {
    const { decrement} = React.useContext(CounterContext);
    return (
        <>
            <button onClick={decrement}>Decrement!</button>
        </>
    )
}

export const Demo: React.FC = () => {
    return (
        <CounterProvider>
            <Increment />
            <Decrement />
        </CounterProvider>
    )
}


