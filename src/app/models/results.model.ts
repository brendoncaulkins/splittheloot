import { ILoot } from './loot.model'

export interface IResults {
  showParty: boolean
  partyShare: ILoot
  partyMemberShare: ILoot
  leftOver: ILoot
}
