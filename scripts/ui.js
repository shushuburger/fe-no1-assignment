export function renderMovies(movies) {
    const container = document.getElementById('movieList');
    container.innerHTML = '';
    movies.forEach((movie) => {
        const card = createCard(movie, false);
        container.appendChild(card);
    });
}

export function renderBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const container = document.getElementById('movieList');
    container.innerHTML = bookmarks.length === 0 ? '<p>북마크한 영화가 없습니다.</p>': '';
    bookmarks.forEach((movie) => {
        const card = createCard(movie, true);
        container.appendChild(card);
    });
}

export function renderMovieDetail(movie) {
    const genres = movie.genres.map(g => g.name).join(', ');
    const countries = movie.production_countries.map(c => c.name).join(', ');

    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalBody').innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title}" class="img-fluid mb-3">
        <p><strong>원제:</strong> ${movie.original_title}</p>
        <p><strong>장르:</strong> ${genres}</p>
        <p><strong>제작국가:</strong> ${countries}</p>
        <p><strong>런타임:</strong> ${movie.runtime}분</p>
        <p><strong>개봉일:</strong> ${movie.release_date}</p>
        <p><strong>평점:</strong> ⭐ ${movie.vote_average}</p>
        <p><strong>줄거리:</strong> ${movie.overview}</p>
    `;
    document.getElementById('modal').classList.remove('hidden');
}

export function createCard(movie, isBookmark = false) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = movie.image || (movie.poster_path? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: 'https://via.placeholder.com/250x375?text=No+Image');
    const title = movie.title || '제목 없음';
    const overview = movie.overview || '줄거리 정보 없음';
    const vote = movie.vote_average || '평점 없음';
    const date = movie.release_date || '개봉일 정보 없음';

    let buttons = `<button class="detailBtn cardBtn" data-id="${movie.id}">상세 페이지</button>`;

    if (isBookmark) {
        buttons += `<button class="removeBookmarkBtn cardBtn" data-id="${movie.id}">북마크 삭제</button>`;
    } else {
        buttons += `<button class="bookmarkBtn cardBtn" data-id="${movie.id}" data-title="${title}" data-image="${image}" data-vote="${vote}" data-overview="${overview}" data-date="${date}">북마크</button>`;
    }

    card.innerHTML = `
        <img src="${image}" alt="${title}">
        <div class="cardBody">
            <h3>${title}</h3>
            <p><small class="text-muted">⭐ 평점: ${vote} / 개봉일: ${date}</small></p>
            <p>${overview}</p>
            ${buttons}
        </div>
    `;
    return card;
}