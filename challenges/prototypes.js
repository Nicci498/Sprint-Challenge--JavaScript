/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker(props) {
  this.length = props.length;
  this.width = props.width;
  this.height = props.height;
};

CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function() {
  return  2 *((this.length * this.width) + (this.length * this.height) + (this.height * this.width));
  
};

const cuboid = new CuboidMaker({length:4, width:5, height:5});





// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


