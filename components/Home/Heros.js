export function Heros(){
    const user_is_loggedin = localStorage.getItem('loggedin_user');

    let html = `
    <div>
    <div class='d-none d-lg-block'>
        <div class='row g-0 mt-5'>
            <div class='col-sm-6 col-md-6' >
            <div class='col-image-left'></div>
        </div>
        <div class='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
            <div class='ml-2'>`
            if(user_is_loggedin == null){
                html +=`
                <h1>What have you been reading?</h1>
                <p class='lead'>
                    The library team would love to know what you have been reading.
                    Whether it is to learn a skill or grow within one,
                    we will be able to provide the top content for you!
                </p>
                    <a class='btn main-color btn-lg text-white' href="">Sign up</a>`
            }else{
                html +=`
                <h1>What have you been reading?</h1>
                <p class='lead'>
                    The library team would love to know what you have been reading.
                    Whether it is to learn a skill or grow within one,
                    we will be able to provide the top content for you!
                </p>
                    <a class='btn main-color btn-lg text-white' href="books.html">Explore top books</a>`              
            }
                    
                    html+=`
            </div>
        </div>
    </div>
    <div class='row g-0'>
        <div class='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
            <div class='ml-2'>
                <h1>Our collection is always changing!</h1>
                <p class='lead'>
                    Try to check in daily as our collection is always changing!
                    We work nonstop to provide the most accurate book selection possible
                    for our Luv 2 Read students! We are dilligient about our book selection  and our books are always going 
                    to be our top priority.
                </p>
            </div>
        </div>
        <div class='col-sm-6 col-md-6'>
            <div class='col-image-right'></div>
        </div>
    </div>
</div>
</div>
    `
    return html
}