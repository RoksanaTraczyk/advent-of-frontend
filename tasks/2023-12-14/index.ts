// Tutaj skopiuj kod zadania
export type Gift = {
    value: number;
    weight: number;
    volume: number;
};

export function calculateMaxGiftValue(gifts: Gift[], maxWeight: number, maxVolume: number): number {
    const sortedGifts = gifts.sort((a, b) => b.value - a.value)
        .filter(gift => gift.weight <= maxWeight && gift.volume <= maxVolume);

    let value = 0;
    let currentWeight = 0;
    let currentVolume = 0;

    sortedGifts.forEach(gift => {
        if (gift.volume + currentVolume <= maxVolume && gift.weight + currentWeight <= maxWeight) {
            currentWeight += gift.weight;
            currentVolume += gift.volume;
            value += gift.value;
        }
    })

    return value
}