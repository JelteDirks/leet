function wordPattern(pattern: string, s: string): boolean {
    let lr = new Map();
    let rl = new Map();

    let words = s.split(" ");

    for (let i = 0 ; i < pattern.length ; ++i) {
        let char = pattern[i];
        let word = words[i];

        let word_record = lr.get(char);
        let char_record = rl.get(word);

        if (word_record !== undefined) {
            if (word_record !== word) {
                return false;
            }
            continue;
        }

        if (char_record !== undefined) {
            return false;
        }

        lr.set(char, word);
        rl.set(word, char);
    }

    return words.length === pattern.length;
};
