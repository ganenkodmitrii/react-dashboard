import { ebsImage } from 'resources';

import { Icon } from 'ebs-design';

const Overlay = () => {
  return (
    <div className="overlay">
      <Icon className="hero" component={ebsImage} />
    </div>
  );
};
export default Overlay;
