class Car{
    #brand;
    #model;
    speed= 0;

    constructor(carDetails){
        this.#brand= carDetails.brand;
        this.#model= carDetails.model;
    }
    
    displayInfo(){
        return console.log(`${this.#brand} ${this.#model} Speed: ${this.speed} km/h 
         is truck open: ${this.isTruckOpen}   ` );
    }

    go(){
        if(this.speed<200 && this.isTruckOpen=== false){
            this.speed+=5
        }else{
            return console.log('the speed cant go higher than 200');
        }

    }

    brake(){
        if(this.speed>0){
            this.speed-=5
        }else{
            return console.log('the speed cannot lower than 0');
        }
    }

    isTruckOpen= false;

    openTruck(){
        if(this.speed===0){
            this.isTruckOpen=true;
        }
    }

    closeTruck(){
        this.isTruckOpen= false;
    }
}


const car1= new Car({brand:'Toyota', model:'Corolla'});

const car2 = new Car({brand:'Tesla', model:'Model 3'});

car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car2.brake();
car1.brake();

car2.openTruck();
car1.openTruck();



car1.displayInfo();
car2.displayInfo();

console.log(car1);
console.log(car2);


class RaceCar extends Car{
    acceleration=0;
    
    constructor(carDetails){
        super(carDetails);
        this.acceleration=carDetails.acceleration;
    }


 go(){
        if(this.speed<300){
            this.speed+=this.acceleration;
        }else{
            return console.log('the speed cant go higher than 200');
        }

    }



     


}


const raceCar1= new RaceCar({brand:'Mclaren', model:'F1', acceleration: 20});


raceCar1.go();
raceCar1.go();
raceCar1.displayInfo();
console.log(raceCar1);