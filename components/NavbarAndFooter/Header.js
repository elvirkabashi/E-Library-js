export function initHeader(header){

    const user_is_loggedin = localStorage.getItem('loggedin_user')
    let user = 'guest';
    let links = ''
    if(user_is_loggedin == null) {
      links = `
      <li class="nav-item m-1">
        <a href="http://127.0.0.1:5500/sing-up.html" type="button" class="btn btn-outline-light text-white">Sign in</a>
      </li>
      `
    } else {
      user = user_is_loggedin
      links = `
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${user}
      </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" id="logout" href="">Logout</a></li>
        </ul>
      </li>
      `
    }

    function shelf(){
      let html = `<li class="nav-item">`

      if(user_is_loggedin){
        html += `<a class="nav-link" href="shelf.html">Shelf</a>`
      }

      html += `</li>`

      return html;
    }

    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark main-color py-3">
    <div class="container-fluid">
      <span class="navbar-brand">E-Library</span>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="books.html" class="nav-link">Search Books</a>
          </li>

          ${shelf()}

        </ul>
        <ul class="navbar-nav ms-auto">
   
          ${links}
          
        </ul>
      </div>
    </div>
  </nav>
    `

    addDynamicEventListener(document.body, 'click', '#logout', function (e) {
      e.preventDefault()
      localStorage.removeItem('loggedin_user')
      window.location.href = 'http://127.0.0.1:5500/index.html'
  })
}