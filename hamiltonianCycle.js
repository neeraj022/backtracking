function main() {
    // let graph = [
    // [0, 1, 0, 1, 0],  
    // [1, 0, 1, 1, 1],  
    // [0, 1, 0, 0, 1],  
    // [1, 1, 0, 0, 1],  
    // [0, 1, 1, 1, 0]
    // ];
    let graph = [
        [0, 1, 0, 1, 0],  
        [1, 0, 1, 1, 1],  
        [0, 1, 0, 0, 1],  
        [1, 1, 0, 0, 0],  
        [0, 1, 1, 0, 0]
        ]; 
    let solution = [];
    let visited = {};

    solution.push(0);
    visited[0] = true;
    let isSuccess = findCycle (graph, solution, visited, 0);

    console.log(isSuccess? "YES" : "NO");
    if (isSuccess) {
        console.log(solution.join(' '));
    }
}

function findCycle (graph, solution, visited, vertex) {
    if (solution.length === graph.length && graph[vertex][solution[0]]) {
        solution.push(solution[0]);
        return true;
    }

    for (let i=0; i<graph.length; i++) {
            if (isValidPath(vertex, i, graph, visited)) {
                solution.push(i);
                visited[i] = true;
                if(!findCycle(graph, solution, visited, i)) {
                    solution.pop();
                    delete visited[i];
                } else {
                    return true;
                }
            } 
    }
    return false;
}

function isValidPath (i, j, graph, visited) {
    return (graph[i][j] && !visited[j]);
}

main();