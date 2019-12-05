import { IConfig } from 'umi-types';
import glob from 'glob';
import path from 'path';

const getEntries = pattern => {
  var fileList = glob.sync(pattern);
  return fileList.reduce((previous, current) => {
    var filePath = path.parse(path.relative(path.resolve(__dirname, './src'), current));
    var withoutSuffix = path.join(filePath.dir, filePath.name);
    previous[withoutSuffix] = path.resolve(__dirname, current);
    return previous;
  }, {});
};

const cookie = '_gt=KGxn0H58FYkHYwybCZJxNFrUpuHq_famYOiZ0txT4453Fc4P;';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  disableCSSModules: true,
  base: '/demo/',
  publicPath: '/demo/',
  plugins: [
    // ref: https://github.com/umijs/umi-plugin-mpa
    [
      'umi-plugin-mpa',
      {
        entry: getEntries('src/pages/**/**.{jsx,tsx}'),
        selectEntry: true,
        html: {},
        splitChunks: true,
        deepPageEntry: true,
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
