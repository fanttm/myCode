
// $apply和$watch都能强制进入事件循环，更新界面
$scope.$apply(function() {
	......
});

$scope.$watch('name', function() {
	// 在$watch中，可以直接更新数据带动更新界面
    $scope.updated++;
});