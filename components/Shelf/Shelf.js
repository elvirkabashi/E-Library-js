export function Shelf(){
    const user_is_loggedin = localStorage.getItem('loggedin_user');
    //console.log(user_is_loggedin)
    if(user_is_loggedin == null) {
        window.location.href = 'http://127.0.0.1:5500/login.html';
    }


    const checkedout = (localStorage.getItem('checkedout') == null) ? [] : JSON.parse(localStorage.getItem('checkedout'))

    const us = checkedout.some(u => u.userEmail === user_is_loggedin)
    

    if(!us){
        return `<p>Your shelf is empty!</p>`
    }
    
    if(checkedout.length > 0){
        let html = `<div class="row m-5" id="shelf-item">
        
        `
        for(let book of checkedout){
            if(user_is_loggedin === book.userEmail){
                html += `
                <div class="col-3 d-flex justify-content-center text-center">
                    <div class="card mb-4 p-3 ">
                    <div class="d-flex flex-direction-column">
                        <img src="${book.img}" class="card-img-top" alt="${book.title}">
                        <div>`
                        
                        
                        let data_dhene = book.return_date;
                        let formatData = new Date(format(data_dhene));
                        
                        var dataAktuale = new Date();
                        var todayWithoutTime = new Date(dataAktuale.getFullYear(), dataAktuale.getMonth(), dataAktuale.getDate());
                        
                        var differenceInDays = Math.floor((formatData - todayWithoutTime) / (1000 * 60 * 60 * 24));
                        
                        function format(data_dhene) {
                            var dateComponents = data_dhene.split('/');
                        
                            var year = parseInt(dateComponents[2], 10);
                            var month = parseInt(dateComponents[0], 10) - 1;
                            var day = parseInt(dateComponents[1], 10);
                        
                            var formattedDate = new Date(year, month, day);
                        
                            return formattedDate;
                        }
                        
                        //console.log(todayWithoutTime)
                        //console.log(formatData)
                        
                        if (differenceInDays < 0) {
                            html += `<p class="text-danger">This book is <b>${-differenceInDays}</b> days late, it was returned on this date "${book.return_date}"!!!</p>`;
                        } else if (todayWithoutTime.getTime() === formatData.getTime()) {
                            html += `<p class="text-danger">The return date is today!!!</p>`;
                        } else{
                            html += `<p>Please return before the date: <b>${book.return_date}</b></p>`
                        }
                        
                        html += `</div>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <div class="d-flex justify-content-end align-items-end">
                               
                                <div>
                                    <a href="book.html?id=${book.bookId}" class="btn btn-sm btn-outline-secondary"><i class="bi bi-eye"></i></a>
                                    <button book-id="${book.bookId}" class="btn btn-sm btn-outline-danger btn-delete"><i class="bi bi-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
               
            }
        }
       html += `</div>`  
         //delete
        addDynamicEventListener(document.body, 'click', '.btn-delete', function (e) {
        const id = e.target.getAttribute('book-id')
        const check = checkedout.filter(b => b.bookId != id)
        localStorage.setItem('checkedout', JSON.stringify([...check]))
        window.location.href = 'http://127.0.0.1:5500/shelf.html'
    });
       return html; 
       
    }else{
       return `<p>Your shelf is empty!</p>`;
    }
       
 
 
       
}
