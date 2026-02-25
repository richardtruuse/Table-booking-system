import { defineStore } from 'pinia'
import type { Reservation } from '~/types/entities/Reservation'
import { Zone } from '~/types/enums/Zone'

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    reservations: [
      {
        id: 1,
        userId: 1,
        table: {
          id: 1,
          tableNumber: 1,
          capacity: 4,
          zone: Zone.MAIN,
          features: [],
          xPosition: 50,
          yPosition: 80
        },
        date: new Date('2026-02-22'),
        startTime: '18:00',
        endTime: '20:00',
        status: 'confirmed' as const,
        reservationSize: 4,
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        notes: 'Birthday dinner',
      },
      {
        id: 2,
        userId: 2,
        table: {
          id: 3,
          tableNumber: 3,
          capacity: 6,
          zone: Zone.MAIN,
          features: [],
          xPosition: 250,
          yPosition: 80
        },
        date: new Date('2026-02-22'),
        startTime: '19:00',
        endTime: '21:00',
        status: 'pending' as const,
        reservationSize: 2,
        customerName: 'Jane Smith',
        customerEmail: 'jane@example.com',
        notes: 'Anniversary',
      }
    ] as Reservation[],
    currentReservation: null as Reservation | null,
  }),
  actions: {
    async fetchReservations() {},
    setCurrentReservation(reservation: Reservation) {
      this.currentReservation = reservation
    }
  }
})