(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapGuns = mapGuns;
var guns = exports.guns = {
  rifle: [{
    value: "AK-47",
    bind: "ak47"
  }, {
    value: "M4A4",
    bind: "m4a1"
  }, {
    value: "M4A1-S",
    bind: "m4a1_silencer"
  }, {
    value: "FAMAS",
    bind: "famas"
  }, {
    value: "Galil AR",
    bind: "galilar"
  }, {
    value: "SG 553",
    bind: "sg553"
  }, {
    value: "Bullpup",
    bind: "aug"
  }],
  sniper: [{
    value: "G3SG1",
    bind: "g3sg1"
  }, {
    value: "SCAR-20",
    bind: "scar20"
  }, {
    value: "SSG 08",
    bind: "ssg08"
  }, {
    value: "AWP",
    bind: "awp"
  }],
  smg: [{
    value: "P90",
    bind: "p90"
  }, {
    value: "UMP45",
    bind: "ump45"
  }, {
    value: "MAC-10",
    bind: "mac10"
  }, {
    value: "MP7",
    bind: "mp7"
  }, {
    value: "MP9",
    bind: "mp9"
  }, {
    value: "Bizon",
    bind: "bizon"
  }],
  shotgun: [{
    value: "Sawed-Off",
    bind: "sawedoff"
  }, {
    value: "MAG-7",
    bind: "mag7"
  }, {
    value: "Nova",
    bind: "nova"
  }, {
    value: "XM1014",
    bind: "xm1014"
  }, {
    value: "Negev",
    bind: "negev"
  }, {
    value: "M249",
    bind: "m249"
  }],
  pistols: [{
    value: "Dual Berettas",
    bind: "elite"
  }, {
    value: "Five-Seven",
    bind: "fiveseven"
  }, {
    value: "Desert Eagle",
    bind: "deagle"
  }, {
    value: "USP-S",
    bind: "usp_sliencer"
  }, {
    value: "Glock-18",
    bind: "glock18"
  }, {
    value: "CZ75-Auto",
    bind: "cz75a"
  }, {
    value: "P2000",
    bind: "hkp2000"
  }, {
    value: "Tec-9",
    bind: "tec9"
  }, {
    value: "P250",
    bind: "p250"
  }],
  equipment: [{
    value: "Knife",
    bind: "weapon_knife"
  }, {
    value: "Defuse kit",
    bind: "defuser"
  }, {
    value: "Kevlar",
    bind: "vest"
  }, {
    value: "Kevlar + Helmet",
    bind: "vesthelm"
  }, {
    value: "Zeus x27",
    bind: "taser"
  }],
  grenade: [{
    value: "Flashbang",
    bind: "flashbang"
  }, {
    value: "Smoke grenade",
    bind: "smokegrenade"
  }, {
    value: "Molotov cocktail",
    bind: "molotov"
  }, {
    value: "Incendiary grenade",
    bind: "incgrenade"
  }, {
    value: "Decoy grenade",
    bind: "decoy"
  }, {
    value: "HE Grenade",
    bind: "hegrenade"
  }]
};

function mapGuns() {
  return guns.map(function (_ref) {
    var value = _ref.value,
        bind = _ref.bind;
    return {
      id: id,
      value: value,
      bind: bind
    };
  });
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bind = undefined;

var _react = require('public/react');

var _react2 = _interopRequireDefault(_react);

var _guns = require('./guns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bind = exports.Bind = function Bind(_ref) {
  var selectedKey = _ref.selectedKey,
      onKeyBind = _ref.onKeyBind;
  return _react2.default.createElement(
    'div',
    null,
    'Bind',
    _react2.default.createElement(
      'div',
      null,
      selectedKey.getKey && selectedKey.getKey()
    ),
    _react2.default.createElement(
      'div',
      null,
      _guns.guns.rifle.map(function (_ref2) {
        var value = _ref2.value,
            bind = _ref2.bind;
        return _react2.default.createElement(
          'button',
          { key: bind, onClick: function onClick() {
              return onKeyBind(bind);
            } },
          value
        );
      })
    )
  );
};

},{"./guns":1,"react":"react"}],3:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('public/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _keyboard = require('./keyboard');

var _bind = require('./bind');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      binds: [],
      selectedKey: {}
      // selectedKeys: []
    };

    _this.onKeySelect = _this.onKeySelect.bind(_this);
    _this.onKeyBind = _this.onKeyBind.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onKeySelect',
    value: function onKeySelect(key) {
      this.setState({ selectedKey: this.state.selectedKey.id === key.id ? {} : key });
      // const index = this.state.selectedKeys.indexOf(id);
      // if(index === -1) {
      //   this.setState({selectedKeys: [...this.state.selectedKeys, id]});
      // } else {
      //   this.setState({selectedKeys: this.state.selectedKeys.filter(s => s !== id)});
      // }
    }
  }, {
    key: 'onKeyBind',
    value: function onKeyBind(bind) {
      this.setState({ binds: [].concat(_toConsumableArray(this.state.binds), [{ key: this.state.selectedKey.id, bind: bind }]), selectedKey: undefined });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_keyboard.Keyboard, _extends({ onKeySelect: this.onKeySelect }, this.state)),
        _react2.default.createElement(_bind.Bind, _extends({}, this.state, { onKeyBind: this.onKeyBind }))
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

},{"./bind":2,"./keyboard":4,"react":"react","react-dom":"react-dom"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keyboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('public/react');

var _react2 = _interopRequireDefault(_react);

var _key = require('./key');

var _maps = require('./maps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Keyboard = exports.Keyboard = function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard(props) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, props));

    _this.state = {
      keys: (0, _maps.mapKeys)()
    };

    _this.isSelected = _this.isSelected.bind(_this);
    _this.isBound = _this.isBound.bind(_this);
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'isSelected',
    value: function isSelected(_ref) {
      var id = _ref.id;

      return this.props.selectedKey.id === id;
      // return this.props.selectedKeys.indexOf(id) > -1;
    }
  }, {
    key: 'isBound',
    value: function isBound(_ref2) {
      var id = _ref2.id;

      return this.props.binds.some(function (_ref3) {
        var key = _ref3.key;
        key === id;
      });
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
            onClick: function onClick() {
              return _this2.props.onKeySelect(key);
            }
          }, key));
        })
      );
    }
  }]);

  return Keyboard;
}(_react2.default.Component);

;

},{"./key":5,"./maps":6,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Key = undefined;

var _react = require('public/react');

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
        return !disabled && _onClick();
      },
      style: { 'gridArea': grid }
    },
    value
  );
};

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapKeys = mapKeys;

var keys = [{ id: '~', grid: 'tilde' }, { id: '_1' }, { id: '_2' }, { id: '_3' }, { id: '_4' }, { id: '_5' }, { id: '_6' }, { id: '_7' }, { id: '_8' }, { id: '_9' }, { id: '_0' }, { id: '-', grid: 'minus' }, { id: '=', grid: 'equal' }, { id: 'backspace' }, { id: 'tab' }, { id: 'q' }, { id: 'w' }, { id: 'e' }, { id: 'r' }, { id: 't' }, { id: 'y' }, { id: 'u' }, { id: 'i' }, { id: 'o' }, { id: 'p' }, { id: '[', grid: 'obracket' }, { id: ']', grid: 'cbracket' }, { id: '\\', grid: 'backslash' }, { id: 'capslock', value: 'CAPS' }, { id: 'a', value: 'A' }, { id: 's', value: 'S' }, { id: 'd', value: 'D' }, { id: 'f', value: 'F' }, { id: 'g', value: 'G' }, { id: 'h', value: 'H' }, { id: 'j', value: 'J' }, { id: 'k', value: 'K' }, { id: 'l', value: 'L' }, { id: ';', grid: 'semicolon' }, { id: '\'', grid: 'tick' }, { id: 'enter' }, { id: 'l_shift', value: 'SHIFT' }, { id: 'z' }, { id: 'x' }, { id: 'c' }, { id: 'v' }, { id: 'b' }, { id: 'n' }, { id: 'm' }, { id: ',', grid: 'colon' }, { id: '.', grid: 'dot' }, { id: '/', grid: 'slash' }, { id: 'r_shift', value: 'SHIFT' }, { id: 'l_ctrl', value: 'CTRL' }, { id: 'alt', value: 'ALT' }, { id: 'space', value: 'SPACE' }, { id: 'altgr', value: 'ALT' }, { id: 'r_ctrl', value: 'CTRL' }, { id: 'ins', value: 'INSERT' }, { id: 'home', value: 'HOME' }, { id: 'pgup', value: 'PAGE UP' }, { id: 'del', value: 'DELETE' }, { id: 'end', value: 'END' }, { id: 'pgdn', value: 'PAGE DOWN' }, { id: 'uparrow', value: 'Up' }, { id: 'leftarrow', value: 'LEFT' }, { id: 'downarrow', value: 'DOWN' }, { id: 'rightarrow', value: 'RIGHT' }, { id: 'numlock', value: 'NUM LOCK' }, { id: 'kp_slash', value: '/' }, { id: 'kp_multiply', value: '*' }, { id: 'kp_minus', value: '-' }, { id: 'kp_home', value: '7' }, { id: 'kp_uparrow', value: '8' }, { id: 'kp_pgup', value: '9' }, { id: 'kp_leftarrow', value: '4' }, { id: 'kp_5', value: '5' }, { id: 'kp_rightarrow', value: '6' }, { id: 'kp_end', value: '1' }, { id: 'kp_downarrow', value: '2' }, { id: 'kp_pgdn', value: '3' }, { id: 'kp_plus', value: '+' }, { id: 'kp_enter', value: 'ENTER' }, { id: 'kp_ins', value: '0' }, { id: 'kp_del', value: ',' }];

function mapKeys() {
  var _this = this;

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
        return _this;
        var i = id.indexOf('_');
        return i === -1 ? id : id.substr(i + 1);
      }
    };
  });
}

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9zcmMvYXBwL3NyYy9iaW5kL2d1bnMuanMiLCIvc3JjL2FwcC9zcmMvYmluZC9pbmRleC5qc3giLCIvc3JjL2FwcC9zcmMvaW5kZXguanN4IiwiL3NyYy9hcHAvc3JjL2tleWJvYXJkL2luZGV4LmpzeCIsIi9zcmMvYXBwL3NyYy9rZXlib2FyZC9rZXkuanN4IiwiL3NyYy9hcHAvc3JjL2tleWJvYXJkL21hcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQzZMZ0IsTyxHQUFBLE87QUE3TFQsSUFBTSxzQkFBTztBQUNsQixTQUFPLENBQ0w7QUFDRSxXQUFPLE9BRFQ7QUFFRSxVQUFNO0FBRlIsR0FESyxFQUtMO0FBQ0UsV0FBTyxNQURUO0FBRUUsVUFBTTtBQUZSLEdBTEssRUFTTDtBQUNFLFdBQU8sUUFEVDtBQUVFLFVBQU07QUFGUixHQVRLLEVBYUw7QUFDRSxXQUFPLE9BRFQ7QUFFRSxVQUFNO0FBRlIsR0FiSyxFQWlCTDtBQUNFLFdBQU8sVUFEVDtBQUVFLFVBQU07QUFGUixHQWpCSyxFQXFCTDtBQUNFLFdBQU8sUUFEVDtBQUVFLFVBQU07QUFGUixHQXJCSyxFQXlCTDtBQUNFLFdBQU8sU0FEVDtBQUVFLFVBQU07QUFGUixHQXpCSyxDQURXO0FBK0JsQixVQUFRLENBQ047QUFDRSxXQUFPLE9BRFQ7QUFFRSxVQUFNO0FBRlIsR0FETSxFQUtOO0FBQ0UsV0FBTyxTQURUO0FBRUUsVUFBTTtBQUZSLEdBTE0sRUFTTjtBQUNFLFdBQU8sUUFEVDtBQUVFLFVBQU07QUFGUixHQVRNLEVBYU47QUFDRSxXQUFPLEtBRFQ7QUFFRSxVQUFNO0FBRlIsR0FiTSxDQS9CVTtBQWlEbEIsT0FBSyxDQUNIO0FBQ0UsV0FBTyxLQURUO0FBRUUsVUFBTTtBQUZSLEdBREcsRUFLSDtBQUNFLFdB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SUFBSSxVQUFOLEVBQWtCLE9BQU8sT0FBekIsRUFqR1csRUFrR1gsRUFBRSxJQUFJLFFBQU4sRUFBZ0IsT0FBTyxHQUF2QixFQWxHVyxFQW1HWCxFQUFFLElBQUksUUFBTixFQUFnQixPQUFPLEdBQXZCLEVBbkdXLENBQWI7O0FBc0dPLFNBQVMsT0FBVCxHQUFtQjtBQUFBOztBQUN4QixTQUFPLEtBQUssR0FBTCxDQUFTO0FBQUEsUUFBRSxFQUFGLFFBQUUsRUFBRjtBQUFBLFFBQU0sS0FBTixRQUFNLEtBQU47QUFBQSxRQUFhLElBQWIsUUFBYSxJQUFiO0FBQUEsV0FBd0I7QUFDdEMsWUFEc0M7QUFFdEMsYUFBTyxTQUFTLEdBQUcsV0FBSCxHQUFpQixPQUFqQixDQUF5QixHQUF6QixFQUE4QixFQUE5QixDQUZzQjtBQUd0QyxZQUFNLFFBQVEsRUFId0I7QUFJdEMsZ0JBQVUsS0FKNEI7QUFLdEMsZUFBUyxLQUw2QjtBQU10QyxjQUFPLGtCQUFNO0FBQ1g7QUFDQSxZQUFNLElBQUksR0FBRyxPQUFILENBQVcsR0FBWCxDQUFWO0FBQ0EsZUFBTyxNQUFNLENBQUMsQ0FBUCxHQUFXLEVBQVgsR0FBZ0IsR0FBRyxNQUFILENBQVUsSUFBRSxDQUFaLENBQXZCO0FBQ0Q7QUFWcUMsS0FBeEI7QUFBQSxHQUFULENBQVA7QUFZRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY29uc3QgZ3VucyA9IHtcclxuICByaWZsZTogW1xyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJBSy00N1wiLFxyXG4gICAgICBiaW5kOiBcImFrNDdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiTTRBNFwiLFxyXG4gICAgICBiaW5kOiBcIm00YTFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiTTRBMS1TXCIsXHJcbiAgICAgIGJpbmQ6IFwibTRhMV9zaWxlbmNlclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJGQU1BU1wiLFxyXG4gICAgICBiaW5kOiBcImZhbWFzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIkdhbGlsIEFSXCIsXHJcbiAgICAgIGJpbmQ6IFwiZ2FsaWxhclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJTRyA1NTNcIixcclxuICAgICAgYmluZDogXCJzZzU1M1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJCdWxscHVwXCIsXHJcbiAgICAgIGJpbmQ6IFwiYXVnXCJcclxuICAgIH1cclxuICBdLFxyXG4gIHNuaXBlcjogW1xyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJHM1NHMVwiLFxyXG4gICAgICBiaW5kOiBcImczc2cxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIlNDQVItMjBcIixcclxuICAgICAgYmluZDogXCJzY2FyMjBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiU1NHIDA4XCIsXHJcbiAgICAgIGJpbmQ6IFwic3NnMDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiQVdQXCIsXHJcbiAgICAgIGJpbmQ6IFwiYXdwXCJcclxuICAgIH1cclxuICBdLFxyXG4gIHNtZzogW1xyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJQOTBcIixcclxuICAgICAgYmluZDogXCJwOTBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiVU1QNDVcIixcclxuICAgICAgYmluZDogXCJ1bXA0NVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJNQUMtMTBcIixcclxuICAgICAgYmluZDogXCJtYWMxMFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJNUDdcIixcclxuICAgICAgYmluZDogXCJtcDdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiTVA5XCIsXHJcbiAgICAgIGJpbmQ6IFwibXA5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIkJpem9uXCIsXHJcbiAgICAgIGJpbmQ6IFwiYml6b25cIlxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc2hvdGd1bjogW1xyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJTYXdlZC1PZmZcIixcclxuICAgICAgYmluZDogXCJzYXdlZG9mZlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJNQUctN1wiLFxyXG4gICAgICBiaW5kOiBcIm1hZzdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiTm92YVwiLFxyXG4gICAgICBiaW5kOiBcIm5vdmFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiWE0xMDE0XCIsXHJcbiAgICAgIGJpbmQ6IFwieG0xMDE0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIk5lZ2V2XCIsXHJcbiAgICAgIGJpbmQ6IFwibmVnZXZcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiTTI0OVwiLFxyXG4gICAgICBiaW5kOiBcIm0yNDlcIlxyXG4gICAgfVxyXG4gIF0sXHJcbiAgcGlzdG9sczogW1xyXG4gICAge1xyXG4gICAgICB2YWx1ZTpcIkR1YWwgQmVyZXR0YXNcIixcclxuICAgICAgYmluZDogXCJlbGl0ZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTpcIkZpdmUtU2V2ZW5cIixcclxuICAgICAgYmluZDogXCJmaXZlc2V2ZW5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6XCJEZXNlcnQgRWFnbGVcIixcclxuICAgICAgYmluZDogXCJkZWFnbGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6XCJVU1AtU1wiLFxyXG4gICAgICBiaW5kOiBcInVzcF9zbGllbmNlclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTpcIkdsb2NrLTE4XCIsXHJcbiAgICAgIGJpbmQ6IFwiZ2xvY2sxOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTpcIkNaNzUtQXV0b1wiLFxyXG4gICAgICBiaW5kOiBcImN6NzVhXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOlwiUDIwMDBcIixcclxuICAgICAgYmluZDogXCJoa3AyMDAwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOlwiVGVjLTlcIixcclxuICAgICAgYmluZDogXCJ0ZWM5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOlwiUDI1MFwiLFxyXG4gICAgICBiaW5kOiBcInAyNTBcIlxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZXF1aXBtZW50OiBbXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIktuaWZlXCIsXHJcbiAgICAgIGJpbmQ6IFwid2VhcG9uX2tuaWZlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIkRlZnVzZSBraXRcIixcclxuICAgICAgYmluZDogXCJkZWZ1c2VyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIktldmxhclwiLFxyXG4gICAgICBiaW5kOiBcInZlc3RcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiS2V2bGFyICsgSGVsbWV0XCIsXHJcbiAgICAgIGJpbmQ6IFwidmVzdGhlbG1cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiWmV1cyB4MjdcIixcclxuICAgICAgYmluZDogXCJ0YXNlclwiXHJcbiAgICB9XHJcbiAgXSxcclxuICBncmVuYWRlOiBbXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIkZsYXNoYmFuZ1wiLFxyXG4gICAgICBiaW5kOiBcImZsYXNoYmFuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogXCJTbW9rZSBncmVuYWRlXCIsXHJcbiAgICAgIGJpbmQ6IFwic21va2VncmVuYWRlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIk1vbG90b3YgY29ja3RhaWxcIixcclxuICAgICAgYmluZDogXCJtb2xvdG92XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIkluY2VuZGlhcnkgZ3JlbmFkZVwiLFxyXG4gICAgICBiaW5kOiBcImluY2dyZW5hZGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IFwiRGVjb3kgZ3JlbmFkZVwiLFxyXG4gICAgICBiaW5kOiBcImRlY295XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiBcIkhFIEdyZW5hZGVcIixcclxuICAgICAgYmluZDogXCJoZWdyZW5hZGVcIlxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcEd1bnMoKSB7XHJcbiAgcmV0dXJuIGd1bnMubWFwKCh7dmFsdWUsIGJpbmR9KSA9PiAoe1xyXG4gICAgaWQsXHJcbiAgICB2YWx1ZSxcclxuICAgIGJpbmRcclxuICB9KSk7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2d1bnN9IGZyb20gJy4vZ3Vucyc7XHJcblxyXG5leHBvcnQgY29uc3QgQmluZCA9ICh7XHJcbiAgc2VsZWN0ZWRLZXksXHJcbiAgb25LZXlCaW5kXHJcbn0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgQmluZFxyXG4gICAgPGRpdj57c2VsZWN0ZWRLZXkuZ2V0S2V5ICYmIHNlbGVjdGVkS2V5LmdldEtleSgpfTwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAge2d1bnMucmlmbGUubWFwKCh7dmFsdWUsIGJpbmR9KSA9PlxyXG4gICAgICAgIDxidXR0b24ga2V5PXtiaW5kfSBvbkNsaWNrPXsoKSA9PiBvbktleUJpbmQoYmluZCl9Pnt2YWx1ZX08L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge0tleWJvYXJkfSBmcm9tICcuL2tleWJvYXJkJztcclxuaW1wb3J0IHtCaW5kfSBmcm9tICcuL2JpbmQnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYmluZHM6IFtdLFxyXG4gICAgICBzZWxlY3RlZEtleToge30sXHJcbiAgICAgIC8vIHNlbGVjdGVkS2V5czogW11cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uS2V5U2VsZWN0ID0gdGhpcy5vbktleVNlbGVjdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbktleUJpbmQgPSB0aGlzLm9uS2V5QmluZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlTZWxlY3Qoa2V5KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEtleTogdGhpcy5zdGF0ZS5zZWxlY3RlZEtleS5pZCA9PT0ga2V5LmlkID8ge30gOiBrZXl9KTtcclxuICAgIC8vIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMuaW5kZXhPZihpZCk7XHJcbiAgICAvLyBpZihpbmRleCA9PT0gLTEpIHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRLZXlzOiBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMsIGlkXX0pO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRLZXlzOiB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cy5maWx0ZXIocyA9PiBzICE9PSBpZCl9KTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG9uS2V5QmluZChiaW5kKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtiaW5kczogWy4uLnRoaXMuc3RhdGUuYmluZHMsIHtrZXk6IHRoaXMuc3RhdGUuc2VsZWN0ZWRLZXkuaWQsIGJpbmR9XSwgc2VsZWN0ZWRLZXk6IHVuZGVmaW5lZH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEtleWJvYXJkIG9uS2V5U2VsZWN0PXt0aGlzLm9uS2V5U2VsZWN0fSB7Li4udGhpcy5zdGF0ZX0gLz5cclxuICAgICAgICA8QmluZCB7Li4udGhpcy5zdGF0ZX0gb25LZXlCaW5kPXt0aGlzLm9uS2V5QmluZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0tleX0gZnJvbSAnLi9rZXknO1xyXG5pbXBvcnQge21hcEtleXN9IGZyb20gJy4vbWFwcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBrZXlzOiBtYXBLZXlzKClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaXNCb3VuZCA9IHRoaXMuaXNCb3VuZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZCh7aWR9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RlZEtleS5pZCA9PT0gaWQ7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RlZEtleXMuaW5kZXhPZihpZCkgPiAtMTtcclxuICB9XHJcblxyXG4gIGlzQm91bmQoe2lkfSkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYmluZHMuc29tZSgoe2tleX0pID0+IHtrZXkgPT09IGlkfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5rZXlzLm1hcChrZXkgPT5cclxuICAgICAgICAgIDxLZXlcclxuICAgICAgICAgICAga2V5PXtrZXkuaWR9XHJcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RoaXMuaXNTZWxlY3RlZChrZXkpfVxyXG4gICAgICAgICAgICBpc0JvdW5kPXt0aGlzLmlzQm91bmQoa2V5KX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbktleVNlbGVjdChrZXkpfVxyXG4gICAgICAgICAgICB7Li4ua2V5fVxyXG4gICAgICAgICAgLz4pfVxyXG4gICAgICA8L2Rpdj4pO1xyXG4gIH1cclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtleSA9ICh7XHJcbiAgaWQsXHJcbiAgdmFsdWUsXHJcbiAgZ3JpZCxcclxuICBkaXNhYmxlZCxcclxuICBpc0JvdW5kLFxyXG4gIGlzU2VsZWN0ZWQsXHJcbiAgZ2V0S2V5LFxyXG4gIG9uQ2xpY2tcclxufSkgPT4gKFxyXG4gIDxidXR0b25cclxuICAgIGNsYXNzTmFtZT17YGtleSAke2lkfSR7ZGlzYWJsZWQgPyAnIGRpc2FibGVkJzogJyd9JHtpc0JvdW5kID8gJyBib3VuZCcgOiAnJ30ke2lzU2VsZWN0ZWQgPyAnIHNlbGVjdGVkJzogJyd9YH1cclxuICAgIG9uQ2xpY2s9eygpID0+ICFkaXNhYmxlZCAmJiBvbkNsaWNrKCl9XHJcbiAgICBzdHlsZT17eydncmlkQXJlYSc6IGdyaWR9fVxyXG4gID5cclxuICAgIHt2YWx1ZX1cclxuICA8L2J1dHRvbj5cclxuKTtcclxuIiwiXHJcbmNvbnN0IGtleXMgPSBbXHJcbiAgeyBpZDogJ34nLCBncmlkOiAndGlsZGUnfSxcclxuICB7IGlkOiAnXzEnfSxcclxuICB7IGlkOiAnXzInfSxcclxuICB7IGlkOiAnXzMnfSxcclxuICB7IGlkOiAnXzQnfSxcclxuICB7IGlkOiAnXzUnfSxcclxuICB7IGlkOiAnXzYnfSxcclxuICB7IGlkOiAnXzcnfSxcclxuICB7IGlkOiAnXzgnfSxcclxuICB7IGlkOiAnXzknfSxcclxuICB7IGlkOiAnXzAnfSxcclxuICB7IGlkOiAnLScsIGdyaWQ6ICdtaW51cyd9LFxyXG4gIHsgaWQ6ICc9JywgZ3JpZDogJ2VxdWFsJ30sXHJcbiAgeyBpZDogJ2JhY2tzcGFjZSd9LFxyXG5cclxuICB7IGlkOiAndGFiJ30sXHJcbiAgeyBpZDogJ3EnfSxcclxuICB7IGlkOiAndyd9LFxyXG4gIHsgaWQ6ICdlJ30sXHJcbiAgeyBpZDogJ3InfSxcclxuICB7IGlkOiAndCd9LFxyXG4gIHsgaWQ6ICd5J30sXHJcbiAgeyBpZDogJ3UnfSxcclxuICB7IGlkOiAnaSd9LFxyXG4gIHsgaWQ6ICdvJ30sXHJcbiAgeyBpZDogJ3AnfSxcclxuICB7IGlkOiAnWycsIGdyaWQ6ICdvYnJhY2tldCd9LFxyXG4gIHsgaWQ6ICddJywgZ3JpZDogJ2NicmFja2V0J30sXHJcbiAgeyBpZDogJ1xcXFwnLCBncmlkOiAnYmFja3NsYXNoJ30sXHJcblxyXG4gIHsgaWQ6ICdjYXBzbG9jaycsIHZhbHVlOiAnQ0FQUyd9LFxyXG4gIHsgaWQ6ICdhJywgdmFsdWU6ICdBJ30sXHJcbiAgeyBpZDogJ3MnLCB2YWx1ZTogJ1MnfSxcclxuICB7IGlkOiAnZCcsIHZhbHVlOiAnRCd9LFxyXG4gIHsgaWQ6ICdmJywgdmFsdWU6ICdGJ30sXHJcbiAgeyBpZDogJ2cnLCB2YWx1ZTogJ0cnfSxcclxuICB7IGlkOiAnaCcsIHZhbHVlOiAnSCd9LFxyXG4gIHsgaWQ6ICdqJywgdmFsdWU6ICdKJ30sXHJcbiAgeyBpZDogJ2snLCB2YWx1ZTogJ0snfSxcclxuICB7IGlkOiAnbCcsIHZhbHVlOiAnTCd9LFxyXG4gIHsgaWQ6ICc7JywgZ3JpZDogJ3NlbWljb2xvbid9LFxyXG4gIHsgaWQ6ICdcXCcnLCBncmlkOiAndGljayd9LFxyXG4gIHsgaWQ6ICdlbnRlcid9LFxyXG5cclxuICB7IGlkOiAnbF9zaGlmdCcsIHZhbHVlOiAnU0hJRlQnfSxcclxuICB7IGlkOiAneid9LFxyXG4gIHsgaWQ6ICd4J30sXHJcbiAgeyBpZDogJ2MnfSxcclxuICB7IGlkOiAndid9LFxyXG4gIHsgaWQ6ICdiJ30sXHJcbiAgeyBpZDogJ24nfSxcclxuICB7IGlkOiAnbSd9LFxyXG4gIHsgaWQ6ICcsJywgZ3JpZDogJ2NvbG9uJ30sXHJcbiAgeyBpZDogJy4nLCBncmlkOiAnZG90J30sXHJcbiAgeyBpZDogJy8nLCBncmlkOiAnc2xhc2gnfSxcclxuICB7IGlkOiAncl9zaGlmdCcsIHZhbHVlOiAnU0hJRlQnfSxcclxuXHJcbiAgeyBpZDogJ2xfY3RybCcsIHZhbHVlOiAnQ1RSTCd9LFxyXG4gIHsgaWQ6ICdhbHQnLCB2YWx1ZTogJ0FMVCd9LFxyXG4gIHsgaWQ6ICdzcGFjZScsIHZhbHVlOiAnU1BBQ0UnfSxcclxuICB7IGlkOiAnYWx0Z3InLCB2YWx1ZTogJ0FMVCd9LFxyXG4gIHsgaWQ6ICdyX2N0cmwnLCB2YWx1ZTogJ0NUUkwnfSxcclxuXHJcblxyXG4gIHsgaWQ6ICdpbnMnLCB2YWx1ZTogJ0lOU0VSVCd9LFxyXG4gIHsgaWQ6ICdob21lJywgdmFsdWU6ICdIT01FJ30sXHJcbiAgeyBpZDogJ3BndXAnLCB2YWx1ZTogJ1BBR0UgVVAnfSxcclxuXHJcbiAgeyBpZDogJ2RlbCcsIHZhbHVlOiAnREVMRVRFJ30sXHJcbiAgeyBpZDogJ2VuZCcsIHZhbHVlOiAnRU5EJ30sXHJcbiAgeyBpZDogJ3BnZG4nLCB2YWx1ZTogJ1BBR0UgRE9XTid9LFxyXG5cclxuICB7IGlkOiAndXBhcnJvdycsIHZhbHVlOiAnVXAnfSxcclxuICB7IGlkOiAnbGVmdGFycm93JywgdmFsdWU6ICdMRUZUJ30sXHJcbiAgeyBpZDogJ2Rvd25hcnJvdycsIHZhbHVlOiAnRE9XTid9LFxyXG4gIHsgaWQ6ICdyaWdodGFycm93JywgdmFsdWU6ICdSSUdIVCd9LFxyXG5cclxuXHJcbiAgeyBpZDogJ251bWxvY2snLCB2YWx1ZTogJ05VTSBMT0NLJ30sXHJcbiAgeyBpZDogJ2twX3NsYXNoJywgdmFsdWU6ICcvJ30sXHJcbiAgeyBpZDogJ2twX211bHRpcGx5JywgdmFsdWU6ICcqJ30sXHJcbiAgeyBpZDogJ2twX21pbnVzJywgdmFsdWU6ICctJ30sXHJcblxyXG4gIHsgaWQ6ICdrcF9ob21lJywgdmFsdWU6ICc3J30sXHJcbiAgeyBpZDogJ2twX3VwYXJyb3cnLCB2YWx1ZTogJzgnfSxcclxuICB7IGlkOiAna3BfcGd1cCcsIHZhbHVlOiAnOSd9LFxyXG5cclxuICB7IGlkOiAna3BfbGVmdGFycm93JywgdmFsdWU6ICc0J30sXHJcbiAgeyBpZDogJ2twXzUnLCB2YWx1ZTogJzUnfSxcclxuICB7IGlkOiAna3BfcmlnaHRhcnJvdycsIHZhbHVlOiAnNid9LFxyXG5cclxuICB7IGlkOiAna3BfZW5kJywgdmFsdWU6ICcxJ30sXHJcbiAgeyBpZDogJ2twX2Rvd25hcnJvdycsIHZhbHVlOiAnMid9LFxyXG4gIHsgaWQ6ICdrcF9wZ2RuJywgdmFsdWU6ICczJ30sXHJcblxyXG4gIHsgaWQ6ICdrcF9wbHVzJywgdmFsdWU6ICcrJ30sXHJcbiAgeyBpZDogJ2twX2VudGVyJywgdmFsdWU6ICdFTlRFUid9LFxyXG4gIHsgaWQ6ICdrcF9pbnMnLCB2YWx1ZTogJzAnfSxcclxuICB7IGlkOiAna3BfZGVsJywgdmFsdWU6ICcsJ31cclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBLZXlzKCkge1xyXG4gIHJldHVybiBrZXlzLm1hcCgoe2lkLCB2YWx1ZSwgZ3JpZH0pID0+ICh7XHJcbiAgICBpZCxcclxuICAgIHZhbHVlOiB2YWx1ZSB8fCBpZC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnJyksXHJcbiAgICBncmlkOiBncmlkIHx8IGlkLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaXNCb3VuZDogZmFsc2UsXHJcbiAgICBnZXRLZXk6KCkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgICAgY29uc3QgaSA9IGlkLmluZGV4T2YoJ18nKTtcclxuICAgICAgcmV0dXJuIGkgPT09IC0xID8gaWQgOiBpZC5zdWJzdHIoaSsxKTtcclxuICAgIH1cclxuICB9KSlcclxufSJdfQ==
