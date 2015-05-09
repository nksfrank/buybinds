/* global angular */
var contactApp = angular.module("bbApp", [])

.controller("BindsCtrl", ['$scope', '$http', '$timeout', '$q',
    function($scope, $http, $timeout, $q) {
        $scope.init = function() {
        }
        $scope.items = [
            {name:"Knife", cmd:"weapon_knife", type:"item"},
            {name:"Defuse kit", cmd:"item_Defuser", type:"item"},
            {name:"Kevlar", cmd:"item_kevlar", type:"item"},
            {name:"Kevlar + Helmet", cmd:"item_assaultsuit", type:"item"},
            {name:"Zeus x27", cmd:"weapon_taser", type:"item"},
    
            {name:"Flashbang", cmd:"weapon_flashbang", type:"nade"},
            {name:"Smoke grenade", cmd:"weapon_smokegrenade", type:"nade"},
            {name:"Molotov cocktail", cmd:"weapon_molotov", type:"nade"},
            {name:"Incendiary grenade", cmd:"weapon_incendiary", type:"nade"},
            {name:"Decoy grenade", cmd:"weapon_decoy", type:"nade"},
            {name:"HE Grenade", cmd:"weapon_hegrenade", type:"nade"},
    
            {name:"Dual Berettas", cmd:"weapon_elite", type:"pistol"},
            {name:"Five-SeveN", cmd:"weapon_fiveseven", type:"pistol"},
            {name:"Desert Eagle", cmd:"weapon_deagle", type:"pistol"},
            {name:"USP-S", cmd:"weapon_usp_sliencer", type:"pistol"},
            {name:"Glock-18", cmd:"weapon_glock18", type:"pistol"},
            {name:"CZ75-Auto", cmd:"weapon_cz75a", type:"pistol"},
            {name:"P2000", cmd:"weapon_hkp2000", type:"pistol"},
            {name:"Tec-9", cmd:"weapon_tec9", type:"pistol"},
    
            {name:"Sawed-Off", cmd:"weapon_sawedoff", type:"shotgun"},
            {name:"MAG-7", cmd:"weapon_mag7", type:"shotgun"},
            {name:"Nova", cmd:"weapon_nova", type:"shotgun"},
            {name:"XM1014", cmd:"weapon_xm1014", type:"shotgun"},
            {name:"Negev", cmd:"weapon_negev", type:"shotgun"},
            {name:"M249", cmd:"weapon_249", type:"shotgun"},
    
            {name:"SCAR-20", cmd:"weapon_scar20", type:"sniper"},
            {name:"SSG 08", cmd:"weapon_ssg08", type:"sniper"},
            {name:"AWP", cmd:"weapon_awp", type:"sniper"},
    
            {name:"AK-47", cmd:"weapon_ak47", type:"rifle"},
            {name:"M4A1-S", cmd:"weapon_m4a1_silencer", type:"rifle"},
            {name:"M4A4", cmd:"weapon_m4a1", type:"rifle"},
            {name:"FAMAS", cmd:"weapon_famas", type:"rifle"},
            {name:"Galil AR", cmd:"weapon_galilar", type:"rifle"},
            {name:"SG 553", cmd:"weapon_sg553", type:"rifle"},
            {name:"Bullpup", cmd:"weapon_aug", type:"rifle"},
    
            {name:"P90", cmd:"weapon_p90", type:"smg"},
            {name:"UMP45", cmd:"weapon_ump45", type:"smg"},
            {name:"MAC-10", cmd:"weapon_mac10", type:"smg"},
            {name:"MP7", cmd:"weapon_mp7", type:"smg"},
            {name:"MP9", cmd:"weapon_mp9", type:"smg"},
        ];
        
        $scope.numpad = [
            0 = {key:"kp_home", value:"7"},
            1 = {key:"kp_uparrow", value:"8"},
            2 = {key:"kp_pgup", value:"9"},
            3 = {key:"kp_leftarrow", value:"4"},
            4 = {key:"kp_5", value:"5"},
            5 = {key:"kp_rightarrow", value:"6"},
            6 = {key:"kp_end", value:"1"},
            7 = {key:"kp_downarrow", value:"2"},
            8 = {key:"kp_pgdn", value:"3"},
            9 = {key:"kp_ins", value:"0"},
            10 = {key:"kp_del", value:","},
            11 = {key:"kp_enter", value:"Enter"},
            12 = {key:"kp_slash", value:"/"},
            13 = {key:"kp_multiply", value:"*"},
            14 = {key:"kp_minus", value:"-"},
            15 = {key:"kp_plus", value:"+"},
        ];
        
        $scope.numpadlayout = [
            [,12,13,14],
            [0,1,2,15],
            [3,4,5,15],
            [6,7,8,11],
            [9,9,10,11]
        ];
    }]);

$(function() {
    $(":input").on("keydown change", function() {
        $(this).removeClass("error");
    });
});