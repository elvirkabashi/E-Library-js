import {getBooks,composeBooks} from "./Books.js";


var tp = 1;
export function Pagination(div, totalPages = tp) {
    var currentPage = 1;
    updateBooks(currentPage);
    var prevActiveButton = null;
    div.innerHTML = `
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">

            ${generatePageButtons(totalPages)}
  
        </ul>
        </nav>
    `;
    
  const pageButtons = div.querySelectorAll(".page-item[data-page]");


  pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      var selectedPage = button.getAttribute("data-page");

      currentPage = parseInt(selectedPage);
      if (prevActiveButton) {
        prevActiveButton.classList.remove("active");
      }
      button.classList.add("active");
      prevActiveButton = button;
      
      updateBooks(currentPage);
      window.scrollTo(0, 0)
    });
  });
 }


    function generatePageButtons(totalPages) {
      let buttonsHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        
        buttonsHTML += `
          <li class="page-item " data-page="${i}">
            <a class="page-link">${i}</a>
          </li>
        `
      }
        return buttonsHTML
    }


    export function updateBooks(page) {
      getBooks()
        .then((data) => {
            document.querySelector("#books").innerHTML = composeBooks(data.results, page);
          }
        )
      }
        
    
      
    