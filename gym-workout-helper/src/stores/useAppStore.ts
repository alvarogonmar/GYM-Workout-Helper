import { create } from "zustand";
import { createExerciseSlice, ExerciseSliceType } from "./exerciseSlice";

export const useAppStore = create<ExerciseSliceType>( (...a) => ({ //...a para tener set, get, api
    ...createExerciseSlice(...a) // tomar una copia
}))