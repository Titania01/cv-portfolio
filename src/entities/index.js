import { entity, persistence } from "simpler-state";

const defaultState = {
  theme: "light",
};
const stored = window.localStorage.getItem("portfolio-theme");
console.log("sdsd", stored);
const initState = stored ? JSON.parse(stored) : defaultState;

export const portfolioEntity = entity(initState, [
  persistence("portfolio-theme"),
]);

export const setTheme = () =>
  portfolioEntity.set((currentState) => ({
    ...currentState,
    theme: currentState.theme === "light" ? "dark" : "light",
  }));
