/* global angular */
var contactApp = angular.module("bbApp", [])

.controller("BindsCtrl", ['$scope', '$http', '$timeout', '$q',
    function($scope, $http, $timeout, $q) {
        $scope.init = function() {
        }
        $scope.items = {
            Gear:
            {
                "Knife":"weapon_knife",
                "Defuse kit":"item_Defuser",
                "Kevlar":"item_kevlar",
                "Kevlar + Helmet":"item_assaultsuit",
                "Zeus x27":"weapon_taser",
            },
            Grenade:
            {
                "Flashbang":"weapon_flashbang",
                "Smoke grenade":"weapon_smokegrenade",
                "Molotov cocktail":"weapon_molotov",
                "Incendiary grenade":"weapon_incendiary",
                "Decoy grenade":"weapon_decoy",
                "HE Grenade":"weapon_hegrenade",
            },
            Pistol:
            {
                "Dual Berettas":"weapon_elite",
                "Five-SeveN":"weapon_fiveseven",
                "Desert Eagle":"weapon_deagle",
                "USP-S":"weapon_usp_sliencer",
                "Glock-18":"weapon_glock18",
                "CZ75-Auto":"weapon_cz75a",
                "P2000":"weapon_hkp2000",
                "Tec-9":"weapon_tec9",
            },
            Shotgun:
            {
                "Sawed-Off":"weapon_sawedoff",
                "MAG-7":"weapon_mag7",
                "Nova":"weapon_nova",
                "XM1014":"weapon_xm1014",
                "Negev":"weapon_negev",
                "M249":"weapon_249",
            },
            Sniper:
            {
                "SCAR-20":"weapon_scar20",
                "SSG 08":"weapon_ssg08",
                "AWP":"weapon_awp",
            },
            Rifle:{
                "AK-47":"weapon_ak47", 
                "M4A1-S":"weapon_m4a1_silencer", 
                "M4A4":"weapon_m4a1", 
                "FAMAS":"weapon_famas", 
                "Galil AR":"weapon_galilar", 
                "SG 553":"weapon_sg553", 
                "Bullpup":"weapon_aug",
            }, 
            Smg:
            {
                "P90":"weapon_p90",
                "UMP45":"weapon_ump45",
                "MAC-10":"weapon_mac10",
                "MP7":"weapon_mp7",
                "MP9":"weapon_mp9",
            }
        };
        
        $scope.numpad = [
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
                {key:"shift",value:"Shift"},
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
                {key:"shift", value:"Shift", colspan:3},
                
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
            $scope.binds[$scope.key].push(item);
        };
        
        $scope.deleteBind = function(i) {
            $scope.binds[$scope.key].splice(i,1);
        };
    }]);
    
/*
$(function() {
    $("td").on("keydown change", function() {
        console.log("woop");
    });
});
*/