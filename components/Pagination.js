import {getBooks,composeBooks} from "./Books.js";


var tp = 1;
export function Pagination(div, totalPages = tp) {
    var currentPage = 1;
    div.innerHTML = `
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            
            ${generatePageButtons(totalPages,currentPage)}
            
        </ul>
        </nav>
    `;
    
    const pageButtons = div.querySelectorAll(".page-item[data-page]");

    pageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        var selectedPage = button.getAttribute("data-page");
    
        currentPage = parseInt(selectedPage);
        updateBooks(currentPage);
      });
    });
 }


    function generatePageButtons(totalPages,currentPage) {
      let buttonsHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        
        let active = (i === currentPage) ? 'active' : '';
        buttonsHTML += `
          <li class="page-item ${active}" data-page="${i}">
            <a class="page-link">${i}</a>
          </li>
        `
      }
        return buttonsHTML
    }


    export function updateBooks(page = 1) {
      getBooks()
        .then((data) => {
            document.querySelector("#books").innerHTML = composeBooks(data.results, page);
          }
        )
      }
        
    
      
    // const previousPageButton = div.querySelector("#previousPage");
    // const nextPageButton = div.querySelector("#nextPage");

     
     
    
    // previousPageButton.addEventListener("click", () => {
    //   if (currentPage > 1) {
    //     currentPage--;
    //     updateBooks(currentPage);
    //   }
    // });

    // nextPageButton.addEventListener("click", () => {
    //   if (currentPage < totalPages) {
    //     currentPage++;
    //     console.log(currentPage);
    //     updateBooks(currentPage);
    //   }
    // });