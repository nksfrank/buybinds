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

var Keyboard = exports.Keyboard = function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard(props) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, props));

    _this.state = {
      binds: [],
      selectedKeys: [],
      keys: (0, _maps.mapKeys)()
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
    key: 'isBound',
    value: function isBound(_ref2) {
      var getKey = _ref2.getKey;

      return this.state.binds.indexOf(getKey()) > -1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'keyboard' },
        this.state.keys.map(function (key) {
          return _react2.default.createElement(_key.Key, _extends({
            key: key.id,
            isSelected: _this2.isSelected(key),
            isBound: _this2.isBound(key),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9zcmMvYXBwL3NyYy9pbmRleC5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvaW5kZXguanN4IiwiL3NyYy9hcHAvc3JjL2tleWJvYXJkL2tleS5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvbWFwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxNQUFNLFNBQU4sR0FBTTtBQUFBLFNBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFGRixHQURVO0FBQUEsQ0FBWjs7QUFPQSxtQkFBUyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBd0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXhCOzs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVhLFEsV0FBQSxROzs7QUFDWCxvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxhQUFPLEVBREk7QUFFWCxvQkFBYyxFQUZIO0FBR1gsWUFBTTtBQUhLLEtBQWI7QUFGaUI7QUFPbEI7Ozs7OEJBRVMsRSxFQUFJO0FBQ1osVUFBTSxRQUFTLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBZ0MsRUFBaEMsQ0FBZjtBQUNBLFVBQUcsVUFBVSxDQUFDLENBQWQsRUFBaUI7QUFDZixhQUFLLFFBQUwsQ0FBYyxFQUFDLDJDQUFrQixLQUFLLEtBQUwsQ0FBVyxZQUE3QixJQUEyQyxFQUEzQyxFQUFELEVBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLFFBQUwsQ0FBYyxFQUFDLGNBQWMsS0FBSyxLQUFMLENBQVcsWUFBWCxD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QjtBQUN0QyxZQURzQztBQUV0QyxhQUFPLFNBQVMsR0FBRyxXQUFILEdBQWlCLE9BQWpCLENBQXlCLEdBQXpCLEVBQThCLEVBQTlCLENBRnNCO0FBR3RDLFlBQU0sUUFBUSxFQUh3QjtBQUl0QyxnQkFBVSxLQUo0QjtBQUt0QyxlQUFTLEtBTDZCO0FBTXRDLGNBQU8sa0JBQU07QUFDWCxZQUFNLElBQUksR0FBRyxPQUFILENBQVcsR0FBWCxDQUFWO0FBQ0EsZUFBTyxNQUFNLENBQUMsQ0FBUCxHQUFXLEVBQVgsR0FBZ0IsR0FBRyxNQUFILENBQVUsSUFBRSxDQUFaLENBQXZCO0FBQ0Q7QUFUcUMsS0FBeEI7QUFBQSxHQUFULENBQVA7QUFXRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtLZXlib2FyZH0gZnJvbSAnLi9rZXlib2FyZCc7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXY+Tm93IFdvcmtpbmc8L2Rpdj5cclxuICAgIDxLZXlib2FyZCAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0tleX0gZnJvbSAnLi9rZXknO1xyXG5pbXBvcnQge21hcEtleXN9IGZyb20gJy4vbWFwcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBiaW5kczogW10sXHJcbiAgICAgIHNlbGVjdGVkS2V5czogW10sXHJcbiAgICAgIGtleXM6IG1hcEtleXMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0S2V5KGlkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9ICB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cy5pbmRleE9mKGlkKTtcclxuICAgIGlmKGluZGV4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEtleXM6IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkS2V5cywgaWRdfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEtleXM6IHRoaXMuc3RhdGUuc2VsZWN0ZWRLZXlzLmZpbHRlcihzID0+IHMgIT09IGlkKX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZCh7aWR9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMuaW5kZXhPZihpZCkgPiAtMTtcclxuICB9XHJcblxyXG4gIGlzQm91bmQoe2dldEtleX0pIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmJpbmRzLmluZGV4T2YoZ2V0S2V5KCkpID4gLTE7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5rZXlzLm1hcChrZXkgPT5cclxuICAgICAgICAgIDxLZXlcclxuICAgICAgICAgICAga2V5PXtrZXkuaWR9XHJcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RoaXMuaXNTZWxlY3RlZChrZXkpfVxyXG4gICAgICAgICAgICBpc0JvdW5kPXt0aGlzLmlzQm91bmQoa2V5KX1cclxuICAgICAgICAgICAgb25DbGljaz17KGlkKSA9PiB0aGlzLnNlbGVjdEtleShpZCl9XHJcbiAgICAgICAgICAgIHsuLi5rZXl9XHJcbiAgICAgICAgICAvPil9XHJcbiAgICAgIDwvZGl2Pik7XHJcbiAgfVxyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgS2V5ID0gKHtcclxuICBpZCxcclxuICB2YWx1ZSxcclxuICBncmlkLFxyXG4gIGRpc2FibGVkLFxyXG4gIGlzQm91bmQsXHJcbiAgaXNTZWxlY3RlZCxcclxuICBnZXRLZXksXHJcbiAgb25DbGlja1xyXG59KSA9PiAoXHJcbiAgPGJ1dHRvblxyXG4gICAgY2xhc3NOYW1lPXtga2V5ICR7aWR9JHtkaXNhYmxlZCA/ICcgZGlzYWJsZWQnOiAnJ30ke2lzQm91bmQgPyAnIGJvdW5kJyA6ICcnfSR7aXNTZWxlY3RlZCA/ICcgc2VsZWN0ZWQnOiAnJ31gfVxyXG4gICAgb25DbGljaz17KCkgPT4gIWRpc2FibGVkICYmIG9uQ2xpY2soaWQpfVxyXG4gICAgc3R5bGU9e3snZ3JpZEFyZWEnOiBncmlkfX1cclxuICA+XHJcbiAgICB7dmFsdWV9XHJcbiAgPC9idXR0b24+XHJcbik7XHJcbiIsIlxyXG5jb25zdCBrZXlzID0gW1xyXG4gIHsgaWQ6ICd+JywgZ3JpZDogJ3RpbGRlJ30sXHJcbiAgeyBpZDogJ18xJ30sXHJcbiAgeyBpZDogJ18yJ30sXHJcbiAgeyBpZDogJ18zJ30sXHJcbiAgeyBpZDogJ180J30sXHJcbiAgeyBpZDogJ181J30sXHJcbiAgeyBpZDogJ182J30sXHJcbiAgeyBpZDogJ183J30sXHJcbiAgeyBpZDogJ184J30sXHJcbiAgeyBpZDogJ185J30sXHJcbiAgeyBpZDogJ18wJ30sXHJcbiAgeyBpZDogJy0nLCBncmlkOiAnbWludXMnfSxcclxuICB7IGlkOiAnPScsIGdyaWQ6ICdlcXVhbCd9LFxyXG4gIHsgaWQ6ICdiYWNrc3BhY2UnfSxcclxuXHJcbiAgeyBpZDogJ3RhYid9LFxyXG4gIHsgaWQ6ICdxJ30sXHJcbiAgeyBpZDogJ3cnfSxcclxuICB7IGlkOiAnZSd9LFxyXG4gIHsgaWQ6ICdyJ30sXHJcbiAgeyBpZDogJ3QnfSxcclxuICB7IGlkOiAneSd9LFxyXG4gIHsgaWQ6ICd1J30sXHJcbiAgeyBpZDogJ2knfSxcclxuICB7IGlkOiAnbyd9LFxyXG4gIHsgaWQ6ICdwJ30sXHJcbiAgeyBpZDogJ1snLCBncmlkOiAnb2JyYWNrZXQnfSxcclxuICB7IGlkOiAnXScsIGdyaWQ6ICdjYnJhY2tldCd9LFxyXG4gIHsgaWQ6ICdcXFxcJywgZ3JpZDogJ2JhY2tzbGFzaCd9LFxyXG5cclxuICB7IGlkOiAnY2Fwc2xvY2snLCB2YWx1ZTogJ0NBUFMnfSxcclxuICB7IGlkOiAnYScsIHZhbHVlOiAnQSd9LFxyXG4gIHsgaWQ6ICdzJywgdmFsdWU6ICdTJ30sXHJcbiAgeyBpZDogJ2QnLCB2YWx1ZTogJ0QnfSxcclxuICB7IGlkOiAnZicsIHZhbHVlOiAnRid9LFxyXG4gIHsgaWQ6ICdnJywgdmFsdWU6ICdHJ30sXHJcbiAgeyBpZDogJ2gnLCB2YWx1ZTogJ0gnfSxcclxuICB7IGlkOiAnaicsIHZhbHVlOiAnSid9LFxyXG4gIHsgaWQ6ICdrJywgdmFsdWU6ICdLJ30sXHJcbiAgeyBpZDogJ2wnLCB2YWx1ZTogJ0wnfSxcclxuICB7IGlkOiAnOycsIGdyaWQ6ICdzZW1pY29sb24nfSxcclxuICB7IGlkOiAnXFwnJywgZ3JpZDogJ3RpY2snfSxcclxuICB7IGlkOiAnZW50ZXInfSxcclxuXHJcbiAgeyBpZDogJ2xfc2hpZnQnLCB2YWx1ZTogJ1NISUZUJ30sXHJcbiAgeyBpZDogJ3onfSxcclxuICB7IGlkOiAneCd9LFxyXG4gIHsgaWQ6ICdjJ30sXHJcbiAgeyBpZDogJ3YnfSxcclxuICB7IGlkOiAnYid9LFxyXG4gIHsgaWQ6ICduJ30sXHJcbiAgeyBpZDogJ20nfSxcclxuICB7IGlkOiAnLCcsIGdyaWQ6ICdjb2xvbid9LFxyXG4gIHsgaWQ6ICcuJywgZ3JpZDogJ2RvdCd9LFxyXG4gIHsgaWQ6ICcvJywgZ3JpZDogJ3NsYXNoJ30sXHJcbiAgeyBpZDogJ3Jfc2hpZnQnLCB2YWx1ZTogJ1NISUZUJ30sXHJcblxyXG4gIHsgaWQ6ICdsX2N0cmwnLCB2YWx1ZTogJ0NUUkwnfSxcclxuICB7IGlkOiAnYWx0JywgdmFsdWU6ICdBTFQnfSxcclxuICB7IGlkOiAnc3BhY2UnLCB2YWx1ZTogJ1NQQUNFJ30sXHJcbiAgeyBpZDogJ2FsdGdyJywgdmFsdWU6ICdBTFQnfSxcclxuICB7IGlkOiAncl9jdHJsJywgdmFsdWU6ICdDVFJMJ30sXHJcblxyXG5cclxuICB7IGlkOiAnaW5zJywgdmFsdWU6ICdJTlNFUlQnfSxcclxuICB7IGlkOiAnaG9tZScsIHZhbHVlOiAnSE9NRSd9LFxyXG4gIHsgaWQ6ICdwZ3VwJywgdmFsdWU6ICdQQUdFIFVQJ30sXHJcblxyXG4gIHsgaWQ6ICdkZWwnLCB2YWx1ZTogJ0RFTEVURSd9LFxyXG4gIHsgaWQ6ICdlbmQnLCB2YWx1ZTogJ0VORCd9LFxyXG4gIHsgaWQ6ICdwZ2RuJywgdmFsdWU6ICdQQUdFIERPV04nfSxcclxuXHJcbiAgeyBpZDogJ3VwYXJyb3cnLCB2YWx1ZTogJ1VwJ30sXHJcbiAgeyBpZDogJ2xlZnRhcnJvdycsIHZhbHVlOiAnTEVGVCd9LFxyXG4gIHsgaWQ6ICdkb3duYXJyb3cnLCB2YWx1ZTogJ0RPV04nfSxcclxuICB7IGlkOiAncmlnaHRhcnJvdycsIHZhbHVlOiAnUklHSFQnfSxcclxuXHJcblxyXG4gIHsgaWQ6ICdudW1sb2NrJywgdmFsdWU6ICdOVU0gTE9DSyd9LFxyXG4gIHsgaWQ6ICdrcF9zbGFzaCcsIHZhbHVlOiAnLyd9LFxyXG4gIHsgaWQ6ICdrcF9tdWx0aXBseScsIHZhbHVlOiAnKid9LFxyXG4gIHsgaWQ6ICdrcF9taW51cycsIHZhbHVlOiAnLSd9LFxyXG5cclxuICB7IGlkOiAna3BfaG9tZScsIHZhbHVlOiAnNyd9LFxyXG4gIHsgaWQ6ICdrcF91cGFycm93JywgdmFsdWU6ICc4J30sXHJcbiAgeyBpZDogJ2twX3BndXAnLCB2YWx1ZTogJzknfSxcclxuXHJcbiAgeyBpZDogJ2twX2xlZnRhcnJvdycsIHZhbHVlOiAnNCd9LFxyXG4gIHsgaWQ6ICdrcF81JywgdmFsdWU6ICc1J30sXHJcbiAgeyBpZDogJ2twX3JpZ2h0YXJyb3cnLCB2YWx1ZTogJzYnfSxcclxuXHJcbiAgeyBpZDogJ2twX2VuZCcsIHZhbHVlOiAnMSd9LFxyXG4gIHsgaWQ6ICdrcF9kb3duYXJyb3cnLCB2YWx1ZTogJzInfSxcclxuICB7IGlkOiAna3BfcGdkbicsIHZhbHVlOiAnMyd9LFxyXG5cclxuICB7IGlkOiAna3BfcGx1cycsIHZhbHVlOiAnKyd9LFxyXG4gIHsgaWQ6ICdrcF9lbnRlcicsIHZhbHVlOiAnRU5URVInfSxcclxuICB7IGlkOiAna3BfaW5zJywgdmFsdWU6ICcwJ30sXHJcbiAgeyBpZDogJ2twX2RlbCcsIHZhbHVlOiAnLCd9XHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwS2V5cygpIHtcclxuICByZXR1cm4ga2V5cy5tYXAoKHtpZCwgdmFsdWUsIGdyaWR9KSA9PiAoe1xyXG4gICAgaWQsXHJcbiAgICB2YWx1ZTogdmFsdWUgfHwgaWQudG9VcHBlckNhc2UoKS5yZXBsYWNlKCdfJywgJycpLFxyXG4gICAgZ3JpZDogZ3JpZCB8fCBpZCxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGlzQm91bmQ6IGZhbHNlLFxyXG4gICAgZ2V0S2V5OigpID0+IHtcclxuICAgICAgY29uc3QgaSA9IGlkLmluZGV4T2YoJ18nKTtcclxuICAgICAgcmV0dXJuIGkgPT09IC0xID8gaWQgOiBpZC5zdWJzdHIoaSsxKTtcclxuICAgIH1cclxuICB9KSlcclxufSJdfQ==
