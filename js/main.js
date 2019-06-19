document.addEventListener('DOMContentLoaded', function() {

    class Player {
        constructor(player, marker) {
            this.player = player;
            this.marker = marker;
        }
    }

    p1 = new Player('p1', 'x');
    p2 = new Player('p2', 'o');

    var player = p1;

    const boxes = document.querySelectorAll('.box');

    const grid = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    b1 = document.querySelector('#one');
    b2 = document.querySelector('#two');
    b3 = document.querySelector('#three');
    b4 = document.querySelector('#four');
    b5 = document.querySelector('#five');
    b6 = document.querySelector('#six');
    b7 = document.querySelector('#seven');
    b8 = document.querySelector('#eight');
    b9 = document.querySelector('#nine');

    b1.position = [0,0];
    b2.position = [1,0];
    b3.position = [2,0];
    b4.position = [0,1];
    b5.position = [1,1];
    b6.position = [2,1];
    b7.position = [0,2];
    b8.position = [1,2];
    b9.position = [2,2];

    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            if (box.innerText == '') {
                const x = box.position[0];
                const y = box.position[1];
                if (player == p1) {
                    box.innerText = p1.marker;
                    box.classList.add(p1.marker);           
                    grid[x][y] = p1.marker;
                    player = p2;
                    playerWon(p1.marker);
                } else if (player == p2) {
                    box.innerText = p2.marker;
                    box.classList.add(p2.marker);
                    grid[x][y] = p2.marker;
                    player = p1;
                    playerWon(p2.marker);
                }
            }
        });
    });

    function playerWon(marker) {


        // Check rows first.
        for (let y = 0; y < 3; y++) { // Iterate through the rows.
            let win = true;
            for (let x = 0; x < 3; x++) { // Iterate through the cols.
                if (grid[x][y] !== marker) {
                    win = false;
                    break;
                }
            }
            if (win) {
                alert(marker + ' wins');
                return;
            }
        }

        // Check cols second.
        for (let x = 0; x < 3; x++) {
            let win = true;
            for (let y = 0; y < 3; y++) {
                if (grid[x][y] !== marker) {
                    win = false;
                    break;
                }
            }
            if (win) {
                alert(marker + ' wins');
                return;
            }
        }

        // Check diagonals third.        
        if (grid[1][1] !== '') {
            if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
                alert(marker + ' wins');
                return;
            }

            if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) {
                alert(marker + ' wins');
                return;
            }
        }



        // if (b1.classList.contains(marker) && b2.classList.contains(marker) && b3.classList.contains(marker)) {
        //     alert('winner');
        // } else if (b4.classList.contains(marker) == b5.classList.contains(marker) && b5.classList.contains(marker) == b6.classList.contains(marker)) {
        //     alert('winner');
        // } else if (b7.classList.contains(marker) == b8.classList.contains(marker) && b8.classList.contains(marker) == b9.classList.contains(marker)) {
        //     alert('winner');
        // } else {
        //     pass
    }

});
