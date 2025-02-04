// import withPWA from 'next-pwa';
// import runtimeCaching from 'next-pwa/cache.js';

// const nextConfig = withPWA({
//     pwa: {
//         dest: 'public',
//         register: true,
//         skipWaiting: true,
//         disable: process.env.NODE_ENV === 'development',
//         runtimeCaching,
//     },
// });

// export default {
//     ...nextConfig,
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'kenleyli666.github.io',
//                 pathname: '/booksApi/**',
//             },
//         ],
//     },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kenleyli666.github.io' },
    ],
  },
};

export default nextConfig;

