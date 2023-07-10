export interface SentenceBuilderProps {
    onWordAdd: (word: string) => void;
    onWordRemove: (index: number) => void;
    onClearSentence: () => void;
    onSubmitSentence: (sentence: string) => void;
    selectedWords: string[];
}

export interface Word {
    id: string;
    wordTypeId: string;
    name: string;
    description: string;
}

export interface WordType {
    id: string;
    name: string;
    description: string;
}

export interface Word {
    id: string;
    name: string;
}

export interface WordListProps {
    wordTypeId: string;
    onWordAdd: (word: string) => void;
}

export interface WordType {
    id: string;
    name: string;
}

export interface WordTypeSelectorProps {
    onWordTypeChange: (wordTypeId: string) => void;
}