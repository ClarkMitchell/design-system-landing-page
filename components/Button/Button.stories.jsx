import React from 'react';
import Button from './Button';

const story = {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => <Button label="Button" primary></Button>;
export const Secondary = () => <Button label="Button"></Button>;
export const Large = () => <Button label="Button" size="large"></Button>;
export const Small = () => <Button label="Button" size="small"></Button>;

export default story;