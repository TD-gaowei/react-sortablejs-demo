import type { FC } from 'react';
import React from 'react';
import { Image } from 'antd';
import svgImage from 'assets/icons/order-list.png';

export const DragIcon: FC = () => <Image src={svgImage} width={20} alt="image" preview={false} className="dragImage" />;
