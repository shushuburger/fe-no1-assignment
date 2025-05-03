import { fetchPopularMovies, fetchSearchResults, fetchMovieDetail } from './api.js';
import { renderMovies, renderMovieDetail, renderBookmarks } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const popularMovies = await fetchPopularMovies();
    renderMovies(popularMovies);
});

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert('영화 제목을 입력해주세요');
        return;
    }
    const results = await fetchSearchResults(query);
    renderMovies(results);
});

document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('detailBtn')) {
        const movieId = e.target.dataset.id;
        const movie = await fetchMovieDetail(movieId);
        renderMovieDetail(movie);
    }

    if (e.target.id === 'closeModal') {
        document.getElementById('modal').classList.add('hidden');
    }

    if (e.target.classList.contains('bookmarkBtn')) {
        const movie = {
            id: e.target.dataset.id,
            title: e.target.dataset.title,
            image: e.target.dataset.image,
            vote_average: e.target.dataset.vote,
            overview: e.target.dataset.overview,
            release_date: e.target.dataset.date
        };

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        const alreadyExists = bookmarks.find((m) => m.id === movie.id);

        if (!alreadyExists) {
            bookmarks.push(movie);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            alert('북마크에 추가되었습니다!');
        } else {
            alert('이미 북마크에 추가된 영화입니다.');
        }
    }

    if (e.target.classList.contains('removeBookmarkBtn')) {
        const id = e.target.dataset.id;
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks = bookmarks.filter((m) => m.id !== id);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
    }
});

const homeLink = document.getElementById('homeLink');
homeLink.addEventListener('click', async (e) => {
    e.preventDefault();
    document.getElementById('searchInput').value = '';
    const movies = await fetchPopularMovies();
    renderMovies(movies);
});

const bookmarkLink = document.getElementById('bookmarkLink');
bookmarkLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderBookmarks();
});