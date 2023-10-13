

export function getBooks(){
    //const api = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8IcGquk46DfTlaBS4udykWMd8RY6ZWeN`
    //const api = `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyAyVaO9lPhDMy0IlKq42FE9f40Syfwoorw`
    const api = `https://gutendex.com/books/`
    return fetch(api)
    .then(response => response.json())
    .then(data => data)
}

export function composeBooks(books, currentPage) {
  const booksPerPage = 6;
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  
  if (Array.isArray(books) && books.length > 0) {
    const displayedBooks = books.slice(startIndex, endIndex);

    let html = `<div class="d-flex justify-content-center align-items-center row" id="books" style="max-width: 100%;">`;

    for (let book of displayedBooks) {
      const img = book.formats["image/jpeg"] === null ? ".././assets/img/no_book_cover.jpg" : book.formats["image/jpeg"];
      
      html += `
        <div class="card mb-3 d-flex justify-content-center align-items-center" style="max-width: 70%; height:220px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${img}" class="img-fluid rounded-start" alt="${book.title}" style="min-height:200px">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.subjects}</p>
                <button type="button" class="btn btn-outline-dark">View Details</button>
                <div class="d-flex flex-row-reverse">
                  <p class="card-text"><small class="text-body-secondary">Author: ${book.authors[0].name}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    return html;
  } else {
    return "No books available.";
  }
}

