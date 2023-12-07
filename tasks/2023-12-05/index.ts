type Func = () => {};
type Event = {
    item: string,
    itemAction: Func;
}

export class ChristmasEmitter {
    events: Event[] = [];

    on(item: string, itemAction: Func) {
        this.events.push({ item: item, itemAction: itemAction });
    }

    emit(item: string): void {
        let itemIndex: number = -1;
        this.events.forEach((event: Event, index: number) => {
            if (event.item === item) {
                event.itemAction();
                itemIndex = index;
                return;
            }
        });

        this.events.splice(itemIndex, 1);
    }

    off(item: string, itemAction: Func): void {
        let itemIndex: number = -1;
        this.events.forEach((event: Event, index: number) => {
            if (event.item === item && event.itemAction === itemAction) {
                itemIndex = index;
                return;
            }
        });

        this.events.splice(itemIndex, 1);
    }


};