angular.module('litchi.directives', [])

.directive('aviso', function () {
	return {
		templateUrl: 'templates/directives/aviso.html',
		scope: {
			info: '='
		},
		link: function (scope, element) {}
	}
});