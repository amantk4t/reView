import baseAPI from './api';

export const getPopularMovies = (lang: string = 'en-US') => {
	return baseAPI.get(`/movie/popular?language=${lang}`);
};

export const searchMovies = (query: string) => {
	return baseAPI.get(`/search/movie?query=${query}`);
};

export const searchMultiple = (query: string) => {
	return baseAPI.get(`/search/multi?query=${query}`);
};

export const getPopularSeries = (lang: string = 'en-US') => {
	return baseAPI.get(`/trending/tv/day?language=${lang}`);
};

export const searchSeries = (query: string) => {
	return baseAPI.get(`/search/tv?query=${query}`);
};
