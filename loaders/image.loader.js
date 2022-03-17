import NextImage from 'next/image';

// opt-out of image optimization, no-op
const customLoader = ({ src }) => src;

export const Image = (props) => <NextImage {...props} loader={customLoader} />;
