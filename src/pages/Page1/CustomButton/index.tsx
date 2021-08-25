import type { FC } from 'react';
import React, { useState } from 'react';
import { Row } from 'antd';
import { cloneDeep } from 'lodash-es';
import { AddAnotherButton } from 'pages/Page1/common/AddAnotherButton';
import { SelectField, TextField } from 'pages/Page1/common/Field';
import { v4 as uuidv4 } from 'uuid';

interface ButtonField {
  id: string;
}

export const CustomButton: FC = () => {
  const [buttons, setButtons] = useState<ButtonField[]>([{ id: uuidv4() }]);

  const handleAddAnotherButton = (): void => {
    setButtons([...cloneDeep(buttons), { id: uuidv4() }]);
  };

  return (
    <div>
      {buttons.map((button) => (
        <Row key={button.id}>
          <TextField label="Custom button" onChange={() => {}} />
          <SelectField label="Trigger" onChange={() => {}} />
        </Row>
      ))}

      <AddAnotherButton onClick={handleAddAnotherButton} type="button" />
    </div>
  );
};
