/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Handles requests for robot.txt (singular) -> robots.txt
      {
        source: "/robot.txt",
        destination: "/robots.txt",
        permanent: true,
      },
      // Privacy policy alias
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      // SEO Package / Legacy URL aliases
      {
        source: "/software-blockchain-dev",
        destination: "/software-development",
        permanent: true,
      },
      {
        source: "/software-blockchain-dev/ecommerce-development/shopify-plus",
        destination: "/platforms/shopify-plus",
        permanent: true,
      },
      {
        source: "/software-blockchain-dev/ecommerce-development/shopify",
        destination: "/platforms/shopify",
        permanent: true,
      },
      {
        source: "/software-blockchain-dev/ecommerce-development/wordpress-woocommerce",
        destination: "/platforms/wordpress-woocommerce",
        permanent: true,
      },
      {
        source: "/software-blockchain-dev/ecommerce-development/bigcommerce",
        destination: "/platforms/bigcommerce",
        permanent: true,
      },
      {
        source: "/software-blockchain-dev/ecommerce-development/magento",
        destination: "/platforms/magento",
        permanent: true,
      },
      {
        source: "/software-blockchain-dev/:slug*",
        destination: "/software-development/:slug*",
        permanent: true,
      },
      {
        source: "/digital-marketing/aeo-optimization",
        destination: "/digital-marketing/aeo-answer-engine-optimization",
        permanent: true,
      },
      {
        source: "/digital-marketing/geo-optimization",
        destination: "/digital-marketing/geo-generative-engine-optimization",
        permanent: true,
      },
      {
        source: "/ai-automation/custom-ai-agents-chatbots",
        destination: "/ai-automation/ai-agents-chatbots",
        permanent: true,
      },
      {
        source: "/ai-automation/ai-integration-existing-products",
        destination: "/ai-automation/ai-integration",
        permanent: true,
      },
      {
        source: "/blog/aeo-vs-geo-vs-seo-funded-startups",
        destination: "/blog/aeo-vs-geo-vs-seo",
        permanent: true,
      },
      {
        source: "/blog/product-led-seo-tactics-startups",
        destination: "/blog/product-led-seo",
        permanent: true,
      },
      {
        source: "/blog/marketing-automation-stack-seed-to-series-b",
        destination: "/blog/marketing-automation-stack-by-stage",
        permanent: true,
      },
      // Bundle landing page — SEO-optimized slug (old URL preserved)
      {
        source: "/399-bundle",
        destination: "/local-business-website-bundle",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
