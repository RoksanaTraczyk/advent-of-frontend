export class ChristmasQueue<T>{
    letters: ILetter[];

    constructor() {
        this.letters = new Array<ILetter>;
    }

    enqueue(name: string | object, priority: number) {
        this.letters.push({ name: name, priority: priority })
    }

    dequeue(): string | undefined | object {
        if (this.isEmpty()) {
            throw Error('There are no letters in the queue!');
        }

        this.sort();
        let dequedItem = this.letters.slice(0)[0];
        this.letters = this.letters.splice(1);

        return dequedItem.name
    }

    isEmpty(): boolean {
        return this.letters.length === 0;
    }

    private sort() {
        this.letters = this.letters.sort((a: ILetter, b: ILetter) => {
            if (a.priority > b.priority) {
                return -1;
            }
            if (a.priority < b.priority) {
                return 1;
            }
            return 0;
        });
    }

}

interface ILetter {
    name: string | object;
    priority: number;
}