import { options } from './parts/_options';

console.log(window.Snow);

if (typeof window.Snow !== 'undefined') {
    window.Snow.setOptions(options);
    window.Snow.init();
}
