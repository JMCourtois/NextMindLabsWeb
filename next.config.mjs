const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const normalizedBasePath =
  rawBasePath && rawBasePath !== '/'
    ? `/${rawBasePath.replace(/^\/|\/$/g, '')}`
    : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(normalizedBasePath && {
    basePath: normalizedBasePath,
    assetPrefix: normalizedBasePath
  }),
  experimental: {
    optimizePackageImports: ['react', 'react-dom']
  }
};

export default nextConfig;

