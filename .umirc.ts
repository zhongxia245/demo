const cookie = '_gt=KGxn0H58FYkHYwybCZJxNFrUpuHq_famYOiZ0txT4453Fc4P;';

const config: any = {
  treeShaking: true,
  disableCSSModules: true,
  base: '/demo/',
  publicPath: '/demo/',
  plugins: [
    [
      'umi-plugin-mpa-pug',
      {
        selectEntry: true,
      },
    ],
    [
      'umi-plugin-react',
      {
        antd: true,
      },
    ],
  ],
  proxy: {
    '/course-proxy/api/course/': {
      target: 'https://www.guihua.com',
      changeOrigin: true,
      headers: {
        Cookie: cookie,
      },
    },
    '/j/': {
      target: 'https://www.guihua.com',
      changeOrigin: true,
      headers: {
        Cookie: cookie,
      },
    },
  },
};

export default config;
