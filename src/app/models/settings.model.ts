export interface ISettings {
  partyPercentage: number
  partySize: number
  convertToGold: boolean
}

export const initialSettings: ISettings = {
  partyPercentage: 0,
  partySize: 5,
  convertToGold: false,
}
