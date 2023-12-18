export function findCyclesBetweenLocations(graph: Record<string, string[]>): string[][] {
    let result: string[][] = [];

    let startPlace = Object.keys(graph)[0];
    let cycle: string[] = [];
    if (graph[startPlace].length > 0) {
        cycle = [startPlace, ...goInside(graph, startPlace, startPlace)]
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

function goInside(graph: Record<string, string[]>, startPlace: string, globalStartPlace: string) {
    let cycle: string[] = [];
    graph[startPlace].forEach((place) => {
        if(!graph[place]){
            throw new Error('Invalid graph: missing nodes')
        }
        if (graph[place].length !== 0 && place !== globalStartPlace) {
            cycle.push(place);
        }
        if (place === globalStartPlace) {
            cycle.push(place);
        } else {
            // if (insideResult.length > 0) {
            cycle.push(...goInside(graph, place, globalStartPlace))
            // }
        }
    })

    return cycle;
}