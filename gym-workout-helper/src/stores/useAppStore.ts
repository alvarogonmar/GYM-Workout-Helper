import { create } from "zustand";
import { createExerciseSlice } from "./exerciseSlice";

export const useAppStore = create( () => ({
    ...createExerciseSlice() // tomar una copia
}))