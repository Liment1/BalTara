const images = require.context('../photos', true);
const imageList = images.keys().map(image => images(image));

export default imageList;