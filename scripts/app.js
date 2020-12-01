const searchBar = document.querySelector('.search')

searchBar.onclick = event => {
    event.stopPropagation();
    document.querySelector('.scroll').classList.toggle('show');
    document.querySelector('.close-button').classList.toggle('show');
}

window.onclick = event => {
    document.querySelector('.scroll').classList.remove('show');
    document.querySelector('.close-button').classList.remove('show');
}
