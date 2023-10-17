export function Spinner(div){
    div.innerHTML = `
    <div class="d-flex justify-content-center align-items-center mt-5" id="spinner">
    <button class="btn btn-primary" type="button">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
    </button>
    </div>
`;
}