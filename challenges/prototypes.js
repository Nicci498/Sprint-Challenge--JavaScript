/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker(attrs) {
  this.length = attrs.length;
  this.width = attrs.width;
  this.height = attrs.height;
  
}

CuboidMaker.prototype.volume = function() {
  const volume = this.length * this.width * this.height;
  return volume;
};

CuboidMaker.prototype.surfaceArea = function() {
  const surfaceArea = (this.length * this.width) + (this.length * this.height) + (this.height * this.width);
  return surfaceArea;
};


const cuboid = new CuboidMaker(4, 5, 5);





// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


