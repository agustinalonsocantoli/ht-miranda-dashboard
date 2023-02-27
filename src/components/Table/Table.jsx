// React
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
    const [ perPage ] = useState(5);
    const max = Math.ceil(data.length / perPage)

    const getRow = (row) => (
        <tr key={row.id}>
            {cols.map((item, index)=> (
                <td key={index}>
                    {item.display ? item.display(row) : row[item.property]}
                </td>
            ))}

            { actions &&
            <td>
                <BtnOptions>
                <Icon><BsThreeDotsVertical onClick={() => setViewActions(prev => prev === row.id ? null : row.id)}/></Icon>
                
                <OptionsMenu visible={viewActions === row.id}>
                    {actions.map((item, index) => <li key={index} onClick={() => item.action(row.id)}>{item.icon}{item.name}</li>)}
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
                        {cols.map((item, index) => (
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