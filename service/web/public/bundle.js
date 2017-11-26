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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _key = require('./key');

var _maps = require('./maps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keyboard = exports.Keyboard = function Keyboard() {
  return _react2.default.createElement(
    'div',
    { className: 'keyboard' },
    (0, _maps.mapKeys)().map(function (key) {
      return _react2.default.createElement(_key.Key, _extends({
        key: key.id,
        onClick: function onClick(key) {
          return console.log(key);
        }
      }, key));
    })
  );
};

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
      disabled = _ref.disabled,
      isBound = _ref.isBound,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    {
      className: 'key ' + id + (disabled ? ' disabled' : '') + (isBound ? ' bound' : ''),
      onClick: function onClick() {
        return !disabled && _onClick(id);
      },
      style: { 'gridArea': id }
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

var keys = [{ id: 'tilde', value: '~' }, { id: '_1' }, { id: '_2' }, { id: '_3' }, { id: '_4' }, { id: '_5' }, { id: '_6' }, { id: '_7' }, { id: '_8' }, { id: '_9' }, { id: '_0' }, { id: 'minus', value: '-' }, { id: 'equal', value: '=' }, { id: 'backspace' }, { id: 'tab' }, { id: 'q' }, { id: 'w' }, { id: 'e' }, { id: 'r' }, { id: 't' }, { id: 'y' }, { id: 'u' }, { id: 'i' }, { id: 'o' }, { id: 'p' }, { id: 'obracket', value: '[' }, { id: 'cbracket', value: ']' }, { id: 'enter' }, { id: 'lshift', value: 'SHIFT' }, { id: 'z' }, { id: 'x' }, { id: 'c' }, { id: 'v' }, { id: 'b' }, { id: 'n' }, { id: 'm' }, { id: 'colon', value: ',' }, { id: 'dot', value: '.' }, { id: 'dash', value: '-' }, { id: 'rshift', value: 'SHIFT' }, { id: 'caps', value: 'CAPS' }, { id: 'a', value: 'A' }, { id: 's', value: 'S' }, { id: 'd', value: 'D' }, { id: 'f', value: 'F' }, { id: 'g', value: 'G' }, { id: 'h', value: 'H' }, { id: 'j', value: 'J' }, { id: 'k', value: 'K' }, { id: 'l', value: 'L' }, { id: 'semicolon', value: ';' }, { id: 'tick', value: '\'' }, { id: 'lctrl', value: 'CTRL' }, { id: 'alt', value: 'ALT' }, { id: 'space', value: 'SPACE' }, { id: 'altgr', value: 'ALT' }, { id: 'rctrl', value: 'CTRL' }, { id: 'uparrow', value: 'Up' }, { id: 'leftarrow', value: 'LEFT' }, { id: 'downarrow', value: 'DOWN' }, { id: 'rightarrow', value: 'RIGHT' }, { id: 'ins', value: 'INSERT' }, { id: 'home', value: 'HOME' }, { id: 'pgup', value: 'PAGE UP' }, { id: 'del', value: 'DELETE' }, { id: 'end', value: 'END' }, { id: 'pgdn', value: 'PAGE DOWN' }, { id: 'numlock', value: 'NUM LOCK' }, { id: 'kp_slash', value: '/' }, { id: 'kp_multiply', value: '*' }, { id: 'kp_minus', value: '-' }, { id: 'kp_home', value: '7' }, { id: 'kp_uparrow', value: '8' }, { id: 'kp_pgup', value: '9' }, { id: 'kp_leftarrow', value: '4' }, { id: 'kp_5', value: '5' }, { id: 'kp_rightarrow', value: '6' }, { id: 'kp_end', value: '1' }, { id: 'kp_downarrow', value: '2' }, { id: 'kp_pgdn', value: '3' }, { id: 'kp_plus', value: '+' }, { id: 'kp_enter', value: 'ENTER' }, { id: 'kp_ins', value: '0' }, { id: 'kp_del', value: ',' }];

function mapKeys() {
  return keys.map(function (_ref) {
    var id = _ref.id,
        value = _ref.value;
    return {
      id: id,
      value: value || id.toUpperCase().replace('_', ''),
      disabled: false,
      isBound: false
    };
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9zcmMvYXBwL3NyYy9pbmRleC5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvaW5kZXguanN4IiwiL3NyYy9hcHAvc3JjL2tleWJvYXJkL2tleS5qc3giLCIvc3JjL2FwcC9zcmMva2V5Ym9hcmQvbWFwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxNQUFNLFNBQU4sR0FBTTtBQUFBLFNBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFGRixHQURVO0FBQUEsQ0FBWjs7QUFPQSxtQkFBUyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBd0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXhCOzs7Ozs7Ozs7Ozs7QUNYQTs7OztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTSw4QkFBVyxTQUFYLFFBQVcsR0FBTTtBQUM1QixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsVUFBZjtBQUNHLHlCQUFVLEdBQVYsQ0FBYztBQUFBLGFBQ2I7QUFDRSxhQUFLLElBQUksRUFEWDtBQUVFLGlCQUFTLGlCQUFDLEdBQUQ7QUFBQSxpQkFBUyxRQUFRLEdBQVIsQ0FBWSxHQUFaLENBQVQ7QUFBQTtBQUZYLFNBR00sR0FITixFQURhO0FBQUEsS0FBZDtBQURILEdBREY7QUFVRCxDQVhNOzs7Ozs7Ozs7O0FDSlA7Ozs7OztBQUVPLElBQU0sb0JBQU0sU0FBTixHQUFNO0FBQUEsTUFDakIsRUFEaUIsUUFDakIsRUFEaUI7QUFBQSxNQUVqQixLQUZpQixRQUVqQixLQUZpQjtBQUFBLE1BR2pCLFFBSGlCLFFBR2pCLFFBSGlCO0FBQUEsTUFJakIsT0FKaUIsUUFJakIsT0FKaUI7QUFBQSxNQUtqQixRQUxp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LGdCQUFVLEtBSHNCO0FBSWhDLGVBQVM7QUFKdUIsS0FBbEI7QUFBQSxHQUFULENBQVA7QUFNRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtLZXlib2FyZH0gZnJvbSAnLi9rZXlib2FyZCc7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXY+Tm93IFdvcmtpbmc8L2Rpdj5cclxuICAgIDxLZXlib2FyZCAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0tleX0gZnJvbSAnLi9rZXknO1xyXG5pbXBvcnQge21hcEtleXN9IGZyb20gJy4vbWFwcyc7XHJcblxyXG5leHBvcnQgY29uc3QgS2V5Ym9hcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIj5cclxuICAgICAge21hcEtleXMoKS5tYXAoa2V5ID0+XHJcbiAgICAgICAgPEtleVxyXG4gICAgICAgICAga2V5PXtrZXkuaWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoa2V5KSA9PiBjb25zb2xlLmxvZyhrZXkpfVxyXG4gICAgICAgICAgey4uLmtleX1cclxuICAgICAgICAvPil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBLZXkgPSAoe1xyXG4gIGlkLFxyXG4gIHZhbHVlLFxyXG4gIGRpc2FibGVkLFxyXG4gIGlzQm91bmQsXHJcbiAgb25DbGlja1xyXG59KSA9PiAoXHJcbiAgPGJ1dHRvblxyXG4gICAgY2xhc3NOYW1lPXtga2V5ICR7aWR9JHtkaXNhYmxlZCA/ICcgZGlzYWJsZWQnOiAnJ30ke2lzQm91bmQgPyAnIGJvdW5kJyA6ICcnfWB9XHJcbiAgICBvbkNsaWNrPXsoKSA9PiAhZGlzYWJsZWQgJiYgb25DbGljayhpZCl9XHJcbiAgICBzdHlsZT17eydncmlkQXJlYSc6IGlkfX1cclxuICA+XHJcbiAgICB7dmFsdWV9XHJcbiAgPC9idXR0b24+XHJcbik7XHJcbiIsIlxyXG5jb25zdCBrZXlzID0gW1xyXG4gIHsgaWQ6ICd0aWxkZScsIHZhbHVlOiAnfid9LFxyXG4gIHsgaWQ6ICdfMSd9LFxyXG4gIHsgaWQ6ICdfMid9LFxyXG4gIHsgaWQ6ICdfMyd9LFxyXG4gIHsgaWQ6ICdfNCd9LFxyXG4gIHsgaWQ6ICdfNSd9LFxyXG4gIHsgaWQ6ICdfNid9LFxyXG4gIHsgaWQ6ICdfNyd9LFxyXG4gIHsgaWQ6ICdfOCd9LFxyXG4gIHsgaWQ6ICdfOSd9LFxyXG4gIHsgaWQ6ICdfMCd9LFxyXG4gIHsgaWQ6ICdtaW51cycsIHZhbHVlOiAnLSd9LFxyXG4gIHsgaWQ6ICdlcXVhbCcsIHZhbHVlOiAnPSd9LFxyXG4gIHsgaWQ6ICdiYWNrc3BhY2UnfSxcclxuXHJcbiAgeyBpZDogJ3RhYid9LFxyXG4gIHsgaWQ6ICdxJ30sXHJcbiAgeyBpZDogJ3cnfSxcclxuICB7IGlkOiAnZSd9LFxyXG4gIHsgaWQ6ICdyJ30sXHJcbiAgeyBpZDogJ3QnfSxcclxuICB7IGlkOiAneSd9LFxyXG4gIHsgaWQ6ICd1J30sXHJcbiAgeyBpZDogJ2knfSxcclxuICB7IGlkOiAnbyd9LFxyXG4gIHsgaWQ6ICdwJ30sXHJcbiAgeyBpZDogJ29icmFja2V0JywgdmFsdWU6ICdbJ30sXHJcbiAgeyBpZDogJ2NicmFja2V0JywgdmFsdWU6ICddJ30sXHJcbiAgeyBpZDogJ2VudGVyJ30sXHJcblxyXG4gIHsgaWQ6ICdsc2hpZnQnLCB2YWx1ZTogJ1NISUZUJ30sXHJcbiAgeyBpZDogJ3onfSxcclxuICB7IGlkOiAneCd9LFxyXG4gIHsgaWQ6ICdjJ30sXHJcbiAgeyBpZDogJ3YnfSxcclxuICB7IGlkOiAnYid9LFxyXG4gIHsgaWQ6ICduJ30sXHJcbiAgeyBpZDogJ20nfSxcclxuICB7IGlkOiAnY29sb24nLCB2YWx1ZTogJywnfSxcclxuICB7IGlkOiAnZG90JywgdmFsdWU6ICcuJ30sXHJcbiAgeyBpZDogJ2Rhc2gnLCB2YWx1ZTogJy0nfSxcclxuICB7IGlkOiAncnNoaWZ0JywgdmFsdWU6ICdTSElGVCd9LFxyXG5cclxuICB7IGlkOiAnY2FwcycsIHZhbHVlOiAnQ0FQUyd9LFxyXG4gIHsgaWQ6ICdhJywgdmFsdWU6ICdBJ30sXHJcbiAgeyBpZDogJ3MnLCB2YWx1ZTogJ1MnfSxcclxuICB7IGlkOiAnZCcsIHZhbHVlOiAnRCd9LFxyXG4gIHsgaWQ6ICdmJywgdmFsdWU6ICdGJ30sXHJcbiAgeyBpZDogJ2cnLCB2YWx1ZTogJ0cnfSxcclxuICB7IGlkOiAnaCcsIHZhbHVlOiAnSCd9LFxyXG4gIHsgaWQ6ICdqJywgdmFsdWU6ICdKJ30sXHJcbiAgeyBpZDogJ2snLCB2YWx1ZTogJ0snfSxcclxuICB7IGlkOiAnbCcsIHZhbHVlOiAnTCd9LFxyXG4gIHsgaWQ6ICdzZW1pY29sb24nLCB2YWx1ZTogJzsnfSxcclxuICB7IGlkOiAndGljaycsIHZhbHVlOiAnXFwnJ30sXHJcblxyXG4gIHsgaWQ6ICdsY3RybCcsIHZhbHVlOiAnQ1RSTCd9LFxyXG4gIHsgaWQ6ICdhbHQnLCB2YWx1ZTogJ0FMVCd9LFxyXG4gIHsgaWQ6ICdzcGFjZScsIHZhbHVlOiAnU1BBQ0UnfSxcclxuICB7IGlkOiAnYWx0Z3InLCB2YWx1ZTogJ0FMVCd9LFxyXG4gIHsgaWQ6ICdyY3RybCcsIHZhbHVlOiAnQ1RSTCd9LFxyXG5cclxuICB7IGlkOiAndXBhcnJvdycsIHZhbHVlOiAnVXAnfSxcclxuICB7IGlkOiAnbGVmdGFycm93JywgdmFsdWU6ICdMRUZUJ30sXHJcbiAgeyBpZDogJ2Rvd25hcnJvdycsIHZhbHVlOiAnRE9XTid9LFxyXG4gIHsgaWQ6ICdyaWdodGFycm93JywgdmFsdWU6ICdSSUdIVCd9LFxyXG5cclxuXHJcbiAgeyBpZDogJ2lucycsIHZhbHVlOiAnSU5TRVJUJ30sXHJcbiAgeyBpZDogJ2hvbWUnLCB2YWx1ZTogJ0hPTUUnfSxcclxuICB7IGlkOiAncGd1cCcsIHZhbHVlOiAnUEFHRSBVUCd9LFxyXG5cclxuICB7IGlkOiAnZGVsJywgdmFsdWU6ICdERUxFVEUnfSxcclxuICB7IGlkOiAnZW5kJywgdmFsdWU6ICdFTkQnfSxcclxuICB7IGlkOiAncGdkbicsIHZhbHVlOiAnUEFHRSBET1dOJ30sXHJcblxyXG5cclxuICB7IGlkOiAnbnVtbG9jaycsIHZhbHVlOiAnTlVNIExPQ0snfSxcclxuICB7IGlkOiAna3Bfc2xhc2gnLCB2YWx1ZTogJy8nfSxcclxuICB7IGlkOiAna3BfbXVsdGlwbHknLCB2YWx1ZTogJyonfSxcclxuICB7IGlkOiAna3BfbWludXMnLCB2YWx1ZTogJy0nfSxcclxuXHJcbiAgeyBpZDogJ2twX2hvbWUnLCB2YWx1ZTogJzcnfSxcclxuICB7IGlkOiAna3BfdXBhcnJvdycsIHZhbHVlOiAnOCd9LFxyXG4gIHsgaWQ6ICdrcF9wZ3VwJywgdmFsdWU6ICc5J30sXHJcblxyXG4gIHsgaWQ6ICdrcF9sZWZ0YXJyb3cnLCB2YWx1ZTogJzQnfSxcclxuICB7IGlkOiAna3BfNScsIHZhbHVlOiAnNSd9LFxyXG4gIHsgaWQ6ICdrcF9yaWdodGFycm93JywgdmFsdWU6ICc2J30sXHJcblxyXG4gIHsgaWQ6ICdrcF9lbmQnLCB2YWx1ZTogJzEnfSxcclxuICB7IGlkOiAna3BfZG93bmFycm93JywgdmFsdWU6ICcyJ30sXHJcbiAgeyBpZDogJ2twX3BnZG4nLCB2YWx1ZTogJzMnfSxcclxuXHJcbiAgeyBpZDogJ2twX3BsdXMnLCB2YWx1ZTogJysnfSxcclxuICB7IGlkOiAna3BfZW50ZXInLCB2YWx1ZTogJ0VOVEVSJ30sXHJcbiAgeyBpZDogJ2twX2lucycsIHZhbHVlOiAnMCd9LFxyXG4gIHsgaWQ6ICdrcF9kZWwnLCB2YWx1ZTogJywnfVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcEtleXMoKSB7XHJcbiAgcmV0dXJuIGtleXMubWFwKCh7aWQsIHZhbHVlfSkgPT4gKHtcclxuICAgIGlkLFxyXG4gICAgdmFsdWU6IHZhbHVlIHx8IGlkLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgnXycsICcnKSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGlzQm91bmQ6IGZhbHNlXHJcbiAgfSkpXHJcbn0iXX0=
