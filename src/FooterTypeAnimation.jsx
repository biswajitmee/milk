import { TypeAnimation } from 'react-type-animation';

const FooterTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We build animating website and ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We build Ecommerce  website  and ',
        1000,
        'We build Landing page  and ',
        1000,
        'We build  product launch page  and ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' , textAlign:"left",}}
      repeat={Infinity}
      deletionSpeed={90}
    />
  );
};

export default FooterTypeAnimation;