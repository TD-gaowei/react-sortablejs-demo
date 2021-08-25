import type { FC } from 'react';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DroppableProps } from 'react-beautiful-dnd';
import clsx from 'clsx';
import { cloneDeep } from 'lodash-es';

import styles from './index.module.scss';

const originalCounts: number[] = Array.from({ length: 10 }, (_, i) => i);

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result as T[];
}

export const Page3: FC = () => {
  const [counts, setCounts] = useState<number[]>(originalCounts);

  const onDragEnd = (result: any) => {
    console.log(result);
    const newCounts = reorder<number>(cloneDeep(counts), result.source.index, result.destination.index);
    setCounts(newCounts);

    console.log('newCounts =', newCounts);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={clsx(styles.container, snapshot.isDraggingOver && 'draggingOver')}
            {...provided.droppableProps}
          >
            {counts.map((count, index) => (
              <Draggable key={count} draggableId={`${count}-id`} index={index}>
                {(provided, snapshot) => (
                  <div
                    key={count}
                    className={clsx(styles.item, snapshot.isDragging && 'dragging')}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {count}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
