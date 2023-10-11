const black:string = '██';
const white:string = '  ';

for (let i:number = 0; i < 8; i++){
    let board:string = '';

    for (let j:number = 0; j < 8; j++){
        if ((j + i) % 2 === 0) {
            board = board + black;
        } else {
            board = board + white;
        }
    }
    console.log(board);
}
