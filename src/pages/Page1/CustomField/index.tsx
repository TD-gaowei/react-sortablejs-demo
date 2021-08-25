import type { FC } from 'react';
import React, { useState } from 'react';
import { Row } from 'antd';
import { cloneDeep } from 'lodash-es';
import { AddAnotherButton } from 'pages/Page1/common/AddAnotherButton';
import { LabelWithSwitch, SelectField, TextField } from 'pages/Page1/common/Field';
import { v4 as uuidv4 } from 'uuid';

export const CustomField: FC = () => {
  const [fields, setFields] = useState([{ id: uuidv4() }]);

  const handleAddAnotherButton = (): void => {
    setFields([...cloneDeep(fields), { id: uuidv4() }]);
  };

  return (
    <div>
      {fields.map((field) => (
        <Row key={field.id}>
          <TextField label="Custom field" onChange={() => {}} />
          <SelectField label="Trigger" onChange={() => {}} />
          <LabelWithSwitch label="Required" onChange={() => {}} />
        </Row>
      ))}
      <AddAnotherButton onClick={handleAddAnotherButton} type="field" />
    </div>
  );
};
