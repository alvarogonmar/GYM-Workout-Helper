import { useAppStore } from "../stores/useAppStore";

export default function ExercisePage() {
  useAppStore((state) => state.muscle);
  return (
    <>
      <h1>My Exercises</h1>
    </>
  );
}
