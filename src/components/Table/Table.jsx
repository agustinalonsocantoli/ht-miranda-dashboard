import { useState } from 'react';
import { StyledTable, OptionsMenu, BtnOptions, Icon } from './TableStyled';
import { BsThreeDotsVertical } from "react-icons/bs";

export const Table = ({ data, cols, actions }) => {
    const [ viewActions, setViewActions ] = useState(false);

    const getRow = (row) => (
        <tr key={row.id}>
            {cols.map((item, index)=> (
                <td key={index}>
                    {item.display ? item.display(row) : row[item.property]}
                </td>
            ))}

            <td>
                <BtnOptions>
                <Icon><BsThreeDotsVertical onClick={() => setViewActions(prev => prev === row.id ? null : row.id)}/></Icon>
                
                <OptionsMenu visible={viewActions === row.id}>
                    {actions.map((item, index) => <li key={index} onClick={() => item.action(row.id)}>{item.icon}{item.name}</li>)}
                </OptionsMenu>
                </BtnOptions>
            </td>
        </tr>

    );

    const columnWidth = 100 / cols.length;

    return(
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
                {data.map(getRow)}
            </tbody>
        </StyledTable>
    );
}

//  [item.property[0]], row[item.property[1]], row[item.property[2]], row[item.property[3]]