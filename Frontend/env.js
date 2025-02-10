const instance = () => {
    return(
        {
            baseURL: "http://localhost:8001",
           
            urlTimeout: 50000,
            ENCRYPT_DECRYPT_KEY: '1234567890abcdef1234567890abcdef',
            IV: 'fedcba0987654321fedcba0987654321',
            baseName: '/ama-bhoomi',
            APPLICATION_MODE: 'production', // production, development
        }
    )
}
export default instance;