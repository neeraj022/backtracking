function main (source, k) {
    let graph = {
        '0-1': 4,
        '0-7': 8,
        '1-2': 8,
        '1-7': 11,
        '2-3': 7,
        '2-8': 2,
        '2-5': 4,
        '3-4': 9,
        '3-5': 14,
        '4-5': 10,
        '5-6': 2,
        '6-7': 1,
        '6-8': 6,
        '7-8': 7
    }
    let vertexObj = {};
    for (let key of Object.keys(graph)) {
        let keyArr = key.split('-');
        vertexObj[keyArr[0]] = true;
        vertexObj[keyArr[1]] = true;
    }
    let solution = [];
    let visited = {};
    solution.push(source);
    visited[source] = true;
    let isSuccess = solve (source, k, graph, Object.keys(vertexObj), solution, 0, visited);
    console.log(isSuccess? "YES" : "NO");
    if (isSuccess) {
        console.log(solution.join(' --> '));
    }
}

function solve (source, k, graph, vertexArr, solution, pathlength, visited) {
    if (pathlength>k) {
        return true;
    }
    for (let i=0; i<vertexArr.length; i++) {
        if(isValid(vertexArr[i], source, graph, visited)) {
            solution.push(vertexArr[i]);
            visited[vertexArr[i]] = true;
            pathlength = pathlength + isConnected(vertexArr[i], source, graph);
            if (!solve(vertexArr[i], k, graph, vertexArr, solution, pathlength, visited)){
                solution.pop();
                delete visited[vertexArr[i]];
                pathlength = pathlength - isConnected(vertexArr[i], source, graph);
            } else {
                return true;
            }
        }
    }
    return false;
}

function isValid (futureVertex, presentVertex, graph, visited) {
    return (isConnected(futureVertex, presentVertex, graph) && !visited[futureVertex]);
}

function isConnected (futureVertex, presentVertex, graph) {
    return (graph[`${futureVertex}-${presentVertex}`] || graph[`${presentVertex}-${futureVertex}`]);
}

main(0, 60);