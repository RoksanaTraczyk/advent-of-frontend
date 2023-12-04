export interface Lokalizacja {
    x: number,
    y: number,
    z: number,
    czas: number
}

export type MapaCzasoprzestrzenna = (...args: number[]) => number;

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
    if (lokalizacje.length === 0) {
        return null;
    }

    const result = lokalizacje
        .filter(lok => !isNaN(mapa(lok.x, lok.y, lok.z, lok.czas)))
        .sort((a, b) => mapa(b.x, b.y, b.z, b.czas) - mapa(a.x, a.y, a.z, a.czas));

    return result.length === 0 ? null : result[0];
}