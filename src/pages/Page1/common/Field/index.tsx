import type { FC } from 'react';
import React from 'react';
import type { InputProps } from 'antd';
import { Col, Input, Rate, Select, Switch } from 'antd';

import styles from './index.module.scss';

const { Option } = Select;

interface Props {
  label: string;
}

export const Field: FC<Props> = (props) => {
  const { label, children } = props;

  return (
    <Col>
      <p className={styles.p}>{label}</p>
      {children}
    </Col>
  );
};

interface TextFieldProps extends InputProps {
  label: string;
}

export const TextField: FC<TextFieldProps> = (props) => {
  const { label, onChange, value } = props;

  return (
    <Field label={label}>
      <Input onChange={onChange} value={value} />
    </Field>
  );
};

interface SelectFieldProps {
  label: string;
  onChange: () => void;
}

export const SelectField: FC<SelectFieldProps> = (props) => {
  const { label, onChange } = props;

  return (
    <Field label={label}>
      <Select style={{ width: 120 }} onChange={onChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yim">yim</Option>
      </Select>
    </Field>
  );
};

interface LabelWithSwitchProps {
  label: string;
  onChange: () => void;
}

export const LabelWithSwitch: FC<LabelWithSwitchProps> = (props) => {
  const { label, onChange } = props;

  return (
    <Field label={label}>
      <Switch onChange={onChange} />
    </Field>
  );
};

interface LabelWithRateProps {
  label: string;
}

export const LabelWithRate: FC<LabelWithRateProps> = (props) => {
  const { label } = props;

  return (
    <Field label={label}>
      <Rate />
    </Field>
  );
};
