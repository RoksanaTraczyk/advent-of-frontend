export class GiftRegistry {
    private childrenGifts = new Map<number, string[]>();

    addGift(childId: number, gift: string): void {
        if (this.childrenGifts.get(childId)) {
            this.childrenGifts.get(childId)!.push(gift);
        } else {
            this.childrenGifts.set(childId, [gift]);
        }
    }

    removeGift(childId: number, gift: string): void {
        let childGifts = this.childrenGifts.get(childId);
        let giftIndex = childGifts!.findIndex(e => e === gift);
        if (giftIndex === -1) {
            throw Error("Gift not found"); 
        } 
        this.childrenGifts.set(childId, childGifts!.filter(e => e !== gift));
    }

    getGiftsForChild(childId: number): string[] {
        return this.childrenGifts.get(childId)!;
    }

}