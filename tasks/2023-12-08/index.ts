export interface Letter {
    content: string;
    country: 'pl' | 'de' | 'us';
    priority: 'high' | 'medium' | 'low';
}

type Strategy = PriorityStrategy | CountryStrategy | LengthStrategy;

interface SortingStrategy {
    sortLetters: (letters: Letter[]) => Letter[];
}

export class LetterSorter {
    sorter: Strategy;

    constructor(sorter: Strategy) {
        this.sorter = sorter;
    }


    sortLetters(letters: Letter[]): Letter[] {
        return this.sorter.sortLetters(letters);
    }
}

export class PriorityStrategy implements SortingStrategy{

    sortLetters(letters: Letter[]): Letter[] {
        return letters.sort((a, b) => {
            return this.getPriorityNumber(a.priority) - this.getPriorityNumber(b.priority);
        });
    }

    private getPriorityNumber(priority: 'high' | 'medium' | 'low'): number {
        switch (priority) {
            case 'high':
                return 1;
            case 'medium':
                return 2;
            case 'low':
                return 3;
            default:
                return 0;
        }
    }
}

export class LengthStrategy implements SortingStrategy {

    sortLetters(letters: Letter[]): Letter[] {
        return letters.sort((a, b) => {
            return a.content.length - b.content.length;
        });
    }
}

export class CountryStrategy implements SortingStrategy {

    sortLetters(letters: Letter[]): Letter[] {
        return letters.sort((a, b) => {
            return this.getCountryNumber(a.country) - this.getCountryNumber(b.country);
        });
    }

    private getCountryNumber(country: 'pl' | 'de' | 'us'): number {
        switch (country) {
            case 'pl':
                return 1;
            case 'de':
                return 2;
            case 'us':
                return 3;
            default:
                return 0;
        }
    }
 }