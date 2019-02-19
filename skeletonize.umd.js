"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Skeletonize.js
* Dynamic skeleton loaders with minimal effort
*/
var Skeletonize = function Skeletonize(_node, options) {
  var _this = this;

  _classCallCheck(this, Skeletonize);

  _defineProperty(this, "init", function () {
    _this._walkDOM(_this.node);
  });

  _defineProperty(this, "add", function () {
    _this.skeletonEls.map(function (el) {
      el.style.position = "relative";
      el.classList.add('skeletonizejs');
    });
  });

  _defineProperty(this, "remove", function () {
    _this.skeletonEls.map(function (el) {
      el.style.position = "";
      el.classList.remove('skeletonizejs');
    });
  });

  _defineProperty(this, "_walkDOM", function (node) {
    _this._filter(node);

    node = node.firstElementChild;

    while (node) {
      _this._walkDOM(node, _this._filter);

      node = node.nextElementSibling;
    }
  });

  _defineProperty(this, "_filter", function (node) {
    if (node.children.length === 0) {
      _this.skeletonEls.push(node);
    }
  });

  this.node = _node;
  this.skeletonEls = [];
  this.init();
};

exports.default = Skeletonize;
