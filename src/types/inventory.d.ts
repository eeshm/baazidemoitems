export interface InventoryItem {
    id: string;
    parentComponent: string;
    subComponent: string;
    availableQty: number;
    replaced: number;
    damaged: number;
    alert: string;
  }