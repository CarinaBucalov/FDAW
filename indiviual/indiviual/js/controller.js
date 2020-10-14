var app = angular.module('myApp', []);

app.service('alertUser', function () {
	this.showAlertMsg = function () {
		alert('You are logined. Welcome! (alert created by service)');
	}
});

app.directive("myDirective", function () {
	return {
		template: "<label>Please Login To See Schedule <h6 class='fs-10'>(message create by directive)</h6></label>"
	};
});


app.controller('myCtrl', function ($scope, alertUser, $location) {

	$scope.schedulesByDay = [];
	let monday = [
		{ lesson: 'Informatica', teacher: 'V.Siminel', time: '19:00', image: 'img/arrow-right.png' },
		{ lesson: 'Math', teacher: 'V.Gutu', time: '16:00', image: 'img/arrow-right.png' },
		{ lesson: 'Romanian', teacher: 'I.Cucu', time: '17:00', image: 'img/arrow-right.png' },
		{ lesson: 'English', teacher: 'S.Rusu', time: '18:00', image: 'img/arrow-right.png' }
	];
	let tuesday = [
		{ lesson: 'Informatica2', teacher: 'V.Siminel', time: '19:00', image: 'img/arrow-right.png' },
		{ lesson: 'Math2', teacher: 'V.Gutu', time: '16:00', image: 'img/arrow-right.png' },
		{ lesson: 'Romanian2', teacher: 'I.Cucu', time: '17:00', image: 'img/arrow-right.png' },
		{ lesson: 'English2', teacher: 'S.Rusu', time: '18:00', image: 'img/arrow-right.png' }
	];
	let wednesday = [
		{ lesson: 'Informatica3', teacher: 'V.Siminel', time: '19:00', image: 'img/arrow-right.png' },
		{ lesson: 'Math3', teacher: 'V.Gutu', time: '16:00', image: 'img/arrow-right.png' },
		{ lesson: 'Romanian3', teacher: 'I.Cucu', time: '17:00', image: 'img/arrow-right.png' },
		{ lesson: 'English3', teacher: 'S.Rusu', time: '18:00', image: 'img/arrow-right.png' }
	];
	let thursday = [
		{ lesson: 'Informatica4', teacher: 'V.Siminel', time: '19:00', image: 'img/arrow-right.png' },
		{ lesson: 'Math4', teacher: 'V.Gutu', time: '16:00', image: 'img/arrow-right.png' },
		{ lesson: 'Romanian4', teacher: 'I.Cucu', time: '17:00', image: 'img/arrow-right.png' },
		{ lesson: 'English4', teacher: 'S.Rusu', time: '18:00', image: 'img/arrow-right.png' }
	];
	let friday = [
		{ lesson: 'Informatica5', teacher: 'V.Siminel', time: '19:00', image: 'img/arrow-right.png' },
		{ lesson: 'Math5', teacher: 'V.Gutu', time: '16:00', image: 'img/arrow-right.png' },
		{ lesson: 'Romanian5', teacher: 'I.Cucu', time: '17:00', image: 'img/arrow-right.png' },
		{ lesson: 'English5', teacher: 'S.Rusu', time: '18:00', image: 'img/arrow-right.png' }
	];

	$scope.days = [
		{ val: 0, name: "Monday" },
		{ val: 1, name: "Tuesday" },
		{ val: 2, name: "Wednesday" },
		{ val: 3, name: "Thursday" },
		{ val: 4, name: "Friday" },
	]

	$scope.schedulesByDay.push(monday);
	$scope.schedulesByDay.push(tuesday);
	$scope.schedulesByDay.push(wednesday);
	$scope.schedulesByDay.push(thursday);
	$scope.schedulesByDay.push(friday);

	$scope.name = "";

	$scope.login_def = "admin";
	$scope.password_def = "admin";

	$scope.isSigned = false;

	$scope.login = function () {
		if (($scope.my_login == $scope.login_def) && ($scope.password == $scope.password_def)) {
			$scope.isSigned = true;
			alertUser.showAlertMsg();
			$scope.my_login = '';
			$scope.password = '';
			$('#exampleModal').modal('hide')
		}
	}

	$scope.getDay = function (day) {
		return $scope.schedulesByDay[day];
	}

	$scope.alertSubmit = function () {
		alert('Question was send!');
	}

	$scope.addLesson = function (day) {
		let elem = {
			lesson: $scope.add_lesson,
			teacher: $scope.add_teacher,
			time: $scope.add_time,
			image: $scope.add_img,
		}
		let add = $scope.schedulesByDay[day].push(elem);
		$scope.add_lesson = '';
		$scope.add_teacher = '';
		$scope.add_time = '';
		$scope.add_img = '';
		$('#addLesson').modal('hide')
	}

	$scope.removeLesson = function (day, lesson) {
        let index = $scope.schedulesByDay[day].findIndex(x => x.lesson === lesson);
        $scope.schedulesByDay[day].splice(index, 1);
    }
});

