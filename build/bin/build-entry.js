const Components = require('./get-components')();
const fs = require('fs');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const version = process.env.VERSION || require('../../package.json').version;
const tips = '// This file is gererated by build/bin/build-entry.js';

function buildVarlEntry() {
  const uninstallComponents = [ // 不需要安装的组件 暂时没用到这种过滤器
    'Lazyload',
    'Waterfall'
  ];

  const importList = Components.map(name => `import ${uppercamelize(name)} from './${name}';`);
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const instalList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelize(name)));

  const content = `${tips}
${importList.join('\n')}

const version = '${version}';
const components = [
  ${instalList.join(',\n  ')}
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ${exportList.join(',\n  ')}
};

export default {
  install,
  version
};
`;

  fs.writeFileSync(path.join(__dirname, '../../components/index.js'), content);
}

buildVarlEntry();