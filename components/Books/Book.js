export function getBook(id){
    const api = `https://gutendex.com/books?ids=${id}`;
        return fetch(api)
        .then(response => response.json())
        .then(data => data.results[0])
    }