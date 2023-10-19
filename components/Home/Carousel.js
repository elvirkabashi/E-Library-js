export function Carousel(books){

    console.log(books)
    //console.log(books.slice(3,6))
    
    let html = `  <div class='container mt-5' style="height: 550px">
    <div class='homepage-carousel-title'>
        <h3>Find your next "I stayed up too late reading" book.</h3>    
    </div>
    <div id='carouselExampleControls' class='carousel carousel-dark slide mt-5 
        d-none d-lg-block' data-bs-interval='false'>

        <div class='carousel-inner'>
            <div class='carousel-item active'>
                <div class='row d-flex justify-content-center align-items-center'>`

            books.slice(0,3).map(book => 
                html += `<div class='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
                <div class='text-center'>
                     <img src=${book.formats["image/jpeg"]} width='151' height='233' alt="book"  />
                     <h6 class='mt-2'>${book.title}</h6>
                     <p>${book.authors[0].name}</p>
                     <a class='btn main-color text-white' href="./../book.html?id=${book.id}">Reserve</a>
                </div>
              </div>`
            )

      html += `</div>
      </div>
      <div class='carousel-item'>
          <div class='row d-flex justify-content-center align-items-center'>`

        books.slice(3,6).map(book => 
            html += `<div class='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div class='text-center'>
                 <img src=${book.formats["image/jpeg"]} width='151' height='233' alt="book"  />
                 <h6 class='mt-2'>${book.title}</h6>
                 <p>${book.authors[0].name}</p>
                 <a class='btn main-color text-white' href="">Reserve</a>
            </div>
          </div>`
        )

        html += `</div>
        </div>

        <button class='carousel-control-prev' type='button'
            data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
        </button>
        <button class='carousel-control-next' type='button'
            data-bs-target='#carouselExampleControls' data-bs-slide='next'>
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
        </button>
    </div>
</div>
<div class='homepage-carousel-title mt-3'>
<a class='btn btn-outline-secondary btn-lg' href="./../books.html">View More</a>
</div>
</div>  `

return html;
}