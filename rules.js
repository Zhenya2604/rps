function checkPreviousHalf(moves, userIndex, computerIndex, half) {
    for (let i = userIndex - 1; i >= userIndex - half; i--){
        if (moves[i] == moves[computerIndex]) return 'You win!';
    }
    return 'You lose!';
}

function checkNextHalf(moves, userIndex, computerIndex, half) {
    for (let i = userIndex + 1; i <= userIndex + half; i++){
        if (moves[i] == moves[computerIndex]) return 'You lose!';
    }
    return 'You win!';
}

function checkWinner(moves, userIndex, computerIndex){
    let half = (moves.length - 1) / 2;
    if (moves[userIndex] == moves[computerIndex]) return 'Draw!';
    if (userIndex + half > moves.length - 1){
        return checkPreviousHalf(moves, userIndex, computerIndex, half);
    } else {
        return checkNextHalf(moves, userIndex, computerIndex, half);
    }
}

class Rules{
    constructor(moves){
        this.moves = moves;
    }

    determineTheWinner(userMoveIndex, computerMoveIndex){
        return checkWinner(this.moves, userMoveIndex, computerMoveIndex);
    }
}
module.exports = Rules;