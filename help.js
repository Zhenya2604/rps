function createMatrix(length){
    let matrix = [];
    for (let i = 0; i < length; i++){
        matrix[i] = [];
    }

    return matrix;
}

class Help{
    constructor(moves){
        this.moves = moves;
    }

    generateTable(){
        this.length = this.moves.length + 1;
        this.half = (this.moves.length - 1) / 2;
        this.table = createMatrix(this.length);
        for (let i = 0; i < this.length; i++){
            for (let j = 0; j < this.length; j++) {
            if (i == 0 && j == 0){
                this.table[i][j] = 'Moves';
                continue;
            } else
            if (i == 0 && j != 0){
                this.table[i][j] = this.moves[j - 1];
                continue; 
            } else
            if (j == 0 && i != 0){
                this.table[i][j] = this.moves[i - 1];
                continue; 
            } else
            if (i == j){
                this.table[i][j] = 'Draw';
                this.temp = 0;
                for (let n = i - 1; n > 0; n--){
                    this.table[n][j] = 'Win';
                    this.temp++;
                    if (this.temp > this.half) {
                        this.table[n][j] = 'Lose';
                    }
                }
                this.temp = 0;
                for (let x = i + 1; x < this.length; x++){
                    this.table[x][j] = 'Lose';
                    this.temp++;
                    if (this.temp > this.half) {
                        this.table[x][j] = 'Win';
                    }
                }
                this.temp = 0;
            } 
            }
        }
        console.table(this.table);
    }
}
module.exports = Help; 