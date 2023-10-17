export function initHeader(header){


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

          <li class="nav-item">
           <a class="nav-link" href="index.html">Admin</a>
          </li>

        </ul>
        <ul class="navbar-nav ms-auto">

          <li class="nav-item m-1">
            <a href="index.html" type="button" class="btn btn-outline-light">Sign in</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
    `
}