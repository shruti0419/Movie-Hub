const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5c7799f4680713688f3e5cde4e23386a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;