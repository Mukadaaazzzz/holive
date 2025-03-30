/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        unoptimized: true, // If Netlify still has issues with Sharp
      },
      
}

module.exports = nextConfig
