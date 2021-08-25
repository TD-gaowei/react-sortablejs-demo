import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Switch } from 'antd';
import { cloneDeep, find, reject, size } from 'lodash-es';
import { AddAnotherButton } from 'pages/Page1/common/AddAnotherButton';
import { DragIcon } from 'pages/Page1/common/DragIcon';
import { TextField } from 'pages/Page1/common/Field';
import { v4 as uuidv4 } from 'uuid';

import { moveArr } from 'utils/index';

import '../index.scss';
import './index.scss';

const defaultDropdownItems = [{ id: uuidv4() }, { id: uuidv4() }] as DropDownItem[];

interface DropDownItem {
  id: string;
  name?: string;
  value?: string;
}

export const CustomDropdown: FC = () => {
  const [dropdownItems, setDropdownItems] = useState<DropDownItem[]>(defaultDropdownItems);
  const [checked, setChecked] = useState<boolean>(true);
  const [dropdownTitle, setDropdownTitle] = useState<string>('');

  const addAnotherItem = (): void => {
    setDropdownItems([...dropdownItems, { id: uuidv4() }] as DropDownItem[]);
  };

  const handleTriggerFieldStatus = (checked: boolean): void => {
    setChecked(checked);
  };

  const handleSetDropdownTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;

    setDropdownTitle(val);
  };

  const handleSetDropDownItemName = (e: ChangeEvent<HTMLInputElement>, item: DropDownItem): void => {
    const val = e.target.value;
    const cDropdownItems = cloneDeep(dropdownItems);
    const selectedItem = find(cDropdownItems, { id: item.id }) || { name: '' };

    selectedItem.name = val;
    setDropdownItems(cDropdownItems);
  };

  const handleDeleteInput = (item: DropDownItem) => () => {
    if (size(dropdownItems) > 2) {
      const newDropdownItems = reject(dropdownItems, item);

      setDropdownItems(newDropdownItems);
    }
  };

  const handleSortChange = (evt: Event) => {
    // @ts-ignore
    const newDropdownItems = moveArr(cloneDeep(dropdownItems), evt.oldIndex, evt.newIndex);
    console.log('newDropdownItems =', newDropdownItems);
    // setDropdownItems(cDropdownItems);
  };

  const handleSubmit = (): void => {
    console.log(JSON.stringify(dropdownItems));
  };

  return (
    <div>
      <Row>
        <TextField label="Custom dropdown" onChange={handleSetDropdownTitle} value={dropdownTitle} />
        <Col flex={1} className="switch2">
          <p>Required</p>
          <Switch onChange={handleTriggerFieldStatus} checked={checked} />
        </Col>
      </Row>
      <div className="itemContainer">
        <h3>DropDown items</h3>
        <ReactSortable list={dropdownItems} setList={setDropdownItems} handle=".dragImage" onChange={handleSortChange}>
          {dropdownItems.map((item) => (
            <Row key={item.id} className="dropdown-item">
              <Col className="dropdown-item-col">
                <DragIcon />
              </Col>
              <Col>
                <Input
                  onChange={(e) => {
                    handleSetDropDownItemName(e, item);
                  }}
                />
              </Col>
              <Col>
                <Button onClick={handleDeleteInput(item)} className="button-delete">
                  <DeleteOutlined />
                </Button>
              </Col>
            </Row>
          ))}
        </ReactSortable>

        <AddAnotherButton onClick={addAnotherItem} type="item" />

        <Button onClick={handleSubmit}>submit</Button>
      </div>
    </div>
  );
};
