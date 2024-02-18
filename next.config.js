/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.fineartamerica.com'
        }]
    }
}

module.exports = nextConfig
