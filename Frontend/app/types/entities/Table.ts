import { Zone } from '../enums/Zone'
import { Feature } from '../enums/Feature'

export interface Table {
  id: number
  tableNumber: number
  capacity: number
  zone: Zone
  features: Feature[]
  xPosition: number
  yPosition: number
}
