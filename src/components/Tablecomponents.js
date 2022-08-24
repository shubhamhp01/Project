import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import data1 from './data.json'
import {COLUMNS} from './columns'
import './table.css'


const Tablecomponents = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => data1, [])

    const tableInst = useTable({
        columns,
        data
    }) 

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = tableInst

  return (
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {
                            headerGroups.headers.map((columns) => (
                                <th {...columns.getHeaderProps()}>
                                    {columns.render('Header') }  
                                </th>
                            ))
                        }
                        
                    </tr>
                ))
            }  
        </thead>

        <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    
                                   return (<td {...cell.getCellProps()}> 
                                        {cell.render('Cell')}
                                    </td>)
                                })
                            }
                        </tr>
                    )
                })
            }   
        </tbody> 
    </table>
  )
}

export default Tablecomponents
