const directions = [ [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1] ];

class Node {
    constructor(row, col, numberOfMoves) {
        this.row = row;
        this.col = col;
        this.numberOfMoves = numberOfMoves;
    }

    getPositionString() {
        return `${this.row}, ${this.col}`;
    }
}


const getChildren = (row, col) => {
    const children = [];

    for (const direction of directions) {
        const [rowChange, colChange] = direction;

        const childrenRow = row + rowChange;
        const childrenCol = col + colChange;

        children.push([childrenRow, childrenCol]);
    }
    return children;
};


function getKnightShortestPath(targetRow, targetCol) {
    const queue = [];
    const startNode = new Node(0, 0, 0);

    queue.push(startNode);

    const visited = new Set();

    while (queue.length) {
        // Remove node
        const node = queue.shift();
        const { row, col, numberOfMoves } = node;

        // Process node
        if (row === targetRow && col === targetCol) return numberOfMoves;
        visited.add(node.getPositionString());

        // Add neighbor (children)
        for (const children of getChildren(row, col)) {
            const [childrenRow, childrenCol] = children;
            const childrenNode = new Node(childrenRow, childrenCol, numberOfMoves + 1);

            if (visited.has(childrenNode.getPositionString())) continue;
            
            queue.push(childrenNode);
        }
    }
}

// console.log(getKnightShortestPath(2, 1));

// const test = new Node(0, 1, 0);
// const { row, col, numberOfMoves } = test;

// console.log(test.col);

// const myMap = new Map();

// myMap.set(1, "value1");
// myMap.set("key2", "value2");
// myMap.set(true, "oui");

// console.log(myMap);