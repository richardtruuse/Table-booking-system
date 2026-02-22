import { defineStore } from 'pinia'
import type { Table } from '~/types/entities/Table'

export const useTableStore = defineStore('table', {
  state: () => ({
    tables: [ // dummy andmed hiljem kustutada
      { id: 1, tableNumber: 1, capacity: 4, zone: 'INDOOR', features: [], xPosition: 50, yPosition: 80 },
      { id: 2, tableNumber: 2, capacity: 2, zone: 'INDOOR', features: [], xPosition: 150, yPosition: 80 },
      { id: 3, tableNumber: 3, capacity: 6, zone: 'INDOOR', features: [], xPosition: 250, yPosition: 80 },
      { id: 4, tableNumber: 4, capacity: 4, zone: 'TERRACE', features: [], xPosition: 50, yPosition: 220 },
      { id: 5, tableNumber: 5, capacity: 2, zone: 'TERRACE', features: [], xPosition: 150, yPosition: 220 },
    ] as Table[],
    occupiedTableIds: [2] as number[],
    recommendedTableId: 3 as number | null,
    selectedTableId: null as number | null,
  }),
  actions: {
    async fetchTables() {
      // asendada päris API kutsega
    },
    selectTable(id: number) {
      this.selectedTableId = id
    },
    setRecommended(id: number) {
      this.recommendedTableId = id
    }
  }
})