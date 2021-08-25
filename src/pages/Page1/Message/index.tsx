import type { FC } from 'react';
import React, { useState } from 'react';
import { Col, Input, Row, Switch } from 'antd';
import { cloneDeep } from 'lodash-es';
import { AddAnotherButton } from 'pages/Page1/common/AddAnotherButton';
import { v4 as uuidv4 } from 'uuid';

const { TextArea } = Input;

export const Message: FC = () => {
  const [messages, setMessages] = useState([{ id: uuidv4() }]);

  const handleAddAnotherButton = (): void => {
    setMessages([...cloneDeep(messages), { id: uuidv4() }]);
  };

  return (
    <div>
      {messages.map((message) => (
        <Row key={message.id}>
          <Col>
            <p>Message</p>
            <TextArea rows={3} />
          </Col>
          <Col>
            <p>Chat bubble</p>
            <Switch />
          </Col>
        </Row>
      ))}
      <AddAnotherButton onClick={handleAddAnotherButton} type="message" />
    </div>
  );
};
