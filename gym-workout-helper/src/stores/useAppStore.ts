import { create } from "zustand";
import { createExerciseSlice } from "./exerciseSlice";

export const useAppStore = create( (...a) => ({ //...a para tener set, get, api
    ...createExerciseSlice(...a) // tomar una copia
}))