import { Button as Btn } from 'ebs-design';
import React from 'react';

interface StylesBtnProps {
  type: 'text' | 'primary' | 'fill' | 'ghost' | 'dark' | 'light';
  size: 'small' | 'medium' | 'large';
  className?: string;
}
// "primary"
const Button: React.FC<StylesBtnProps> = ({ className, type, size }) => {
  return (
    <Btn className={className} type={type} size={size}>
      click me
    </Btn>
  );
};
export default Button;
