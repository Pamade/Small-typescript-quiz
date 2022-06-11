export interface Question {
    id: number,
    question: string,
    answers: {
        value:string,
        isSelected: boolean
    }[],
    msg:string,
    correctAnswer: string
}

export interface Props {
    questions: Question[];
}

export interface PropsSet extends Props{
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>
}