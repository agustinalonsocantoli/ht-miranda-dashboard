// React
import { useState } from 'react';
// Components
import { Pagination } from '../Pagination/Pagination';
// Icons
import { BsThreeDotsVertical } from "react-icons/bs";
// Styled
import { StyledTable, OptionsMenu, BtnOptions, Icon } from './TableStyled';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



export const Table = ({ data, cols, actions }) => {
    const [ viewActions, setViewActions ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ perPage ] = useState(5);

    const max = Math.ceil(data.length / perPage)

    const getRow = (row, index) => (
        <Draggable key={row.id} draggableId={row.id} index={index}>
            {(provided, _) => (
                <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
            )}
        </Draggable>
    );

    const columnWidth = 100 / cols.length;
                        
    return(
        <div>
            <DragDropContext
            onDragEnd={() => {}}>
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

                    <Droppable droppableId={'tbody'}>
                        {(provided, _) => (
                            <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                {data.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map((item, index) => getRow(item, index))}
                                {provided.placeholder}
                            </tbody>
                        )}
                    </Droppable>

                </StyledTable>
            </DragDropContext>
            <Pagination page={page} setPage={setPage} max={max} />
        </div>
    );
}