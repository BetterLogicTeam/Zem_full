import React from 'react'
import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <div>
            <div className=" ">

                <div className=" container-fluid p-0">
                  


                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive react_table_responisve">
                                        <div id="myAssets_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table {...getTableProps()} className="table main_table_react table-bordered mb-0 text-nowrap dataTable no-footer" id="myAssets"
                                                        role="grid" aria-describedby="myAssets_info">
                                                        <thead className="thead-light">
                                                            {headerGroups.map(headerGroup => (
                                                                <tr {...headerGroup.getHeaderGroupProps()}>
                                                                    {headerGroup
                                                                        .headers
                                                                        .map(column => (
                                                                            <th className='main_table_th' {...column.getHeaderProps()}>{column.render('Header')}</th>
                                                                        ))}
                                                                </tr>
                                                            ))}
                                                        </thead>

                                                        <tbody {...getTableBodyProps()}>
                                                            {rows.map((row, i) => {
                                                                prepareRow(row);
                                                                return (
                                                                    <tr className='even ' {...row.getRowProps()}>
                                                                        {row
                                                                            .cells
                                                                            .map(cell => {
                                                                                return <td className='react_Tr' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                                            })}
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Table
