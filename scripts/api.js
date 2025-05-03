import { CONFIG } from './config.js';

export async function fetchPopularMovies() {
    try {
        const res = await fetch(`${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=ko`);
        const data = await res.json();
        console.log('영화 정보:', data.results);
        return data.results;
    } catch (err) {
        alert('인기 영화 정보 로딩에 실패하였습니다');
        console.error('영화 정보 로딩 실패', err);
    }
}

export async function fetchSearchResults(query) {
    try {
        const res = await fetch(`${CONFIG.BASE_URL}/search/movie?api_key=${CONFIG.API_KEY}&query=${encodeURIComponent(query)}&language=ko`);
        const data = await res.json();
        console.log('검색 정보:', data.results);
        return data.results;
    } catch (err) {
        alert('검색 결과를 불러오는 것에 실패하였습니다');
        console.error('검색 실패', err);
    }
}

export async function fetchMovieDetail(id) {
    try {
        const res = await fetch(`${CONFIG.BASE_URL}/movie/${id}?api_key=${CONFIG.API_KEY}&language=ko`);
        const data = await res.json();
        return data;
    } catch (err) {
        alert('상세 정보 불러오기 실패하였습니다');
        console.error('상세 정보 불러오기 실패', err);
    }
}