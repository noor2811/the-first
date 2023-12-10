class Uber{
    constructor(distance)
    {
        this.distance= distance;
    }
    price()
    {
        const amt= this.distance *20;
        return amt;
    }
}
let rate = new Uber(30);
console.log("Total Distance :",rate.distance);
console.log(`Total amount: ${rate.price()}`);
