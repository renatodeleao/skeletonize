/**
* Skeletonize.js
* Dynamic skeleton loaders with minimal effort
*/
export default class Skeletonize {
  constructor(node, options) {
    this.node = node;
    this.skeletonEls = [];

    this.init();
  }

  init = () => {
    this._walkDOM(this.node);
  }

  add = () => {
    this.skeletonEls.map(el => {
      el.style.position = "relative";
      el.classList.add('skeletonizejs');
    })
  }

  remove = () => {
    this.skeletonEls.map(el => {
      el.style.position = "";
      el.classList.remove('skeletonizejs');
    })
  }

  /**
  * @private
  * walkDom
  * Recursive get and store nodes
  * Adapted from Javascript: the good parts
  */
  _walkDOM = (node) => {
    this._filter(node);
    node = node.firstElementChild;
    while(node) {
      this._walkDOM(node, this._filter);
      node = node.nextElementSibling;
    }
  };

  _filter = (node) => {
    if(node.children.length === 0){
      this.skeletonEls.push(node)
    }
  }
}