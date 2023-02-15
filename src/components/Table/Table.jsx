import { StyledTable } from './TableStyled';

export const Table = ({ data, cols }) => {

    const getRow = (row) => (
        <tr key={row.index}>
            {cols.map((item, index)=> (
                <td key={index}>
                    {item.display ? item.display(row[item.property[0]], row[item.property[1]], row[item.property[2]]) : row[item.property]}
                </td>
            ))}
        </tr>
    );

    return(
        <StyledTable>
            <thead>
                <tr>
                    {cols.map((item, index) => (
                        <th key={index}>
                            {item.label}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map(getRow)}
            </tbody>
        </StyledTable>
    );
}
