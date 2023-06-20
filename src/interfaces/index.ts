export interface ICountry {
    name: string;
    capital: string;
    states?: IState[];
    code: string;
  }  

export interface IState {
    name: string;
    code: string;
    countryCode?: string;
    lgas?: ILga[];
}

export interface ILga {
  name: string;
  stateCode?: string;
}