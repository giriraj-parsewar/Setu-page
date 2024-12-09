/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "@svgr/webpack",
                    options: { babel: false },
                },
            ],
        });
        return config;
    },
};

module.exports = nextConfig;
