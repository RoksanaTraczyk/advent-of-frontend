export function findCyclesBetweenLocations(graph: Record<string, string[]>): string[][] {
    let result: string[][] = [];

    let startPlace = Object.keys(graph)[0];
    let cycle: string[] = [];
    if (graph[startPlace].length > 0) {
        cycle.push(startPlace);
        cycle = [...cycle, ...goInside(graph, startPlace)]
    }

    let buffor: string[] = [];
    cycle.forEach((place) => {
        buffor.push(place);
        if (place === startPlace && buffor.length > 1) {
            result.push(buffor);
            buffor = [];
            buffor.push(startPlace);
        }
    })

    return result;
}

function goInside(graph: Record<string, string[]>, startPlace: string) {
    let cycle: string[] = [];
    graph[startPlace].forEach((place) => {
        if(!graph[place]){
            throw new Error('Invalid graph: missing nodes')
        }
        if (graph[place].length !== 0 && place !== 'North Pole') {
            cycle.push(place);
        }
        if (place === 'North Pole') {
            cycle.push(place);
        } else {
            if (goInside(graph, place).length > 0) {
                cycle = [...cycle, ...goInside(graph, place)]
            }
        }
    })

    return cycle;
}