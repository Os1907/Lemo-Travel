/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cf.bstatic.com' ,"go4relax.com" ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
            },
        ]
      },
};

export default nextConfig;
