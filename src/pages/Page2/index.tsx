import type { FC } from 'react';
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import './index.scss';

interface Props {
  isDragging: boolean;
  text: string;
}

const type = 'card';

export const Page2: FC<Props> = ({ isDragging, text }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type,
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [],
  );

  const [{ isOver }, drop] = useDrop({
    accept: type,
    hover: () => setText(text),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const setText = (text: string) => {
    // @ts-ignore
    ref.current.innerText = text;
  };

  return (
    <div>
      <p ref={dragRef} style={{ opacity }}>
        {text}
      </p>
      <div className="box" ref={drop} />
    </div>
  );
};
