import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchInventory } from '@/features/inventory/inventorySlice';
import Table from '@/components/Table';

import { Column } from '@/components/Table'; // wherever you defined it
import { InventoryItem } from '@/features/inventory/inventorySlice'; // or your types file
export default function Home() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  const columns: Column<InventoryItem>[] = [
    { header: "Component Name", accessor: "component_name", sortable: true, filterable: true },
    { header: "SKU Code", accessor: "sku_code", sortable: true, filterable: true },
    { header: "HSN Code", accessor: "hsn_code", sortable: true, filterable: true },
    { header: "Total Quantity", accessor: "total_quantity", sortable: true, filterable: true },
  ];
  // const columns = [
  //   { header: 'Component ID', accessor: 'component_id' },
  //   { header: 'Component Name', accessor: 'component_name' },
  //   { header: 'SKU Code', accessor: 'sku_code' },
  //   { header: 'HSN Code', accessor: 'hsn_code' },
  //   { header: 'Has Subcomponent', accessor: 'has_subcomponent' },
  //   { header: 'Is Subcomponent', accessor: 'is_subcomponent' },
  // ];

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-800 text-gray-400">
      <h1 className="text-2xl font-bold mb-6">Inventory Table</h1>
      <Table data={data} columns={columns} pageSize={10} />
    </div>
  );
}

