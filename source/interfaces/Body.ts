import { ReactNode } from "react";

interface BodyProps {
    currentAnimal: number;
    animals: Array<() => JSX.Element>;
    questionCount: number;
    children: ReactNode
};

export type { BodyProps };