import { StateCreator } from "zustand"

type Muscle = {}

export type ExerciseSliceType = {
    muscle: Muscle[]
}

export const createExerciseSlice : StateCreator<ExerciseSliceType> = () => ({
    muscle: []
})