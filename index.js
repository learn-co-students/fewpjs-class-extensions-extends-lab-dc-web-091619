class Polygon {
  constructor(array) {
    this.side = array;
  }

  get countSides() {
    return this.side.length;
  }

  get perimeter() {
    return this.side.reduce((total, side) => total += side, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      const s1 = this.side[0];
      const s2 = this.side[1];
      const s3 = this.side[2];
      return ((s1+s2)>s3 && (s1+s3)>s2 && (s2+s3)>s1)
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      const s1 = this.side[0];
      const s2 = this.side[1];
      const s3 = this.side[2];
      const s4 = this.side[3];
      return (s1===s2 && s1===s3 && s1===s4)
    }
  }

  get area() {
    if (this.countSides === 4) {
      const s1 = this.side[0];
      return s1 * s1
    }
  }
}