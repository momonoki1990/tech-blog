/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: static exportのための設定 https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: "export",
  // NOTE: index.htmlを全ページに関して生成し、/aboutを/about/にリダイレクト https://zenn.dev/hamo/articles/0a96c4d27097bd#%E3%83%93%E3%83%AB%E3%83%89%E3%81%AE%E8%A8%AD%E5%AE%9A
  trailingSlash: true,
};

module.exports = nextConfig;
