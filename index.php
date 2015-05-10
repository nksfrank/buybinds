<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="bbApp">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/angular.js"></script>
    <script type="text/javascript" src="js/contact.js"></script>
    <title>Buybinds for CounterStrike Go</title>
</head>

<body>
    <div class="wrapper" ng-controller="BindsCtrl">
        <div class="content box white round clearfix">
            <div class="clearfix">
                <div class="left">
                    <div>
                        <h4>Key</h4>
                        <table class="numpad">
                            <tr ng-repeat="row in numpad">
                                <td ng-class="{ bound : hasBind(key), selected : isSelected(key)}" ng-repeat="key in row" ng-click="setSelect(key)" colspan="{{key.colspan}}" rowspan="{{key.rowspan}}">{{key.value}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div ng-show="binds" class="item-header clearfix">
                <div class="left tags green light round center" ng-repeat="item in getBinds() track by $index" ng-click="deleteBind($index)">{{item}}&nbsp; <span class="glyphicon glyphicon-remove-sign"></span></div>
            </div>
            <div class="item-wrapper">
                <div class="item-header" ng-repeat="(key, value) in items">
                    <h4>{{key}}</h4>
                    <div class="tags green light round center" ng-repeat="(key, value) in value" ng-click="setBind(value)">
                        {{key}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>