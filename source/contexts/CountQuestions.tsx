import { createContext, ReactNode, useState } from "react";
import { CountQuestionsType } from "../interfaces/countQuestions.js";

export const CountQuiestionsContext = createContext<CountQuestionsType>({
    count: 0,
    incrementCount: () => { },
    resetCount: () => { },
})

export const CountQuiestionsProvider = ({ children }: { children: ReactNode }) => {
    const [countQuestions, setCountQuestions] = useState<number>(0)

    const incrementCount = () => {
        setCountQuestions(countQuestions + 1)
    }

    const resetCount = () => {
        setCountQuestions(0)
    }

    return (
        <CountQuiestionsContext.Provider value={{ count: countQuestions, incrementCount, resetCount }}>
            {children}
        </CountQuiestionsContext.Provider>
    )
}