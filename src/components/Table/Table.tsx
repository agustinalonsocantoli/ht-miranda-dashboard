// React
import React from 'react';
import { useState } from 'react';
// Components
import { Pagination } from '../Pagination/Pagination';
// Icons
import { BsThreeDotsVertical } from "react-icons/bs";
// Styled
import { StyledTable, OptionsMenu, BtnOptions, Icon } from './TableStyled';

export const Table = ({ data, cols, actions }) => {
    const [ viewActions, setViewActions ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ perPage ] = useState(10);
    const max = Math.ceil(data.length / perPage)

    const getRow = (row: any) => (
        <tr key={row._id}>
            {cols.map((item: any, index: number)=> (
                <td key={index}>
                    {item.display ? item.display(row) : row[item.property]}
                </td>
            ))}

            { actions &&
            <td>
                <BtnOptions>
                <Icon><BsThreeDotsVertical onClick={() => setViewActions(prev => prev === row._id ? null : row._id)}/></Icon>
                
                <OptionsMenu visible={viewActions === row._id}>
                    {actions.map((item: any, index: number) => <li key={index} onClick={() => item.action(row._id)}>{item.icon}{item.name}</li>)}
                </OptionsMenu>
                </BtnOptions>
            </td>}
        </tr>
    );

    const columnWidth = 100 / cols.length;
                        
    return(
        <div>
            <StyledTable columnWidth={columnWidth}>
                <thead>
                    <tr>
                        {cols.map((item: any, index: number) => (
                            <th key={index}>
                                {item.label}
                            </th>
                        ))}

                        <th>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map(getRow)}
                </tbody>
            </StyledTable>
            
            <Pagination page={page} setPage={setPage} max={max} />
        </div>
    );
}