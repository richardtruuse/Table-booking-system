import type { Table } from './Table'

export interface Reservation {
  id: number
  table: Table
  date: Date 
  startTime: string // HH:mm format
  endTime: string // HH:mm format
  reservationSize: number
  customerName: string
  customerEmail: string
}
