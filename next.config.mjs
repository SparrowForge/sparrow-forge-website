import createNextIntlPlugin from 'next-intl/plugin';

 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["drive.google.com"],
    },
};

export default withNextIntl(nextConfig);