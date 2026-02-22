import { defineStore } from 'pinia'
import type { Reservation } from '~/types/entities/Reservation'

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    reservations: [] as Reservation[],
    currentReservation: null as Reservation | null,
  }),

  actions: {
    async fetchReservations() {
      // hiljem API kutse
    },

    setCurrentReservation(reservation: Reservation) {
      this.currentReservation = reservation
    }
  }
})