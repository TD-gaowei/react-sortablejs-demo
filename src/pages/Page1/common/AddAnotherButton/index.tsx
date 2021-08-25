import type { FC } from 'react';
import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

import './index.scss';

interface Props {
  onClick: () => void;
  type: string;
}

export const AddAnotherButton: FC<Props> = (props) => {
  const { onClick, type } = props;

  return (
    <span onClick={onClick} className="addAnotherItem">
      <PlusCircleOutlined /> Add another {type}
    </span>
  );
};
