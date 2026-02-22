<template>
  <div class="floor-plan">
    <div
      v-for="table in tables"
      :key="table.id"
      class="table-wrapper"
      :style="{ left: table.xPosition + 'px', top: table.yPosition + 'px' }"
    >
      <div class="chairs chairs--top">
        <div v-for="n in Math.ceil(table.capacity / 2)" :key="n" class="chair" />
      </div>

      <div
        class="table"
        :class="{
          'table--occupied': isOccupied(table),
          'table--recommended': isRecommended(table),
          'table--selected': isSelected(table)
        }"
        @click="selectTable(table)"
      >
        {{ table.tableNumber }}
      </div>

      <div class="chairs chairs--bottom">
        <div v-for="n in Math.floor(table.capacity / 2)" :key="n" class="chair" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Table } from '~/types/entities/Table'
import { useTableStore } from '~/stores/tableStore'

const tableStore = useTableStore()
const tables = computed(() => tableStore.tables)

const isOccupied = (table: Table) => tableStore.occupiedTableIds.includes(table.id)
const isRecommended = (table: Table) => tableStore.recommendedTableId === table.id
const isSelected = (table: Table) => tableStore.selectedTableId === table.id

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

.table:hover {
  filter: brightness(1.1);
}

.table--occupied {
  background: #78909c;
  cursor: not-allowed;
}

.table--recommended {
  background: #e53935;
  color: white;
}

.table--selected {
  background: #1565c0;
  color: white;
}

.chairs {
  display: flex;
  gap: 6px;
}

.chair {
  width: 14px;
  height: 14px;
  background: #b0bec5;
  border-radius: 3px;
}

.table--occupied ~ .chairs .chair,
.chairs:has(~ .table--occupied) .chair {
  background: #78909c;
}
</style>