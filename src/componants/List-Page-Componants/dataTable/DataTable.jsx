import React from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { columns, userRows } from '../../../dataTableSource';


const DataTable = () => {
  const actionColumn = [
    {field: "action", headerName: "Action", width: 200, renderCell: ()=>{
      return (
        <div className="cellAction">
          <button className='viewBtn'> View</button>
          <button className='deleteBtn'> Delete</button>
        </div>
      )
    }}
  ]
  return (
    <div className='dataTable'>
       
      <DataGrid
        rows={userRows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    
    </div>
  )
}

export default DataTable