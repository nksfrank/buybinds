/* global angular */
var contactApp = angular.module("bbApp", [])

.controller("BindsCtrl", ['$scope', '$http', '$timeout', '$q',
    function($scope, $http, $timeout, $q) {
        $scope.init = function() {
        };
        $scope.items = {
            Gear:
            {
                "Knife":"weapon_knife",
                "Defuse kit":"defuser",
                "Kevlar":"vest",
                "Kevlar + Helmet":"vesthelm",
                "Zeus x27":"taser",
            },
            Grenade:
            {
                "Flashbang":"flashbang",
                "Smoke grenade":"smokegrenade",
                "Molotov cocktail":"molotov",
                "Incendiary grenade":"incgrenade",
                "Decoy grenade":"decoy",
                "HE Grenade":"hegrenade",
            },
            Pistol:
            {
                "Dual Berettas":"elite",
                "Five-Seven":"fiveseven",
                "Desert Eagle":"deagle",
                "USP-S":"usp_sliencer",
                "Glock-18":"glock18",
                "CZ75-Auto":"cz75a",
                "P2000":"hkp2000",
                "Tec-9":"tec9",
                "P250":"p250",
            },
            Shotgun:
            {
                "Sawed-Off":"sawedoff",
                "MAG-7":"mag7",
                "Nova":"nova",
                "XM1014":"xm1014",
                "Negev":"negev",
                "M249":"m249",
            },
            Sniper:
            {
                "G3SG1":"g3sg1",
                "SCAR-20":"scar20",
                "SSG 08":"ssg08",
                "AWP":"awp",
            },
            Rifle:{
                "AK-47":"ak47", 
                "M4A4":"m4a1",
                "M4A1-S":"m4a1_silencer", 
                "FAMAS":"famas", 
                "Galil AR":"galilar", 
                "SG 553":"sg553", 
                "Bullpup":"aug",
            }, 
            Smg:
            {
                "P90":"p90",
                "UMP45":"ump45",
                "MAC-10":"mac10",
                "MP7":"mp7",
                "MP9":"mp9",
                "Bizon":"bizon",
            }
        };
        
        $scope.numpad = [
            [
                {key:"esc", value:"Esc"},
                {key:"f1", value:"F1"},
                {key:"f2", value:"F2"},
                {key:"f3", value:"F3"},
                {key:"f4", value:"F4"},
                {disabled:true},
                {key:"f5", value:"F5"},
                {key:"f6", value:"F6"},
                {key:"f7", value:"F7"},
                {key:"f8", value:"F8"},
                {disabled:true},
                {key:"f9", value:"F9"},
                {key:"f10", value:"F10"},
                {key:"f11", value:"F11"},
                {key:"f12", value:"F12"},
                {value:"PrtScn",disabled:true},
                {value:"Scroll Lock",disabled:true},
                {value:"Pause Break",disabled:true},
                {disabled:true, colspan:4}
            ],
            [
                {key:"§", value:"§"},
                {key:"1", value:"1"},
                {key:"2", value:"2"},
                {key:"3", value:"3"},
                {key:"4", value:"4"},
                {key:"5", value:"5"},
                {key:"6", value:"6"},
                {key:"7", value:"7"},
                {key:"8", value:"8"},
                {key:"9", value:"9"},
                {key:"0", value:"0"},
                {key:"+", value:"+"},
                {key:"´", value:"´"},
                {key:"backspace", value:"Backspace", colspan:2},
                
                {key:"home",value:"Home"},
                {key:"ins",value:"Insert"},
                {key:"pgup",value:"Page Up"},
                
                {value:"Num Lock", disabled:true},
                {key:"kp_slash", value:"/"},
                {key:"kp_multiply", value:"*"},
                {key:"kp_minus", value:"-"},
            ],
            [
                {key:"tab", value:"Tab"},
                {key:"q", value:"Q"},
                {key:"w", value:"W"},
                {key:"e", value:"E"},
                {key:"r", value:"R"},
                {key:"t", value:"T"},
                {key:"y", value:"Y"},
                {key:"u", value:"U"},
                {key:"i", value:"I"},
                {key:"o", value:"O"},
                {key:"p", value:"P"},
                {key:"å", value:"Å"},
                {key:"¨", value:"¨"},
                {key:"enter", value:"Enter", colspan:2, rowspan:2},
                
                {key:"del",value:"Delete"},
                {key:"end",value:"End"},
                {key:"pgdn",value:"Page Down"},
                
                {key:"kp_home", value:"7"},
                {key:"kp_uparrow", value:"8"},
                {key:"kp_pgup", value:"9"},
                {key:"kp_plus", value:"+", rowspan:2},
            ],
            [
                {key:"capslock",value:"Caps Lock"},
                {key:"a",value:"A"},
                {key:"s",value:"S"},
                {key:"d",value:"D"},
                {key:"f",value:"F"},
                {key:"g",value:"G"},
                {key:"h",value:"H"},
                {key:"j",value:"J"},
                {key:"k",value:"K"},
                {key:"l",value:"L"},
                {key:"ö",value:"Ö"},
                {key:"ä",value:"Ä"},
                {key:"'",value:"'"},
                
                {disabled:true, colspan:3},
                
                {key:"kp_leftarrow", value:"4"},
                {key:"kp_5", value:"5"},
                {key:"kp_rightarrow", value:"6"},
            ],
            [
                {key:"_shift",value:"Shift"},
                {key:"<",value:"<"},
                {key:"z",value:"Z"},
                {key:"x",value:"X"},
                {key:"c",value:"C"},
                {key:"v",value:"V"},
                {key:"b",value:"B"},
                {key:"n",value:"N"},
                {key:"m",value:"M"},
                {key:",",value:","},
                {key:".",value:"."},
                {key:"-",value:"-"},
                {key:"_shift", value:"Shift", colspan:3},
                
                {disabled:true},
                {key:"uparrow",value:"Up"},
                {disabled:true},
                
                {key:"kp_end", value:"1"},
                {key:"kp_downarrow", value:"2"},
                {key:"kp_pgdn", value:"3"},
                {key:"kp_enter", value:"Enter", rowspan:2},
            ],
            [
                {key:"ctrl",value:"Ctrl"},
                {disabled:true},
                {key:"alt",value:"Alt"},
                {key:"space",value:"Space", colspan:7},
                {key:"alt",value:"Alt"},
                {disabled:true, colspan:2},
                {key:"ctrl", value:"Ctrl", colspan:2},
                
                {key:"leftarrow",value:"Left"},
                {key:"downarrow",value:"Down"},
                {key:"rightarrow",value:"Right"},
                
                {key:"kp_ins", value:"0", colspan:2},
                {key:"kp_del", value:","},
            ],
        ];
        
        $scope.cmd = "buy";
        $scope.key =  "";
        $scope.binds = [];
        
        $scope.setSelect = function(key) {
            if(key.disabled == true) return;
            $scope.key = key.key;
        };
        
        $scope.isSelected = function(key) {
            return $scope.key === key.key;
        };
        
        $scope.hasBind = function(key) {
            return key.key in $scope.binds;
        };
        
        $scope.getBinds = function() {
            return $scope.binds[$scope.key];
        };
        
        $scope.setBind = function(item) {
            if($scope.key == "") throw new Error("A key is required");
            if($scope.binds[$scope.key] === undefined)
                $scope.binds[$scope.key] = [];
            $scope.binds[$scope.key].push($scope.cmd + " " + item);
        };
        
        $scope.deleteBind = function(i) {
            $scope.binds[$scope.key].splice(i,1);
            if($scope.binds[$scope.key].length == 0)
                delete $scope.binds[$scope.key];
        };
        
        $scope.genereateBinds = function() {
            if(Object.keys($scope.binds).length === 0) throw new Error("Must add a bind");
            var bind = "";
            for(var key in $scope.binds) {
                bind += "bind \"" + key.replace('_shift', 'shift') + "\" \"";
                $scope.binds[key].forEach(function x(item) {
                    bind += item + ";";
                });
                bind += "\" " +"\r\n";
            }
            $scope.output = bind.trim();
        };
        
        $scope.init();
    }]);
    
/*
$(function() {
    $("td").on("keydown change", function() {
        console.log("woop");
    });
});
*/