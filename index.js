class Polygon {
  constructor(array){
    if ( array.every( el => typeof el === "number" ) ){
      this._sidesArray = array
    } else {
      throw new Error("You can only supply numbers")
    }
  }

  get countSides(){
    return this._sidesArray.length
  }

  get perimeter(){
    return this._sidesArray.reduce( (accum, side) => accum + side, 0 )
  }
}

class Triangle extends Polygon {
  get isValid(){
    const checkSideNumber = () => { return this._sidesArray.length === 3 }
    
    const checkSideLength = () => {
      const [s1, s2, s3] = this._sidesArray
      debugger
      return ( 
        s1 + s2 > s3 && 
        s2 + s3 > s1 && 
        s1 + s3 > s2  
        ) ? true : false
    }

    return ( checkSideNumber() && checkSideLength() ) ? true : false
  }
}

class Square extends Polygon {
  get isValid(){
    const checkSideNumber = () => { return this._sidesArray.length === 4 }

    const checkSideLength = () => { 
      return this._sidesArray.every( side => side === this._sidesArray[0] ) 
    }
    
    return ( checkSideNumber() && checkSideLength() ) ? true : false
  }

  get area(){
    const side = this._sidesArray[0];

    return ( this.isValid ) ? ( side * side ) : "This is not a square"
  }
}