<template>
  <div class="floor-plan">
    <div class="indoor-zone">
      <span class="indoor-label">INDOOR</span>
    </div>

    <div class="terrace-zone">
      <span class="terrace-label">TERRACE</span>
    </div>

    <div class="entrance-zone">
      <span class="entrance-label">ENTRANCE</span>
    </div>

    <div class="bar-zone">
      <span class="bar-label">BAR</span>
    </div>

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
  margin: 0 auto;
}

.indoor-zone {
  position: absolute;
  inset: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;
}

.indoor-label {
  color: #90a4ae;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 6px;
  opacity: 0.35;
}

.terrace-zone {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 450px;
  height: 250px;
  border-top: 2px dashed #d1c4b7;
  border-right: 2px dashed #d1c4b7;
  border-radius: 0 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  z-index: 1;
  pointer-events: none;
}

.terrace-label {
  color: #90a4ae;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;
}

.entrance-zone {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-3%);
  width: 60px;
  height: 40px;
  border: 2px dashed #4CAF50;
  border-radius: 8px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  z-index: 1;
  pointer-events: none;
}

.entrance-label {
  color: #90a4ae;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;
}

.bar-zone {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 300px;
  border: 2px dashed #FF6B6B;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  z-index: 1;
  pointer-events: none;
}

.bar-label {
  color: #90a4ae;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;
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