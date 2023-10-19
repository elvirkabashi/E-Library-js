

export function getBooks(){
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
      const name = (book.authors[0].name === null) ? 'No author' : book.authors[0].name;
      html += `
        
        <div class="card mb-3 d-flex justify-content-center align-items-center" style="max-width: 70%; height:220px">
          <div class="row g-0 d-flex ">
            <div class="col-md-4 d-flex align-items-center justify-content-start" >
              <img src="${img}" class="img-fluid rounded-start" alt="${book.title}" style="min-height:200px">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.subjects}</p>
                <a type="button" class="btn btn-outline-dark" href="./../book.html?id=${book.id}">View Details</a>
                <div class="d-flex flex-row-reverse">
                  <p class="card-text"><small class="text-body-secondary">Author: ${name}</small></p>
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

