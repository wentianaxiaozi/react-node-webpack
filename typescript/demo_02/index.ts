interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
	let newSquare = {color: "white", area: 100}   
	if(config.color) {
		newSquare.color = config.color
	}
	return newSquare
}		

let res = createSquare({color: "black"});
console.log(res);
