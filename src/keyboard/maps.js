
const keys = [
  { id: '~', grid: 'tilde'},
  { id: '_1'},
  { id: '_2'},
  { id: '_3'},
  { id: '_4'},
  { id: '_5'},
  { id: '_6'},
  { id: '_7'},
  { id: '_8'},
  { id: '_9'},
  { id: '_0'},
  { id: '-', grid: 'minus'},
  { id: '=', grid: 'equal'},
  { id: 'backspace'},

  { id: 'tab'},
  { id: 'q'},
  { id: 'w'},
  { id: 'e'},
  { id: 'r'},
  { id: 't'},
  { id: 'y'},
  { id: 'u'},
  { id: 'i'},
  { id: 'o'},
  { id: 'p'},
  { id: '[', grid: 'obracket'},
  { id: ']', grid: 'cbracket'},
  { id: '\\', grid: 'backslash'},

  { id: 'capslock', value: 'CAPS'},
  { id: 'a', value: 'A'},
  { id: 's', value: 'S'},
  { id: 'd', value: 'D'},
  { id: 'f', value: 'F'},
  { id: 'g', value: 'G'},
  { id: 'h', value: 'H'},
  { id: 'j', value: 'J'},
  { id: 'k', value: 'K'},
  { id: 'l', value: 'L'},
  { id: ';', grid: 'semicolon'},
  { id: '\'', grid: 'tick'},
  { id: 'enter'},

  { id: 'l_shift', value: 'SHIFT'},
  { id: 'z'},
  { id: 'x'},
  { id: 'c'},
  { id: 'v'},
  { id: 'b'},
  { id: 'n'},
  { id: 'm'},
  { id: ',', grid: 'colon'},
  { id: '.', grid: 'dot'},
  { id: '/', grid: 'slash'},
  { id: 'r_shift', value: 'SHIFT'},

  { id: 'l_ctrl', value: 'CTRL'},
  { id: 'alt', value: 'ALT'},
  { id: 'space', value: 'SPACE'},
  { id: 'altgr', value: 'ALT'},
  { id: 'r_ctrl', value: 'CTRL'},


  { id: 'ins', value: 'INSERT'},
  { id: 'home', value: 'HOME'},
  { id: 'pgup', value: 'PAGE UP'},

  { id: 'del', value: 'DELETE'},
  { id: 'end', value: 'END'},
  { id: 'pgdn', value: 'PAGE DOWN'},

  { id: 'uparrow', value: 'Up'},
  { id: 'leftarrow', value: 'LEFT'},
  { id: 'downarrow', value: 'DOWN'},
  { id: 'rightarrow', value: 'RIGHT'},


  { id: 'numlock', value: 'NUM LOCK'},
  { id: 'kp_slash', value: '/'},
  { id: 'kp_multiply', value: '*'},
  { id: 'kp_minus', value: '-'},

  { id: 'kp_home', value: '7'},
  { id: 'kp_uparrow', value: '8'},
  { id: 'kp_pgup', value: '9'},

  { id: 'kp_leftarrow', value: '4'},
  { id: 'kp_5', value: '5'},
  { id: 'kp_rightarrow', value: '6'},

  { id: 'kp_end', value: '1'},
  { id: 'kp_downarrow', value: '2'},
  { id: 'kp_pgdn', value: '3'},

  { id: 'kp_plus', value: '+'},
  { id: 'kp_enter', value: 'ENTER'},
  { id: 'kp_ins', value: '0'},
  { id: 'kp_del', value: ','}
];

export function mapKeys() {
  return keys.map(({id, value, grid}) => ({
    id,
    value: value || id.toUpperCase().replace('_', ''),
    grid: grid || id,
    disabled: false,
    isBound: false,
    getKey:() => {
      return this;
      const i = id.indexOf('_');
      return i === -1 ? id : id.substr(i+1);
    }
  }))
}