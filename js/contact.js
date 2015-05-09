/* global angular */
var contactApp = angular.module("bbApp", [])

.controller("BindsCtrl", ['$scope', '$http', '$timeout', '$q',
    function($scope, $http, $timeout, $q) {
        $scope.init = function() {
        }
        $scope.items = {
            item:
            {
                "Knife":"weapon_knife",
                "Defuse kit":"item_Defuser",
                "Kevlar":"item_kevlar",
                "Kevlar + Helmet":"item_assaultsuit",
                "Zeus x27":"weapon_taser",
            },
            nade:
            {
                "Flashbang":"weapon_flashbang",
                "Smoke grenade":"weapon_smokegrenade",
                "Molotov cocktail":"weapon_molotov",
                "Incendiary grenade":"weapon_incendiary",
                "Decoy grenade":"weapon_decoy",
                "HE Grenade":"weapon_hegrenade",
            },
            pistol:
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
            shotgun:
            {
                "Sawed-Off":"weapon_sawedoff",
                "MAG-7":"weapon_mag7",
                "Nova":"weapon_nova",
                "XM1014":"weapon_xm1014",
                "Negev":"weapon_negev",
                "M249":"weapon_249",
            },
            sniper:
            {
                "SCAR-20":"weapon_scar20",
                "SSG 08":"weapon_ssg08",
                "AWP":"weapon_awp",
            },
            rifle:{
                "AK-47":"weapon_ak47", 
                "M4A1-S":"weapon_m4a1_silencer", 
                "M4A4":"weapon_m4a1", 
                "FAMAS":"weapon_famas", 
                "Galil AR":"weapon_galilar", 
                "SG 553":"weapon_sg553", 
                "Bullpup":"weapon_aug",
            }, 
            smg:
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
                {value:"Num Lock"},
                {key:"kp_slash", value:"/"},
                {key:"kp_multiply", value:"*"},
                {key:"kp_minus", value:"-"},
            ],
            [
                {key:"kp_home", value:"7"},
                {key:"kp_uparrow", value:"8"},
                {key:"kp_pgup", value:"9"},
                {key:"kp_plus", value:"+", rowspan:2},
            ],
            [
                {key:"kp_leftarrow", value:"4"},
                {key:"kp_5", value:"5"},
                {key:"kp_rightarrow", value:"6"},
            ],
            [
                {key:"kp_end", value:"1"},
                {key:"kp_downarrow", value:"2"},
                {key:"kp_pgdn", value:"3"},
                {key:"kp_enter", value:"Enter", rowspan:2},
            ],
            [
                {key:"kp_ins", value:"0", colspan:2},
                {key:"kp_del", value:","},
            ],
        ];
        
        $scope.key;
        $scope.binds = [];
        
        $scope.active = function(row) {
            console.log(row.key);
            $scope.key = row.key;
        };
        $scope.isSelected = function(row) {
            return $scope.key === row.key;
        };
    }]);

$(function() {
    $("td").on("keydown change", function() {
        console.log("woop");
    });
});