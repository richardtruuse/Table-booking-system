<template>
  <div class="floor-plan">
    <TableCard
      v-for="table in tables"
      :key="table.id"
      :table="table"
      :isOccupied="isOccupied(table)"
      :isRecommended="isRecommended(table)"
      :isSelected="isSelected(table)"
      :reservation="getReservation(table.id)"
      @select="selectTable"
    />

    <div class="legend">
      <div class="legend-item">
        <div class="legend-box legend-box--available"></div>
        <span>Available</span>
      </div>
      <div class="legend-item">
        <div class="legend-box legend-box--occupied"></div>
        <span>Occupied</span>
      </div>
      <div class="legend-item">
        <div class="legend-box legend-box--recommended"></div>
        <span>Recommended</span>
      </div>
      <div class="legend-item">
        <div class="legend-box legend-box--selected"></div>
        <span>Selected</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Table } from '~/types/entities/Table'
import { useTableStore } from '~/stores/tableStore'
import { useReservationStore } from '~/stores/reservationStore'
import TableCard from '~/components/reservation/TableCard.vue'

const tableStore = useTableStore()
const reservationStore = useReservationStore()
const tables = computed(() => tableStore.tables)

const isOccupied = (table: Table) => reservationStore.reservations.some(r => r.table.id === table.id)
const isRecommended = (table: Table) => tableStore.recommendedTableId === table.id
const isSelected = (table: Table) => tableStore.selectedTableId === table.id

const getReservation = (tableId: number) => {
  return reservationStore.reservations.find(r => r.table.id === tableId)
}

const selectTable = (table: Table) => {
  if (!isOccupied(table)) {
    tableStore.selectedTableId = table.id
  }
}
</script>

<style scoped>
.floor-plan {
  position: relative;
  width: 900px;
  height: 600px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 12px;
}

.legend {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #000;
}

.legend-box {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.legend-box--available { background: #b0bec5; }
.legend-box--occupied { background: #78909c; }
.legend-box--recommended { background: #e53935; }
.legend-box--selected { background: #1565c0; }
</style>