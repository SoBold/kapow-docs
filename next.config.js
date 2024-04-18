const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

const isProduction = process.env.NODE_ENV === 'production';
const assetPrefix = isProduction ? '/kapow-docs' : '';

const nextConfig = {
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    basePath: assetPrefix,
    assetPrefix,
};

isProduction && (nextConfig.output = 'export');

console.log(nextConfig);

module.exports = {
    ...withNextra(),
    ...nextConfig,
};
