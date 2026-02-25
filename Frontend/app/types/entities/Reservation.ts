import type { Table } from './Table'

export interface Reservation {
  id: number
  table: Table
  userId: number
  date: Date 
  startTime: string // HH:mm formaadis
  endTime: string // HH:mm formaadis
  reservationSize: number
  status: 'pending' | 'confirmed' | 'cancelled'
  customerName: string
  customerEmail: string
  notes?: string
}
