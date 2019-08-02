import "regenerator-runtime/runtime"; // This is only needed for IE11, create a model to remove this or only inject it for IE11
import { [ComponentName] } from './[component-name].js';

if (window.customElements.get('[component-name]') === undefined) {
  window.customElements.define('[component-name]', [ComponentName]);
}
