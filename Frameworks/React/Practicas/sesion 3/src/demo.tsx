import React, { PropsWithChildren } from "react";

interface CounterContextModel {
    countValue: number;
    updateCount: (value: number) => void;
}

const CounterContext = React.createContext<CounterContextModel>(null);

const CounterProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [count, setCount] = React.useState(0);

    const updateCount = (value: number) => {
        if (value < 5) {
            setCount(value);
        }
        else {
            setCount(0);
        }
    }

    return <CounterContext.Provider value={{
        countValue: count,
        updateCount: updateCount
    }} >{children}</CounterContext.Provider>
}

const Increment: React.FC = () => {
    const { countValue, updateCount } = React.useContext(CounterContext);
    return (
        <>
            <h1>Counter: {countValue}</h1>
            <button onClick={() => updateCount(countValue + 1)}>Increment!</button>
        </>
    )
}

export const Demo: React.FC = () => {
    return (
        <CounterProvider>
            <Increment />
        </CounterProvider>
    )
}


