//ToDo: Tie this script to a character controller and form. Need to have characters add themselves to the playerList when created. Ensure that gameManager has controll of the playerList. The gameManager should be in charge of adding and removing players from the game not the players themselves.

var playerList = [];

function Player(gender, name, nameSake, force, warBudget) {

    var getTitle = function (g, n, nS) {
        var title = '';
        if (g === 'M') {
            title = 'Sir ' + n + " " + nS;
        } else {
            title = 'Lady ' + n + " " + nS;
        }
        return title;
    };

    this.gender = gender;
    this.name = name;
    this.nameSake = nameSake;
    this.force = force || 200;
    this.warBudget = warBudget || 500;

    this.title = getTitle(gender, name, nameSake);
}

//this will need to be tied to a button after the character screen is filled out maybe with ng-click="addPlayer()"
function addPlayer() {
    var n = arguments.length;
    console.log(n);
    for (var i = 0; i < n; i++) {
        console.log(arguments[i]);
        playerList.push(arguments[i]);
    }
}

var jake = new Player('M', 'Jake', 'Knight of the Seven Swords, Slayer of Giliam the Cruel', 20, 300);

var caleb = new Player('M', 'Caleb', 'Conquerer of the Weroul Realm', 20, 300);

addPlayer(jake, caleb);

console.log("The Player List includes " + playerList[0] + " and " + playerList[1]);