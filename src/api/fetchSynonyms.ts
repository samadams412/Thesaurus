const url = `https://api.datamuse.com`

export const fetchSynonyms = (word: string) => {
    return fetch(`${url}/words?rel_syn=${word}`)
        .then((res) => res.json())
}

