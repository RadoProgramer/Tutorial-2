import './sass/library_main.scss';
document.addEventListener('DOMContentLoaded', () => {
    const watchedMoviesContainer = document.getElementById('watched-movies-container');
    const queueContainer = document.getElementById('queue-container');
  
    function displayMovies(container, movies) {
      container.innerHTML = '';
      movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        const title = document.createElement('h1');
        const genre = document.createElement('p');
        const year = document.createElement('p');
  
        img.src = movie.image;
        title.textContent = movie.title;
        genre.textContent = movie.genre;
        year.textContent = movie.year;
  
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(genre);
        card.appendChild(year);
  
        container.appendChild(card);
      });
    }
  
    const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
    const queue = JSON.parse(localStorage.getItem('queue')) || [];
  
    displayMovies(watchedMoviesContainer, watchedMovies);
    displayMovies(queueContainer, queue);
  });