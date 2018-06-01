// This file is gererated by build/bin/build-entry.js
import Cell from './cell';
import CellGroup from './cell-group';
import Col from './col';
import Icon from './icon';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';
import Popup from './popup';
import Progress from './progress';
import Row from './row';

const version = '0.0.1';
const components = [
  Cell,
  CellGroup,
  Col,
  Icon,
  Loading,
  Locale,
  NavBar,
  Popup,
  Progress,
  Row
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
  Cell,
  CellGroup,
  Col,
  Icon,
  Loading,
  Locale,
  NavBar,
  Popup,
  Progress,
  Row
};

export default {
  install,
  version
};
