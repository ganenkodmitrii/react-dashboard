import { Button as Btn } from '@ebs-integrator/react-ebs-ui';
import React from 'react';

interface StylesBtnProps {
  type: 'text' | 'primary' | 'fill' | 'ghost' | 'dark' | 'light';
  size: 'small' | 'medium' | 'large';
  className: string | undefined;
}
// "primary"
const Button: React.FC<StylesBtnProps> = ({ className, type, size }) => {
  const sayHay = () => {
    alert('coco');
  };

  return (
    <Btn onClick={sayHay} className={className} type={type} size={size}>
      click me
    </Btn>
  );
};
export default Button;
