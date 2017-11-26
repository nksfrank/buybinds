(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _keyboard = require('./keyboard');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'Now Working'
    ),
    _react2.default.createElement(_keyboard.Keyboard, null)
  );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

},{"./keyboard":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keyboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _key = require('./key');

var _maps = require('./maps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var selectedKeys = new Map();

var Keyboard = exports.Keyboard = function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard(props) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, props));

    _this.state = {
      selectedKeys: []
    };
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'selectKey',
    value: function selectKey(id) {
      var index = this.state.selectedKeys.indexOf(id);
      if (index === -1) {
        this.setState({ selectedKeys: [].concat(_toConsumableArray(this.state.selectedKeys), [id]) });
      } else {
        this.setState({ selectedKeys: this.state.selectedKeys.filter(function (s) {
            return s !== id;
          }) });
      }
    }
  }, {
    key: 'isSelected',
    value: function isSelected(_ref) {
      var id = _ref.id;

      return this.state.selectedKeys.indexOf(id) > -1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'keyboard' },
        (0, _maps.mapKeys)().map(function (key) {
          return _react2.default.createElement(_key.Key, _extends({
            key: key.id,
            isSelected: _this2.isSelected(key),
            onClick: function onClick(id) {
              return _this2.selectKey(id);
            }
          }, key));
        })
      );
    }
  }]);

  return Keyboard;
}(_react2.default.Component);

;

},{"./key":3,"./maps":4,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Key = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Key = exports.Key = function Key(_ref) {
  var id = _ref.id,
      value = _ref.value,
      grid = _ref.grid,
      disabled = _ref.disabled,
      isBound = _ref.isBound,
      isSelected = _ref.isSelected,
      getKey = _ref.getKey,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: 'key ' + id + (disabled ? ' disabled' : '') + (isBound ? ' bound' : '') + (isSelected ? ' selected' : ''),
      onClick: function onClick() {
        return !disabled && _onClick(id);
      },
      style: { 'gridArea': grid }
    },
    value
  );
};

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapKeys = mapKeys;

var keys = [{ id: '~', grid: 'tilde' }, { id: '_1' }, { id: '_2' }, { id: '_3' }, { id: '_4' }, { id: '_5' }, { id: '_6' }, { id: '_7' }, { id: '_8' }, { id: '_9' }, { id: '_0' }, { id: '-', grid: 'minus' }, { id: '=', grid: 'equal' }, { id: 'backspace' }, { id: 'tab' }, { id: 'q' }, { id: 'w' }, { id: 'e' }, { id: 'r' }, { id: 't' }, { id: 'y' }, { id: 'u' }, { id: 'i' }, { id: 'o' }, { id: 'p' }, { id: '[', grid: 'obracket' }, { id: ']', grid: 'cbracket' }, { id: '\\', grid: 'backslash' }, { id: 'capslock', value: 'CAPS' }, { id: 'a', value: 'A' }, { id: 's', value: 'S' }, { id: 'd', value: 'D' }, { id: 'f', value: 'F' }, { id: 'g', value: 'G' }, { id: 'h', value: 'H' }, { id: 'j', value: 'J' }, { id: 'k', value: 'K' }, { id: 'l', value: 'L' }, { id: ';', grid: 'semicolon' }, { id: '\'', grid: 'tick' }, { id: 'enter' }, { id: 'l_shift', value: 'SHIFT' }, { id: 'z' }, { id: 'x' }, { id: 'c' }, { id: 'v' }, { id: 'b' }, { id: 'n' }, { id: 'm' }, { id: ',', grid: 'colon' }, { id: '.', grid: 'dot' }, { id: '/', grid: 'slash' }, { id: 'r_shift', value: 'SHIFT' }, { id: 'l_ctrl', value: 'CTRL' }, { id: 'alt', value: 'ALT' }, { id: 'space', value: 'SPACE' }, { id: 'altgr', value: 'ALT' }, { id: 'r_ctrl', value: 'CTRL' }, { id: 'ins', value: 'INSERT' }, { id: 'home', value: 'HOME' }, { id: 'pgup', value: 'PAGE UP' }, { id: 'del', value: 'DELETE' }, { id: 'end', value: 'END' }, { id: 'pgdn', value: 'PAGE DOWN' }, { id: 'uparrow', value: 'Up' }, { id: 'leftarrow', value: 'LEFT' }, { id: 'downarrow', value: 'DOWN' }, { id: 'rightarrow', value: 'RIGHT' }, { id: 'numlock', value: 'NUM LOCK' }, { id: 'kp_slash', value: '/' }, { id: 'kp_multiply', value: '*' }, { id: 'kp_minus', value: '-' }, { id: 'kp_home', value: '7' }, { id: 'kp_uparrow', value: '8' }, { id: 'kp_pgup', value: '9' }, { id: 'kp_leftarrow', value: '4' }, { id: 'kp_5', value: '5' }, { id: 'kp_rightarrow', value: '6' }, { id: 'kp_end', value: '1' }, { id: 'kp_downarrow', value: '2' }, { id: 'kp_pgdn', value: '3' }, { id: 'kp_plus', value: '+' }, { id: 'kp_enter', value: 'ENTER' }, { id: 'kp_ins', value: '0' }, { id: 'kp_del', value: ',' }];

function mapKeys() {
  return keys.map(function (_ref) {
    var id = _ref.id,
        value = _ref.value,
        grid = _ref.grid;
    return {
      id: id,
      value: value || id.toUpperCase().replace('_', ''),
      grid: grid || id,
      disabled: false,
      isBound: false,
      getKey: function getKey() {
        var i = id.indexOf('_');
        return i === -1 ? id : id.substr(i + 1);
      }
    };
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9zcmMvYXBwL3NyYy9pbmRleC5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvaW5kZXguanN4IiwiL3NyYy9hcHAvc3JjL2tleWJvYXJkL2tleS5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvbWFwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxNQUFNLFNBQU4sR0FBTTtBQUFBLFNBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFGRixHQURVO0FBQUEsQ0FBWjs7QUFPQSxtQkFBUyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBd0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXhCOzs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sZUFBZSxJQUFJLEdBQUosRUFBckI7O0lBQ2EsUSxXQUFBLFE7OztBQUNYLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLG9CQUFjO0FBREgsS0FBYjtBQUZpQjtBQUtsQjs7Ozs4QkFFUyxFLEVBQUk7QUFDWixVQUFNLFFBQVMsS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixPQUF4QixDQUFnQyxFQUFoQyxDQUFmO0FBQ0EsVUFBRyxVQUFVLENBQUMsQ0FBZCxFQUFpQjtBQUNmLGFBQUssUUFBTCxDQUFjLEVBQUMsMkNBQWtCLEtBQUssS0FBTCxDQUFXLFlBQTdCLElBQTJDLEVBQTNDLEVBQUQsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFjLEVBQUMsY0FBYyxLQUFLLEtBQUwsQ0FBVyxZQUFY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R0FBRyxPQUFILENBQVcsR0FBWCxDQUFWO0FBQ0EsZUFBTyxNQUFNLENBQUMsQ0FBUCxHQUFXLEVBQVgsR0FBZ0IsR0FBRyxNQUFILENBQVUsSUFBRSxDQUFaLENBQXZCO0FBQ0Q7QUFUcUMsS0FBeEI7QUFBQSxHQUFULENBQVA7QUFXRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtLZXlib2FyZH0gZnJvbSAnLi9rZXlib2FyZCc7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXY+Tm93IFdvcmtpbmc8L2Rpdj5cclxuICAgIDxLZXlib2FyZCAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0tleX0gZnJvbSAnLi9rZXknO1xyXG5pbXBvcnQge21hcEtleXN9IGZyb20gJy4vbWFwcyc7XHJcblxyXG5jb25zdCBzZWxlY3RlZEtleXMgPSBuZXcgTWFwKCk7XHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdGVkS2V5czogW11cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEtleShpZCkge1xyXG4gICAgY29uc3QgaW5kZXggPSAgdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMuaW5kZXhPZihpZCk7XHJcbiAgICBpZihpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRLZXlzOiBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMsIGlkXX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRLZXlzOiB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cy5maWx0ZXIocyA9PiBzICE9PSBpZCl9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQoe2lkfSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRLZXlzLmluZGV4T2YoaWQpID4gLTE7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIj5cclxuICAgICAgICB7bWFwS2V5cygpLm1hcChrZXkgPT5cclxuICAgICAgICAgIDxLZXlcclxuICAgICAgICAgICAga2V5PXtrZXkuaWR9XHJcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RoaXMuaXNTZWxlY3RlZChrZXkpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoaWQpID0+IHRoaXMuc2VsZWN0S2V5KGlkKX1cclxuICAgICAgICAgICAgey4uLmtleX1cclxuICAgICAgICAgIC8+KX1cclxuICAgICAgPC9kaXY+KTtcclxuICB9XHJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBLZXkgPSAoe1xyXG4gIGlkLFxyXG4gIHZhbHVlLFxyXG4gIGdyaWQsXHJcbiAgZGlzYWJsZWQsXHJcbiAgaXNCb3VuZCxcclxuICBpc1NlbGVjdGVkLFxyXG4gIGdldEtleSxcclxuICBvbkNsaWNrXHJcbn0pID0+IChcclxuICA8YnV0dG9uXHJcbiAgICBjbGFzc05hbWU9e2BrZXkgJHtpZH0ke2Rpc2FibGVkID8gJyBkaXNhYmxlZCc6ICcnfSR7aXNCb3VuZCA/ICcgYm91bmQnIDogJyd9JHtpc1NlbGVjdGVkID8gJyBzZWxlY3RlZCc6ICcnfWB9XHJcbiAgICBvbkNsaWNrPXsoKSA9PiAhZGlzYWJsZWQgJiYgb25DbGljayhpZCl9XHJcbiAgICBzdHlsZT17eydncmlkQXJlYSc6IGdyaWR9fVxyXG4gID5cclxuICAgIHt2YWx1ZX1cclxuICA8L2J1dHRvbj5cclxuKTtcclxuIiwiXHJcbmNvbnN0IGtleXMgPSBbXHJcbiAgeyBpZDogJ34nLCBncmlkOiAndGlsZGUnfSxcclxuICB7IGlkOiAnXzEnfSxcclxuICB7IGlkOiAnXzInfSxcclxuICB7IGlkOiAnXzMnfSxcclxuICB7IGlkOiAnXzQnfSxcclxuICB7IGlkOiAnXzUnfSxcclxuICB7IGlkOiAnXzYnfSxcclxuICB7IGlkOiAnXzcnfSxcclxuICB7IGlkOiAnXzgnfSxcclxuICB7IGlkOiAnXzknfSxcclxuICB7IGlkOiAnXzAnfSxcclxuICB7IGlkOiAnLScsIGdyaWQ6ICdtaW51cyd9LFxyXG4gIHsgaWQ6ICc9JywgZ3JpZDogJ2VxdWFsJ30sXHJcbiAgeyBpZDogJ2JhY2tzcGFjZSd9LFxyXG5cclxuICB7IGlkOiAndGFiJ30sXHJcbiAgeyBpZDogJ3EnfSxcclxuICB7IGlkOiAndyd9LFxyXG4gIHsgaWQ6ICdlJ30sXHJcbiAgeyBpZDogJ3InfSxcclxuICB7IGlkOiAndCd9LFxyXG4gIHsgaWQ6ICd5J30sXHJcbiAgeyBpZDogJ3UnfSxcclxuICB7IGlkOiAnaSd9LFxyXG4gIHsgaWQ6ICdvJ30sXHJcbiAgeyBpZDogJ3AnfSxcclxuICB7IGlkOiAnWycsIGdyaWQ6ICdvYnJhY2tldCd9LFxyXG4gIHsgaWQ6ICddJywgZ3JpZDogJ2NicmFja2V0J30sXHJcbiAgeyBpZDogJ1xcXFwnLCBncmlkOiAnYmFja3NsYXNoJ30sXHJcblxyXG4gIHsgaWQ6ICdjYXBzbG9jaycsIHZhbHVlOiAnQ0FQUyd9LFxyXG4gIHsgaWQ6ICdhJywgdmFsdWU6ICdBJ30sXHJcbiAgeyBpZDogJ3MnLCB2YWx1ZTogJ1MnfSxcclxuICB7IGlkOiAnZCcsIHZhbHVlOiAnRCd9LFxyXG4gIHsgaWQ6ICdmJywgdmFsdWU6ICdGJ30sXHJcbiAgeyBpZDogJ2cnLCB2YWx1ZTogJ0cnfSxcclxuICB7IGlkOiAnaCcsIHZhbHVlOiAnSCd9LFxyXG4gIHsgaWQ6ICdqJywgdmFsdWU6ICdKJ30sXHJcbiAgeyBpZDogJ2snLCB2YWx1ZTogJ0snfSxcclxuICB7IGlkOiAnbCcsIHZhbHVlOiAnTCd9LFxyXG4gIHsgaWQ6ICc7JywgZ3JpZDogJ3NlbWljb2xvbid9LFxyXG4gIHsgaWQ6ICdcXCcnLCBncmlkOiAndGljayd9LFxyXG4gIHsgaWQ6ICdlbnRlcid9LFxyXG5cclxuICB7IGlkOiAnbF9zaGlmdCcsIHZhbHVlOiAnU0hJRlQnfSxcclxuICB7IGlkOiAneid9LFxyXG4gIHsgaWQ6ICd4J30sXHJcbiAgeyBpZDogJ2MnfSxcclxuICB7IGlkOiAndid9LFxyXG4gIHsgaWQ6ICdiJ30sXHJcbiAgeyBpZDogJ24nfSxcclxuICB7IGlkOiAnbSd9LFxyXG4gIHsgaWQ6ICcsJywgZ3JpZDogJ2NvbG9uJ30sXHJcbiAgeyBpZDogJy4nLCBncmlkOiAnZG90J30sXHJcbiAgeyBpZDogJy8nLCBncmlkOiAnc2xhc2gnfSxcclxuICB7IGlkOiAncl9zaGlmdCcsIHZhbHVlOiAnU0hJRlQnfSxcclxuXHJcbiAgeyBpZDogJ2xfY3RybCcsIHZhbHVlOiAnQ1RSTCd9LFxyXG4gIHsgaWQ6ICdhbHQnLCB2YWx1ZTogJ0FMVCd9LFxyXG4gIHsgaWQ6ICdzcGFjZScsIHZhbHVlOiAnU1BBQ0UnfSxcclxuICB7IGlkOiAnYWx0Z3InLCB2YWx1ZTogJ0FMVCd9LFxyXG4gIHsgaWQ6ICdyX2N0cmwnLCB2YWx1ZTogJ0NUUkwnfSxcclxuXHJcblxyXG4gIHsgaWQ6ICdpbnMnLCB2YWx1ZTogJ0lOU0VSVCd9LFxyXG4gIHsgaWQ6ICdob21lJywgdmFsdWU6ICdIT01FJ30sXHJcbiAgeyBpZDogJ3BndXAnLCB2YWx1ZTogJ1BBR0UgVVAnfSxcclxuXHJcbiAgeyBpZDogJ2RlbCcsIHZhbHVlOiAnREVMRVRFJ30sXHJcbiAgeyBpZDogJ2VuZCcsIHZhbHVlOiAnRU5EJ30sXHJcbiAgeyBpZDogJ3BnZG4nLCB2YWx1ZTogJ1BBR0UgRE9XTid9LFxyXG5cclxuICB7IGlkOiAndXBhcnJvdycsIHZhbHVlOiAnVXAnfSxcclxuICB7IGlkOiAnbGVmdGFycm93JywgdmFsdWU6ICdMRUZUJ30sXHJcbiAgeyBpZDogJ2Rvd25hcnJvdycsIHZhbHVlOiAnRE9XTid9LFxyXG4gIHsgaWQ6ICdyaWdodGFycm93JywgdmFsdWU6ICdSSUdIVCd9LFxyXG5cclxuXHJcbiAgeyBpZDogJ251bWxvY2snLCB2YWx1ZTogJ05VTSBMT0NLJ30sXHJcbiAgeyBpZDogJ2twX3NsYXNoJywgdmFsdWU6ICcvJ30sXHJcbiAgeyBpZDogJ2twX211bHRpcGx5JywgdmFsdWU6ICcqJ30sXHJcbiAgeyBpZDogJ2twX21pbnVzJywgdmFsdWU6ICctJ30sXHJcblxyXG4gIHsgaWQ6ICdrcF9ob21lJywgdmFsdWU6ICc3J30sXHJcbiAgeyBpZDogJ2twX3VwYXJyb3cnLCB2YWx1ZTogJzgnfSxcclxuICB7IGlkOiAna3BfcGd1cCcsIHZhbHVlOiAnOSd9LFxyXG5cclxuICB7IGlkOiAna3BfbGVmdGFycm93JywgdmFsdWU6ICc0J30sXHJcbiAgeyBpZDogJ2twXzUnLCB2YWx1ZTogJzUnfSxcclxuICB7IGlkOiAna3BfcmlnaHRhcnJvdycsIHZhbHVlOiAnNid9LFxyXG5cclxuICB7IGlkOiAna3BfZW5kJywgdmFsdWU6ICcxJ30sXHJcbiAgeyBpZDogJ2twX2Rvd25hcnJvdycsIHZhbHVlOiAnMid9LFxyXG4gIHsgaWQ6ICdrcF9wZ2RuJywgdmFsdWU6ICczJ30sXHJcblxyXG4gIHsgaWQ6ICdrcF9wbHVzJywgdmFsdWU6ICcrJ30sXHJcbiAgeyBpZDogJ2twX2VudGVyJywgdmFsdWU6ICdFTlRFUid9LFxyXG4gIHsgaWQ6ICdrcF9pbnMnLCB2YWx1ZTogJzAnfSxcclxuICB7IGlkOiAna3BfZGVsJywgdmFsdWU6ICcsJ31cclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBLZXlzKCkge1xyXG4gIHJldHVybiBrZXlzLm1hcCgoe2lkLCB2YWx1ZSwgZ3JpZH0pID0+ICh7XHJcbiAgICBpZCxcclxuICAgIHZhbHVlOiB2YWx1ZSB8fCBpZC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnJyksXHJcbiAgICBncmlkOiBncmlkIHx8IGlkLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaXNCb3VuZDogZmFsc2UsXHJcbiAgICBnZXRLZXk6KCkgPT4ge1xyXG4gICAgICBjb25zdCBpID0gaWQuaW5kZXhPZignXycpO1xyXG4gICAgICByZXR1cm4gaSA9PT0gLTEgPyBpZCA6IGlkLnN1YnN0cihpKzEpO1xyXG4gICAgfVxyXG4gIH0pKVxyXG59Il19
