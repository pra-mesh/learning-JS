// Create a nod module for calculating the area of cuboid
//Import it to index.js and use it.

const volume = ({ length = 0, breadth = 0, height = 0 }) =>
  length * breadth * height;
module.exports = { volume };
