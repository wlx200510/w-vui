// component mixin
import { get, camelize } from '../utils';

export default {
  computed: {
    $t() {
      const { name } = this.$options;
      const prefix = name ? camelize(name) + '.' : '';

      if (process.env.NODE_ENV !== 'production' && !this.$varlMessages) {
        console.warn('[Varl] Locale not correctly registered.');
        return () => '';
      }

      const messages = this.$varlMessages[this.$varlLang];
      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path);
        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
};
