// Your code here
class Polygon{
    constructor(arrayofSides){
        this.arrayofSides = arrayofSides;
    }

    get countSides(){
        return this.arrayofSides.length
    }

    get perimeter(){
        let total = 0;
        this.arrayofSides.forEach(function(side){
            total += side
        })
        return total;
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(!Array.isArray(this.arrayofSides)) return;
        if (this.arrayofSides.length !== 3) return;

        if (this.arrayofSides.length === 3){
            let side1 = this.arrayofSides[0]
            let side2 = this.arrayofSides[1]
            let side3 = this.arrayofSides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }
    }
}

class Square extends Polygon {
    get area(){
        return this.arrayofSides[0] * this.arrayofSides[1]
    }

    get isValid(){
        if(!Array.isArray(this.arrayofSides)) return;
        if (this.arrayofSides.length !== 4) return;

        if (this.arrayofSides.length === 4){
           return this.arrayofSides.every( (val, i, arr) => val === arr[0] )
        }
    }
}