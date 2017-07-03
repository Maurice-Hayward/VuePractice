new Vue({
    el: "#app",
    data: {
        battlers: ["you", "Monster"],
        startedGame: false,
        you: {
            health: 100
        },
        monster: {
            health: 100
        },
        turns: []
    },
    methods: {
        startGame: function() {
            let vm = this;
            vm.turns = [];
            vm.startedGame = true;
            vm.you.health = 100;
            vm.monster.health = 100;
        },
        giveUp: function() {
            let vm = this;
            alert("Run! Run for your Life!!");
            vm.startedGame = false;
        },
        randomNum: function(a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a);
        },
        attack: function(min = 5, max = 10) {
            let vm = this;
            let yourAttack = vm.randomNum(min, max);
            let monsterAttack = vm.randomNum(5, 15);

            vm.monster.health -= yourAttack;
            vm.you.health -= monsterAttack;

            vm.turns.push({ points: yourAttack, type: "HITS" });
            vm.turns.push({ points: monsterAttack, type: "HITS" });

            vm.checkWin();
        },
        heal: function() {
            let vm = this;
            let heal = vm.randomNum(1, 20);
            let monsterAttack = vm.randomNum(5, 15);

            vm.you.health -= monsterAttack;
            vm.you.health += heal;

            vm.turns.push({ points: heal, type: "HEALS" });
            vm.turns.push({ points: monsterAttack, type: "HITS" });

            vm.checkWin();
        },
        checkWin: function() {
            let vm = this;

            if (vm.you.health < 0 && vm.monster.health < 0) {
                alert("You Both Kill Each Other!! How Poetic!");
                vm.startedGame = false;
            }
            if (vm.you.health < 0) {
                alert("You Got Deafeated!!");
                vm.startedGame = false;
                return;
            }

            if (vm.monster.health < 0) {
                alert("You Won!!");
                vm.startedGame = false;
                return;
            }
        }
    }
});
