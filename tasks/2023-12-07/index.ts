type Letter = { [key: string]: number };
type ChangeTracker = (key: string, value: number) => void;

export function createTrackedLetter(letter: Letter, changeTracker: ChangeTracker): Letter {
    
    return new Proxy(letter, {
        set: (letter: Letter, itemName: string, value: number) => {
            changeTracker(itemName, value);
            return true;
        }
    })
}