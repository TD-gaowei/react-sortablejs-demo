import type { FC } from 'react';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Button, Col, Row } from 'antd';
import { DragIcon } from 'pages/Page1/common/DragIcon';
import { CustomButton } from 'pages/Page1/CustomButton';
import { CustomField } from 'pages/Page1/CustomField';
import { Message } from 'pages/Page1/Message';

import { CustomDropdown } from './CustomDropdown';
import { Rating } from './Rating';

import './index.scss';

interface Count {
  id: number;
  // eslint-disable-next-line no-undef
  component: JSX.Element;
}

const defaultCount: Count[] = [
  { id: 0, component: <Message /> },
  { id: 1, component: <CustomDropdown /> },
  { id: 2, component: <CustomField /> },
  { id: 3, component: <CustomButton /> },
  { id: 4, component: <Rating /> },
];

export const Page1: FC = () => {
  const [count, setCount] = useState<Count[]>(defaultCount);

  return (
    <div className="container">
      <ReactSortable list={count} setList={setCount}>
        {count.map((c) => (
          <Row key={c.id}>
            <Col>
              <DragIcon />
            </Col>
            <Col>{c.component}</Col>
          </Row>
        ))}
      </ReactSortable>

      <Button type="primary">submit</Button>
    </div>
  );
};
