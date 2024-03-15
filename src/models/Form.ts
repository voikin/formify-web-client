export type QuestionType = "oneChoice" | "multiChoice" | "answer"

export type Question = {
    index: number
    type: QuestionType
    name: string
    description?: string
    options?: string[]
    correctAnswers?: string[]
}

export type Form = {
    id?: string
    title: string
    questions: Question[]
}

export type Answer = {
    questionIndex: number
    answers: []
}

export type Answers = {
    formId: string
    answers: Answer[]
}

export type Result = {
    questionIndex: number
    isRight: boolean
}