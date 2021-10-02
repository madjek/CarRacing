
class Car {
    constructor(name, maxSpeed, acceleration, stability, weight, imn) {
        this.name = name,
        this.maxSpeed = maxSpeed,
        this.acceleration = acceleration,
        this.stability = stability,
        this.weight = weight,
        this.imn = imn
    }
}

let c1 = new Car("Aston Martin", 7, 5, 4, 6, "AstonMartin");
let c2 = new Car("Audi S4", 5, 3, 8, 6, "AudiS4");
let c3 = new Car("Mclaren", 8, 5, 3, 6, "Mclaren");
let c4 = new Car("Prototype", 8, 6, 2, 5, "Prototype");
let c5 = new Car("BMW M3", 6, 4, 7, 7, "BMW");
let c6 = new Car("Mustang", 6, 4, 6, 6, "Mustang");
let c7 = new Car("Porsche 962", 7, 5, 3, 5, "Porsche962");
let c8 = new Car("Porsche 993", 6, 6, 4, 5, "Porsche993");

let allCars = {
    "1": c1,
    "2": c2,
    "3": c3,
    "4": c4,
    "5": c5,
    "6": c6,
    "7": c7,
    "8": c8,
}

let game = {
    team: [],

    choose1(idCar) {
        this.team.push(allCars[idCar]);

        if (this.team.length < 5) {
            document.getElementById(idCar).className = "graySelected";
            document.getElementById(idCar).onclick = "";

        }

            for (let x = 0; x < this.team.length; x++) {
            this.carInfo = document.getElementById("psel" + x);
            this.carInfo.innerHTML = `${this.team[x].name} <br><br>Max Speed: ${this.team[x].maxSpeed}<br><br>Acceleration: ${this.team[x].acceleration}<br><br>Stability: ${this.team[x].stability}<br><br>`;
        }

        if (this.team.length <= 2) {
            document.getElementById("pl1").style.color = 'red';
        } else {
            document.getElementById("pl1").style.color = 'black';
            document.getElementById("pl2").style.color = 'red';
        }

        // if (this.team.length == 2) {
        //     setTimeout(() => {
        //         alert("PLAYER 2 CHOSE YOUR CARS")
        //     }, 300);
        // }
        if (this.team.length == 4) {
            setTimeout(() => {
                game.init2()    
            }, 0);
        }
    },

    init1() {
        this.organizer("page2");
        // setTimeout(() => {
        //     alert("PLAYER 1 CHOSE YOUR CARS")
        // }, 300);

    },
    init2() {
        this.organizer("page3");

        let pre = document.getElementById("page3");
        pre.innerHTML = `
        <div class="preview">
        <h2>ROUND 1</h2><br>
            <div class="preround">
                <img class="preimg" src="/img/${this.team[0].imn}.png" alt="${this.team[0].imn}">VS   
                <img class="preimg" src="/img/${this.team[2].imn}.png" alt="${this.team[2].imn}">
            </div>
            <br>
        <h2>ROUND 2</h2><br>
            <div class="preround">
                <img class="preimg" src="/img/${this.team[1].imn}.png" alt="${this.team[1].imn}">VS   
                <img class="preimg" src="/img/${this.team[3].imn}.png" alt="${this.team[3].imn}">
            </div>
        </div>`

        setTimeout(() => {
            game.init3()
        }, 1000);

    },

    init3() {
        this.organizer("page4");



    },

    organizer(pages) {

        let arrPages = ["page1", "page2", "page3", "page4", "page5"];
    
        arrPages = arrPages.filter(val => !pages.includes(val));
    
        document.getElementById(pages).style.display = "block";
    
        for (let ch of arrPages) {
            document.getElementById(ch).style.display = "none";
        }
    }
}