/**
 * Create a component with common options
 */

import createBasic from './create-basic';
import Icon from '../../icon';
import Loading from '../../loading';
import Cell from '../../cell';
import CellGroup from '../../cell-group';

// 这四个组件说明是基础的组件,内置于所有的组件中, 优化公共组件引入的写法
export default function(sfc) {
  sfc.components = Object.assign(sfc.components || {}, {
    Icon,
    Loading,
    Cell,
    CellGroup
  });
  return createBasic(sfc)
};