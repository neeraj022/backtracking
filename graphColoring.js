function main (m) {
    let graph = [
        [0, 1, 1, 0, 1, 0], 
        [1, 0, 0, 0, 0, 1], 
        [1, 0, 0, 1, 0, 1], 
        [0, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, 0]
    ];

    let solution = Array(graph.length).fill(-1);
    let isSuccess = colorGraph(graph, solution, m);
    console.log(isSuccess? 'YES': 'NO');
    console.log(solution.join(' '));
}

function colorGraph (graph, solution, availableColors) {
    console.log(solution.join(' '));
    if (!solution.includes(-1)) {
        return true;
    }

    for (let i=1;i<=availableColors;i++) {
        for (let j=0;j<graph.length;j++) {
            if (isValidColoring(i, j, solution, graph) && solution[j]===-1) {
                solution[j] = i;
                if (colorGraph(graph, solution, availableColors)) {
                    return true;
                } else {
                    solution[j]=-1;
                }
            }
        }
    }

    return false;
}

function isValidColoring (color, vertice, solution, graph) {
    for (let i=0; i<graph[vertice].length;i++) {
        if (graph[vertice][i]===1 && solution[i]===color) {
            //its connected and its same color
            return false;
        }
    }
    return true;
}


main (2);