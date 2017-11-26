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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9zcmMvYXBwL3NyYy9pbmRleC5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvaW5kZXguanN4IiwiL3NyYy9hcHAvc3JjL2tleWJvYXJkL2tleS5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvbWFwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxNQUFNLFNBQU4sR0FBTTtBQUFBLFNBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFGRixHQURVO0FBQUEsQ0FBWjs7QUFPQSxtQkFBUyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBd0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXhCOzs7Ozs7Ozs7Ozs7OztBQ1hBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sZUFBZSxJQUFJLEdBQUosRUFBckI7O0lBQ2EsUSxXQUFBLFE7OztBQUNYLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGFBQU8sRUFESTtBQUVYLG9CQUFjLEVBRkg7QUFHWCxZQUFNO0FBSEssS0FBYjtBQUZpQjtBQU9sQjs7Ozs4QkFFUyxFLEVBQUk7QUFDWixVQUFNLFFBQVMsS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixPQUF4QixDQUFnQyxFQUFoQyxDQUFmO0FBQ0EsVUFBRyxVQUFVLENBQUMsQ0FBZCxFQUFpQjtBQUNmLGFBQUssUUFBTCxDQUFjLEVBQUMsMkNBQWtCLEtBQUssS0FBTCxDQUFXLFlBQTdCLElBQTJDLEVBQTNDLEVBQUQsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFj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QUEsUUFBYSxJQUFiLFFBQWEsSUFBYjtBQUFBLFdBQXdCO0FBQ3RDLFlBRHNDO0FBRXRDLGFBQU8sU0FBUyxHQUFHLFdBQUgsR0FBaUIsT0FBakIsQ0FBeUIsR0FBekIsRUFBOEIsRUFBOUIsQ0FGc0I7QUFHdEMsWUFBTSxRQUFRLEVBSHdCO0FBSXRDLGdCQUFVLEtBSjRCO0FBS3RDLGVBQVMsS0FMNkI7QUFNdEMsY0FBTyxrQkFBTTtBQUNYLFlBQU0sSUFBSSxHQUFHLE9BQUgsQ0FBVyxHQUFYLENBQVY7QUFDQSxlQUFPLE1BQU0sQ0FBQyxDQUFQLEdBQVcsRUFBWCxHQUFnQixHQUFHLE1BQUgsQ0FBVSxJQUFFLENBQVosQ0FBdkI7QUFDRDtBQVRxQyxLQUF4QjtBQUFBLEdBQVQsQ0FBUDtBQVdEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge0tleWJvYXJkfSBmcm9tICcuL2tleWJvYXJkJztcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdj5Ob3cgV29ya2luZzwvZGl2PlxyXG4gICAgPEtleWJvYXJkIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7S2V5fSBmcm9tICcuL2tleSc7XHJcbmltcG9ydCB7bWFwS2V5c30gZnJvbSAnLi9tYXBzJztcclxuXHJcbmNvbnN0IHNlbGVjdGVkS2V5cyA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYmluZHM6IFtdLFxyXG4gICAgICBzZWxlY3RlZEtleXM6IFtdLFxyXG4gICAgICBrZXlzOiBtYXBLZXlzKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdEtleShpZCkge1xyXG4gICAgY29uc3QgaW5kZXggPSAgdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMuaW5kZXhPZihpZCk7XHJcbiAgICBpZihpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRLZXlzOiBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMsIGlkXX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRLZXlzOiB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cy5maWx0ZXIocyA9PiBzICE9PSBpZCl9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQoe2lkfSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRLZXlzLmluZGV4T2YoaWQpID4gLTE7XHJcbiAgfVxyXG5cclxuICBpc0JvdW5kKHtnZXRLZXl9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5iaW5kcy5pbmRleE9mKGdldEtleSgpKSA+IC0xO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWJvYXJkXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUua2V5cy5tYXAoa2V5ID0+XHJcbiAgICAgICAgICA8S2V5XHJcbiAgICAgICAgICAgIGtleT17a2V5LmlkfVxyXG4gICAgICAgICAgICBpc1NlbGVjdGVkPXt0aGlzLmlzU2VsZWN0ZWQoa2V5KX1cclxuICAgICAgICAgICAgaXNCb3VuZD17dGhpcy5pc0JvdW5kKGtleSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhpZCkgPT4gdGhpcy5zZWxlY3RLZXkoaWQpfVxyXG4gICAgICAgICAgICB7Li4ua2V5fVxyXG4gICAgICAgICAgLz4pfVxyXG4gICAgICA8L2Rpdj4pO1xyXG4gIH1cclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtleSA9ICh7XHJcbiAgaWQsXHJcbiAgdmFsdWUsXHJcbiAgZ3JpZCxcclxuICBkaXNhYmxlZCxcclxuICBpc0JvdW5kLFxyXG4gIGlzU2VsZWN0ZWQsXHJcbiAgZ2V0S2V5LFxyXG4gIG9uQ2xpY2tcclxufSkgPT4gKFxyXG4gIDxidXR0b25cclxuICAgIGNsYXNzTmFtZT17YGtleSAke2lkfSR7ZGlzYWJsZWQgPyAnIGRpc2FibGVkJzogJyd9JHtpc0JvdW5kID8gJyBib3VuZCcgOiAnJ30ke2lzU2VsZWN0ZWQgPyAnIHNlbGVjdGVkJzogJyd9YH1cclxuICAgIG9uQ2xpY2s9eygpID0+ICFkaXNhYmxlZCAmJiBvbkNsaWNrKGlkKX1cclxuICAgIHN0eWxlPXt7J2dyaWRBcmVhJzogZ3JpZH19XHJcbiAgPlxyXG4gICAge3ZhbHVlfVxyXG4gIDwvYnV0dG9uPlxyXG4pO1xyXG4iLCJcclxuY29uc3Qga2V5cyA9IFtcclxuICB7IGlkOiAnficsIGdyaWQ6ICd0aWxkZSd9LFxyXG4gIHsgaWQ6ICdfMSd9LFxyXG4gIHsgaWQ6ICdfMid9LFxyXG4gIHsgaWQ6ICdfMyd9LFxyXG4gIHsgaWQ6ICdfNCd9LFxyXG4gIHsgaWQ6ICdfNSd9LFxyXG4gIHsgaWQ6ICdfNid9LFxyXG4gIHsgaWQ6ICdfNyd9LFxyXG4gIHsgaWQ6ICdfOCd9LFxyXG4gIHsgaWQ6ICdfOSd9LFxyXG4gIHsgaWQ6ICdfMCd9LFxyXG4gIHsgaWQ6ICctJywgZ3JpZDogJ21pbnVzJ30sXHJcbiAgeyBpZDogJz0nLCBncmlkOiAnZXF1YWwnfSxcclxuICB7IGlkOiAnYmFja3NwYWNlJ30sXHJcblxyXG4gIHsgaWQ6ICd0YWInfSxcclxuICB7IGlkOiAncSd9LFxyXG4gIHsgaWQ6ICd3J30sXHJcbiAgeyBpZDogJ2UnfSxcclxuICB7IGlkOiAncid9LFxyXG4gIHsgaWQ6ICd0J30sXHJcbiAgeyBpZDogJ3knfSxcclxuICB7IGlkOiAndSd9LFxyXG4gIHsgaWQ6ICdpJ30sXHJcbiAgeyBpZDogJ28nfSxcclxuICB7IGlkOiAncCd9LFxyXG4gIHsgaWQ6ICdbJywgZ3JpZDogJ29icmFja2V0J30sXHJcbiAgeyBpZDogJ10nLCBncmlkOiAnY2JyYWNrZXQnfSxcclxuICB7IGlkOiAnXFxcXCcsIGdyaWQ6ICdiYWNrc2xhc2gnfSxcclxuXHJcbiAgeyBpZDogJ2NhcHNsb2NrJywgdmFsdWU6ICdDQVBTJ30sXHJcbiAgeyBpZDogJ2EnLCB2YWx1ZTogJ0EnfSxcclxuICB7IGlkOiAncycsIHZhbHVlOiAnUyd9LFxyXG4gIHsgaWQ6ICdkJywgdmFsdWU6ICdEJ30sXHJcbiAgeyBpZDogJ2YnLCB2YWx1ZTogJ0YnfSxcclxuICB7IGlkOiAnZycsIHZhbHVlOiAnRyd9LFxyXG4gIHsgaWQ6ICdoJywgdmFsdWU6ICdIJ30sXHJcbiAgeyBpZDogJ2onLCB2YWx1ZTogJ0onfSxcclxuICB7IGlkOiAnaycsIHZhbHVlOiAnSyd9LFxyXG4gIHsgaWQ6ICdsJywgdmFsdWU6ICdMJ30sXHJcbiAgeyBpZDogJzsnLCBncmlkOiAnc2VtaWNvbG9uJ30sXHJcbiAgeyBpZDogJ1xcJycsIGdyaWQ6ICd0aWNrJ30sXHJcbiAgeyBpZDogJ2VudGVyJ30sXHJcblxyXG4gIHsgaWQ6ICdsX3NoaWZ0JywgdmFsdWU6ICdTSElGVCd9LFxyXG4gIHsgaWQ6ICd6J30sXHJcbiAgeyBpZDogJ3gnfSxcclxuICB7IGlkOiAnYyd9LFxyXG4gIHsgaWQ6ICd2J30sXHJcbiAgeyBpZDogJ2InfSxcclxuICB7IGlkOiAnbid9LFxyXG4gIHsgaWQ6ICdtJ30sXHJcbiAgeyBpZDogJywnLCBncmlkOiAnY29sb24nfSxcclxuICB7IGlkOiAnLicsIGdyaWQ6ICdkb3QnfSxcclxuICB7IGlkOiAnLycsIGdyaWQ6ICdzbGFzaCd9LFxyXG4gIHsgaWQ6ICdyX3NoaWZ0JywgdmFsdWU6ICdTSElGVCd9LFxyXG5cclxuICB7IGlkOiAnbF9jdHJsJywgdmFsdWU6ICdDVFJMJ30sXHJcbiAgeyBpZDogJ2FsdCcsIHZhbHVlOiAnQUxUJ30sXHJcbiAgeyBpZDogJ3NwYWNlJywgdmFsdWU6ICdTUEFDRSd9LFxyXG4gIHsgaWQ6ICdhbHRncicsIHZhbHVlOiAnQUxUJ30sXHJcbiAgeyBpZDogJ3JfY3RybCcsIHZhbHVlOiAnQ1RSTCd9LFxyXG5cclxuXHJcbiAgeyBpZDogJ2lucycsIHZhbHVlOiAnSU5TRVJUJ30sXHJcbiAgeyBpZDogJ2hvbWUnLCB2YWx1ZTogJ0hPTUUnfSxcclxuICB7IGlkOiAncGd1cCcsIHZhbHVlOiAnUEFHRSBVUCd9LFxyXG5cclxuICB7IGlkOiAnZGVsJywgdmFsdWU6ICdERUxFVEUnfSxcclxuICB7IGlkOiAnZW5kJywgdmFsdWU6ICdFTkQnfSxcclxuICB7IGlkOiAncGdkbicsIHZhbHVlOiAnUEFHRSBET1dOJ30sXHJcblxyXG4gIHsgaWQ6ICd1cGFycm93JywgdmFsdWU6ICdVcCd9LFxyXG4gIHsgaWQ6ICdsZWZ0YXJyb3cnLCB2YWx1ZTogJ0xFRlQnfSxcclxuICB7IGlkOiAnZG93bmFycm93JywgdmFsdWU6ICdET1dOJ30sXHJcbiAgeyBpZDogJ3JpZ2h0YXJyb3cnLCB2YWx1ZTogJ1JJR0hUJ30sXHJcblxyXG5cclxuICB7IGlkOiAnbnVtbG9jaycsIHZhbHVlOiAnTlVNIExPQ0snfSxcclxuICB7IGlkOiAna3Bfc2xhc2gnLCB2YWx1ZTogJy8nfSxcclxuICB7IGlkOiAna3BfbXVsdGlwbHknLCB2YWx1ZTogJyonfSxcclxuICB7IGlkOiAna3BfbWludXMnLCB2YWx1ZTogJy0nfSxcclxuXHJcbiAgeyBpZDogJ2twX2hvbWUnLCB2YWx1ZTogJzcnfSxcclxuICB7IGlkOiAna3BfdXBhcnJvdycsIHZhbHVlOiAnOCd9LFxyXG4gIHsgaWQ6ICdrcF9wZ3VwJywgdmFsdWU6ICc5J30sXHJcblxyXG4gIHsgaWQ6ICdrcF9sZWZ0YXJyb3cnLCB2YWx1ZTogJzQnfSxcclxuICB7IGlkOiAna3BfNScsIHZhbHVlOiAnNSd9LFxyXG4gIHsgaWQ6ICdrcF9yaWdodGFycm93JywgdmFsdWU6ICc2J30sXHJcblxyXG4gIHsgaWQ6ICdrcF9lbmQnLCB2YWx1ZTogJzEnfSxcclxuICB7IGlkOiAna3BfZG93bmFycm93JywgdmFsdWU6ICcyJ30sXHJcbiAgeyBpZDogJ2twX3BnZG4nLCB2YWx1ZTogJzMnfSxcclxuXHJcbiAgeyBpZDogJ2twX3BsdXMnLCB2YWx1ZTogJysnfSxcclxuICB7IGlkOiAna3BfZW50ZXInLCB2YWx1ZTogJ0VOVEVSJ30sXHJcbiAgeyBpZDogJ2twX2lucycsIHZhbHVlOiAnMCd9LFxyXG4gIHsgaWQ6ICdrcF9kZWwnLCB2YWx1ZTogJywnfVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcEtleXMoKSB7XHJcbiAgcmV0dXJuIGtleXMubWFwKCh7aWQsIHZhbHVlLCBncmlkfSkgPT4gKHtcclxuICAgIGlkLFxyXG4gICAgdmFsdWU6IHZhbHVlIHx8IGlkLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgnXycsICcnKSxcclxuICAgIGdyaWQ6IGdyaWQgfHwgaWQsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpc0JvdW5kOiBmYWxzZSxcclxuICAgIGdldEtleTooKSA9PiB7XHJcbiAgICAgIGNvbnN0IGkgPSBpZC5pbmRleE9mKCdfJyk7XHJcbiAgICAgIHJldHVybiBpID09PSAtMSA/IGlkIDogaWQuc3Vic3RyKGkrMSk7XHJcbiAgICB9XHJcbiAgfSkpXHJcbn0iXX0=
