import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface RowData {
  // Define properties according to your API response
  id: number;
  name: string;
  // Add more properties as needed
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 200 },
  // Define more columns as needed
];

const DataGridComponent: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);

  useEffect(() => {
    // Fetch data from your API
    axios.get('YOUR_API_URL')
      .then(response => {
        const apiData: RowData[] = response.data;
        setRows(apiData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default DataGridComponent;
