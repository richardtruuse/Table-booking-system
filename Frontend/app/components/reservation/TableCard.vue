<template>
  <div
    class="table-wrapper"
    :style="{ left: table.xPosition + 'px', top: table.yPosition + 'px' }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="chairs chairs--top">
      <div v-for="n in Math.ceil(table.capacity / 2)" :key="n" class="chair" />
    </div>

    <div
      class="table"
      :class="{
        'table--occupied': isOccupied,
        'table--recommended': isRecommended,
        'table--selected': isSelected
      }"
      @click="emit('select', table)"
    >
      {{ table.tableNumber }}
    </div>

    <div class="chairs chairs--bottom">
      <div v-for="n in Math.floor(table.capacity / 2)" :key="n" class="chair" />
    </div>

    <!-- Tooltip -->
    <div v-if="hovered" class="tooltip">
      <strong>Table {{ table.tableNumber }}</strong>
      <template v-if="reservation">
        <span>Occupied {{ formatTime(reservation.startTime) }} – {{ formatTime(reservation.endTime) }}</span>
        <span>Guests: {{ reservation.reservationSize }}</span>
        <span v-if="reservation.notes">{{ reservation.notes }}</span>
      </template>
      <template v-else>
        <span>Available</span>
        <span>Capacity: {{ table.capacity }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Table } from '~/types/entities/Table'
import type { Reservation } from '~/types/entities/Reservation'

const props = defineProps<{
  table: Table
  isOccupied: boolean
  isRecommended: boolean
  isSelected: boolean
  reservation: Reservation | undefined
}>()

const emit = defineEmits<{
  select: [table: Table]
}>()

const hovered = ref(false)

const formatTime = (time: string) => {
  if (time.length === 5) return time
  return new Date(time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
}
</script>

<style scoped>
.table-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.table {
  width: 60px;
  height: 60px;
  background: #b0bec5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.2s;
}

.table:hover { filter: brightness(1.1); }
.table--occupied { background: #ff0000; cursor: not-allowed; }
.table--recommended { background: #e53935; color: white; }
.table--selected { background: #1565c0; color: white; }

.chairs { display: flex; gap: 6px; }
.chair {
  width: 14px;
  height: 14px;
  background: #b0bec5;
  border-radius: 3px;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 10;
}
</style>