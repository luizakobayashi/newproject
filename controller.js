var app = angular.module('cards', []);

app.controller('controller', function($scope) {
	/*var pdv = {content:null};

	/*simulação de JSON*/
	/*$http.get('content.json').success(function(data) {		
		pdv.content = this.data
	});

	$scope.items = [pdv.content]*/
	
	$scope.items =
	[{
			number:'01',
			date:'21/08/2018',
			hour:'23:59',
			sistemaop:'Windows 8.1',
			version:'Versão 1.2.8',
			local:'Parque Shopping Aricanduva',

			hdbar:'fill-danger',
			rambar:'fill-danger',
			processbar:'fill-danger',
		},
		{
			number:'02',
			date:'22/08/2018',
			hour:'15:43',
			sistemaop:'Windows 8.1',
			version:'Versão 1.2.8',
			local:'Parque Shopping Aricanduva',

			hdbar:'fill-ok',
			rambar:'fill-ok',
			processbar:'fill-danger',

			printerstatus:'yellow',
			cashstatus:'green',
			supermarketstatus:'green'
		},
		{
			number:'03',
			date:'22/08/2018',
			hour:'15:43',
			sistemaop:'Windows 8.1',
			version:'Versão 1.2.8',
			local:'Parque Shopping Aricanduva',

			hdbar:'fill-attention',
			rambar:'fill-ok',
			processbar:'fill-ok',

			supermarketstatus:'green'
		},
		{
			number:'04',
			date:'22/08/2018',
			hour:'15:43',
			sistemaop:'Windows 8.1',
			version:'Versão 1.2.8',
			local:'Parque Shopping Aricanduva',

			hdbar:'fill-ok',
			rambar:'fill-ok',
			processbar:'fill-ok',

			printerstatus:'green',
			cashstatus:'green',
			supermarketstatus:'green'
		},
		{
			number:'05',
			date:'22/08/2018',
			hour:'15:43',
			sistemaop:'Windows 8.1',
			version:'Versão 1.2.8',
			local:'Parque Shopping Aricanduva',

			hdbar:'fill-ok',
			rambar:'fill-ok',
			processbar:'fill-ok',

			printerstatus:'green',
			cashstatus:'green',
			supermarketstatus:'green'
		},
		{
			number:'06',
			date:'22/08/2018',
			hour:'15:43',
			sistemaop:'Windows 8.1',
			version:'Versão 1.2.8',
			local:'Parque Shopping Aricanduva',

			hdbar:'fill-ok',
			rambar:'fill-ok',
			processbar:'fill-attention',

			printerstatus:'green',
			cashstatus:'green',
			supermarketstatus:'green'
		},
    ]
});