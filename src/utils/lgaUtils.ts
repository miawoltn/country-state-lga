import lgas from "../data/lgas";
import { ILga } from "../interfaces";

const lgaMap: { [countryCode: string]: ILga[] } = {};

Object.values(lgas).forEach((lga) => {
    const stateCode = lga.stateCode;
    
    if (!lgaMap[stateCode]) {
        lgaMap[stateCode] = [];
    }

    lgaMap[stateCode].push(lga);
});

export const getLgas = (stateCode: string): ILga[] | undefined => {
    const matchingLgas = lgaMap[stateCode];
    if (matchingLgas && matchingLgas.length > 0) {
      return matchingLgas;
    }

    return undefined;
};