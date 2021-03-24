import React from 'react';
import { ebsImage } from '../../resources/index';


import { Icon } from '@ebs-integrator/react-ebs-ui';


const Overlay = () => {
    return (
        <div className="overlay">
            <Icon className="hero" component={ebsImage} />
        </div>
    );
};
export default Overlay;
