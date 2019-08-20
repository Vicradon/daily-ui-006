const $ = node => document.querySelector(node);
const ael = (node, event, func) => node.addEventListener(event, func);
const $$ = node => document.querySelectorAll(node);
const log = node => console.log(node);

const tabs = $$('.tab p');


tabs.forEach(tab => ael(tab, 'click', e => {
  tabs.forEach(tab => {
    tab.classList.remove('active-tab')
  });
  e.target.classList.add('active-tab');
}))

