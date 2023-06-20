import states from "../data/states";
import { IState } from "../interfaces";

const stateMap: { [countryCode: string]: IState[] } = {};

Object.values(states).forEach((state) => {
    const countryCode = state.countryCode;
    
    if (!stateMap[countryCode]) {
        stateMap[countryCode] = [];
    }

    stateMap[countryCode].push(state);
});

export const getStates = (countryCode: string): IState[] | undefined => {
    const matchingStates = stateMap[countryCode];
    if (matchingStates) {
      return matchingStates;
    }

    return undefined;
};