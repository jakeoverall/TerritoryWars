//var gameManager =
//{
//    players: [],
//    getPlayers: function(players) {
//        players.forEach(function(value) {
//            players.push(value);
//        });
//    },
//};


/*a very simple attack method will need refined and will need to know:
what the cost for invading a territory will be.
a defense system will be needed likely something similar to attack only with smaller margin for defeat 
Outcome system along the lines of victory = force > defense
then subtract from total force and warBudget based relatively to the margin of victory or defeat
*/
var attack = function (force) {
    var min = force - (force / 2);
    var max = force;
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
};