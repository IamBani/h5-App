/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = ({ webpack }) => {
  const designWidth = webpack.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750;
  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: designWidth,
        // 转化精度，转换后保留位数
        unitPrecision: 2,
        // 需要转换的单位，默认为"px"
        unitToConvert: 'px',
        // 能转化为vw的属性列表
        propList: ['*'],
        // 希望使用的视口单位
        viewportUnit: 'vw',

        // 字体使用的视口单位
        fontViewportUnit: 'vw',

        // 需要忽略的CSS选择器
        selectorBlackList: [],

        // 最小的转换数值
        minPixelValue: 1,

        // 媒体查询里的单位是否需要转换单位
        mediaQuery: true,

        // 转换后是否添加备用单位
        replace: true,

        // 忽略文件目录
        // exclude: [],

        // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscape: false,

        // 横屏时使用的单位
        landscapeUnit: 'vh',

        // 横屏时使用的视口宽度
        landscapeWidth: 1334,
      },
    },
  };
};
