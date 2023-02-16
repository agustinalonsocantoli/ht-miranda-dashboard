import { useState } from 'react';
import { StyledTable, OptionsMenu, BtnOptions, Icon } from './TableStyled';
import { BsThreeDotsVertical } from "react-icons/bs";

export const Table = ({ data, cols, actions }) => {
    const [ viewActions, setViewActions ] = useState(false);

    const getRow = (row) => (
        <tr key={row.index}>
            {cols.map((item, index)=> (
                <td key={index}>
                    {item.display ? item.display(row[item.property[0]], row[item.property[1]], row[item.property[2]], row[item.property[3]]) : row[item.property]}
                </td>
            ))}

            <td>
                <BtnOptions>
                <Icon><BsThreeDotsVertical onClick={() => setViewActions(prev => prev === row.index ? null : row.index)}/></Icon>
                
                <OptionsMenu visible={viewActions === row.index}>
                    {actions.map(item => <li key={item.name} onClick={() => item.action(row.index)}>{item.icon}{item.name}</li>)}
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
