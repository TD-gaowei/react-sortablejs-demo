import type { FC } from 'react';
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Col, Radio, Row } from 'antd';
import { LabelWithRate, LabelWithSwitch, TextField } from 'pages/Page1/common/Field';

import './index.scss';

export const Rating: FC = () => {
  const [value, setValue] = useState<string>('Sentiment');

  const handleChange = (e: RadioChangeEvent): void => {
    const val = e.target.value;
    setValue(val);
  };

  return (
    <div>
      <Row>
        <LabelWithSwitch label="switch" onChange={() => {}} />
        <Col>
          <Radio.Group onChange={handleChange} value={value}>
            <Radio value="Sentiment">Sentiment</Radio>
            <Radio value="Stars">Stars</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        {value === 'Sentiment' ? (
          <TextField label="Rating message" onChange={() => {}} />
        ) : (
          <LabelWithRate label="Rating message" />
        )}
      </Row>
    </div>
  );
};
