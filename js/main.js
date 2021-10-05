/* Author: Yevhenii Madzhar */
/* Version: 1.0 */

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
let c2 = new Car("Audi S4", 5, 3, 8, 7, "AudiS4");
let c3 = new Car("Mclaren", 8, 5, 3, 5, "Mclaren");
let c4 = new Car("Prototype", 8, 6, 2, 5, "Prototype");
let c5 = new Car("BMW M3", 6, 4, 7, 8, "BMW");
let c6 = new Car("Mustang", 6, 5, 5, 7, "Mustang");
let c7 = new Car("Porsche 962", 7, 5, 3, 6, "Porsche962");
let c8 = new Car("Porsche 993", 6, 6, 4, 6, "Porsche993");

let allCars = {
    "1": c1,
    "2": c2,
    "3": c3,
    "4": c4,
    "5": c5,
    "6": c6,
    "7": c7,
    "8": c8,
};

function rand(min, max) {
    return Math.random() * (max - min) + min
};

function time(t) {
    let m = Math.floor(t % 3600 / 60);
    let s = Math.floor(t % 3600 % 60);
    return (('0' + m).slice(-2) + ":" + ('0' + s).slice(-2))
};

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
        //     }, 200);
        // }
        if (this.team.length == 4) {
            setTimeout(() => {
                game.init2()
            }, 1000);
        }
    },

    init1() {
        this.organizer("page2");
        // setTimeout(() => {
        //     alert("PLAYER 1 CHOSE YOUR CARS")
        // }, 200);

    },
    init2() {
        this.organizer("page3");

        let pre = document.getElementById("page3");
        pre.innerHTML = `
        <div class="preview">
        <h2>ROUND 1</h2><br>
            <div class="preround">
                <img class="preimg" src="img/${this.team[0].imn}.png" alt="${this.team[0].imn}">VS   
                <img class="preimg" src="img/${this.team[2].imn}.png" alt="${this.team[2].imn}">
            </div>
            <br>
        <h2>ROUND 2</h2><br>
            <div class="preround">
                <img class="preimg" src="img/${this.team[1].imn}.png" alt="${this.team[1].imn}">VS   
                <img class="preimg" src="img/${this.team[3].imn}.png" alt="${this.team[3].imn}">
            </div>
        </div>`

        setTimeout(() => {
            game.init3()
        }, 1000);
    },

    init3() {
        this.organizer("page4");
        // setTimeout(() => {
        //     alert("Click the wheel to start")
        // }, 200);

        let race = document.getElementById("page4");
        race.innerHTML = `
        <div class="racing">
            <div id="round1">
                <h2>ROUND 1</h2><br>
                <div class="race">
                    <img class="raceimg" src="img/${this.team[0].imn}.png" alt="${this.team[0].imn}">VS 
                    <img class="raceimg" src="img/${this.team[2].imn}.png" alt="${this.team[2].imn}">
                </div>
                <div class="pRacing">
                    <div class="plRace">
                        <p>${this.team[0].name}</p>
                        <table>
                            <tr>
                            <td>Lap1: <span id="lap0"></span></td>
                            <td>Lap2: <span id="lap1"></span></td>
                            <td>Lap3: <span id="lap2"></span></td>
                            <td>Lap4: <span id="lap3"></span></td>
                            <td>Lap5: <span id="lap4"></span></td>
                            </tr>
                        </table>
                    </div>
                    <div class="plRace">
                        <p>${this.team[2].name}</p>
                        <table>
                            <tr>
                            <td>Lap1: <span id="lap10"></span></td>
                            <td>Lap2: <span id="lap11"></span></td>
                            <td>Lap3: <span id="lap12"></span></td>
                            <td>Lap4: <span id="lap13"></span></td>
                            <td>Lap5: <span id="lap14"></span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>   
            <div id="round2">
            <h2>ROUND 2</h2><br>
                <div class="race">
                    <img class="raceimg" src="img/${this.team[1].imn}.png" alt="${this.team[1].imn}">VS 
                    <img class="raceimg" src="img/${this.team[3].imn}.png" alt="${this.team[3].imn}">
                </div>    
                <div class="pRacing">
                    <div class="plRace">
                        <p>${this.team[1].name}</p>
                        <table>
                            <tr>
                            <td>Lap1: <span id="lap5"></span></td>
                            <td>Lap2: <span id="lap6"></span></td>
                            <td>Lap3: <span id="lap7"></span></td>
                            <td>Lap4: <span id="lap8"></span></td>
                            <td>Lap5: <span id="lap9"></span></td>
                            </tr>
                        </table>
                    </div>
                    <div class="plRace">
                        <p>${this.team[3].name}</p>
                        <table>
                            <tr>
                            <td>Lap1: <span id="lap15"></span></td>
                            <td>Lap2: <span id="lap16"></span></td>
                            <td>Lap3: <span id="lap17"></span></td>
                            <td>Lap4: <span id="lap18"></span></td>
                            <td>Lap5: <span id="lap19"></span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>  
        </div>  
        <img id="wheel" src="img/wheel.png" alt="Wheel" onclick="game.raceLap()">     
        </div>`
    },

    init4() {
        this.organizer("page5");
    },

    init5() {
        location.reload(true);
    },

    organizer(pages) {
        let arrPages = ["page1", "page2", "page3", "page4", "page5"];

        arrPages = arrPages.filter(val => !pages.includes(val));

        document.getElementById(pages).style.display = "block";

        for (let ch of arrPages) {
            document.getElementById(ch).style.display = "none";
        }
    }, 
    // organizer(round) {
    //     let around = ["round1", "round2"];

    //     around = around.filter(val => !round.includes(val));

    //     document.getElementById(round).style.display = "block";

    //     for (let ch of around) {
    //         document.getElementById(ch).style.display = "none";
    //     }
    // }, 

    raceLap() {
        let lapResult = []
        let team1Res = []
        let team2Res = []
        let p1c1 = []
        let p1c2 = []
        let p2c1 = []
        let p2c2 = []

        for (let l = 0; l < 5; l++) {
            for (let c = 0; c <= 3; c++) {
                this.currentLap = 2000 * this.team[c].weight / (rand(5, this.team[c].maxSpeed) * rand(3, this.team[c].acceleration) * this.team[c].stability)
                lapResult.push(this.currentLap)
            }
        }

        for (let r1 = 0; r1 < 20; r1++) {
            // document.getElementById("lap" + r1).innerHTML = time(lapResult[r1]);

            if (r1 % 2 == 0) {
                team1Res.push(lapResult[r1])
            } else {
                team2Res.push(lapResult[r1])
            }
        }
        console.log(team1Res.reduce((a, b) => a + b))
        console.log(team2Res.reduce((a, b) => a + b))

        // console.log(lapResult)

        // console.log(team1Res)
        // console.log(team2Res)

        // console.log(p1c1)
        // console.log(p1c2)

        for (let p1car = 0; p1car < 10; p1car++) {
            if (p1car % 2 == 0) {
                p1c1.push(team1Res[p1car])
                for (let c1 = 0; c1 < 5; c1++) {
                    setTimeout(function() {
                        document.getElementById("lap" + c1).innerHTML = time(p1c1[c1]);
                    }, 500 * c1);
                }
            } else {
                setTimeout(() => {
                    p1c2.push(team1Res[p1car])
                    for (let c2 = 0; c2 < 5; c2++) {
                        setTimeout(function() {
                        document.getElementById("lap" + (c2 + 5)).innerHTML = time(p1c2[c2]);
                    }, 500 * c2);
                    } 
                }, 3000);
            }
        }

        console.log(p2c1)
        console.log(p2c2)
        
        for (let p2car = 0; p2car < 10; p2car++) {
            if (p2car % 2 == 0) {
                p2c1.push(team2Res[p2car])
                for (let c3 = 0; c3 < 5; c3++) {
                    setTimeout(function() {
                document.getElementById("lap" + (c3 + 10)).innerHTML = time(p2c1[c3]);
            }, 500 * c3);
                }
            } else {
                setTimeout(() => {
                    p2c2.push(team2Res[p2car])
                    for (let c4 = 0; c4 < 5; c4++) {
                        setTimeout(function() {
                        document.getElementById("lap" + (c4 + 15)).innerHTML = time(p2c2[c4]);
                    }, 500 * c4);
                    }
                }, 3000);

            }
        }

    //    for (let q = 0; q < 5; q++) {
    //         if (p1c1 < p2c1) {
    //             document.getElementsByTagName("span").style.color = 'red';
    //         } else {
                
    //         }           
    //    }



        // for (let c1 = 0; c1 <= 4; c1++) {
        //     document.getElementById("lap" + c1).innerHTML = time(lapResult[c1]);
        // }
        // for (let c2 = 5; c2 <= 9; c2++) {
        //     document.getElementById("lap" + c2).innerHTML = time(lapResult[c2]);
        // }
        // for (let c3 = 0; c3 <= 4; c3++) {
        //     document.getElementById("lap" + c3).innerHTML = time(lapResult[c3]);
        // }
        // for (let c4 = 5; c4 <= 9; c4++) {
        //     document.getElementById("lap" + c4).innerHTML = time(lapResult[c4]);
        // }

        if (p1c1.reduce((a, b) => a + b) < p2c1.reduce((a, b) => a + b)) {
            this.p1c1.style= "background-color: green";
        } else {
            this.p2c1.style= "background-color: green"
        }
        console.log(p1c1.reduce((a, b) => a + b))

        // let res = document.getElementById("page5");
    
        if (team1Res.reduce((a, b) => a + b) < team2Res.reduce((a, b) => a + b)) {
        res.innerHTML = `
        <div class="preview">
        <h2>PLAYER 1 WIN</h2><br>
        <div class="preround">
                <img class="preimg" src="img/${this.team[0].imn}.png" alt="${this.team[0].imn}">   
                <img class="preimg" src="img/${this.team[1].imn}.png" alt="${this.team[1].imn}">
            </div>
            <div class="restart">
            <button onclick="game.init5()">New Game</button>
        </div>
        </div>`

        } else {
        res.innerHTML = `
        <div class="preview">
        <h2>PLAYER 2 WIN</h2><br>
            <div class="preround">
                <img class="preimg" src="img/${this.team[2].imn}.png" alt="${this.team[2].imn}">   
                <img class="preimg" src="img/${this.team[3].imn}.png" alt="${this.team[3].imn}">
            </div>
            <div class="restart">
            <button onclick="game.init5()">New Game</button>
        </div>
        </div>`        }

        setTimeout(() => {
            game.init4()
        }, 10000);
    },
}