/**
 * VNode helper
 */

 export default {
   name: 'var-node',
   functional: true,
   props: {
     node: Array
   },
   render(h, ctx) {
     return ctx.props.node;
   }
 }