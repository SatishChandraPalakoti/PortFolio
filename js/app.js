 
angular.module('routerapp', ['routerRoutes','ngAnimate','googlechart'])

 
.controller('mainController',function(){

	var vm=this;
	vm.message="This is Satish Chandra Palakoti's first angular app";
})

.controller('homeController',function(){

	var vm=this
	vm.message="This is the home page"

})

.controller('aboutController',function(){

	var vm=this
	vm.message="This is the about page"
})

.controller('contactController',function(){

	var vm=this 
	vm.message="This is the contact page"
}) 

.controller('workController',function(){

	var vm=this 
	vm.message="This is the work page"
})

.controller('graphController', function ($scope) {
        $scope.chartObject = {}; 

        $scope.chartObject.type = "AnnotationChart";

        $scope.chartObject.data = {"cols": [
            {id: "month", label: "Month", type: "date"},
            {id: "kepler-data", label: "Academic Stand", type: "number"},
            {id: "kepler-annot", label: "Kepler-22b Annotation Title", type: "string"},
            {id: "kepler-annot-body", label: "Kepler-22b Annotation Text", type: "string"},
            {id: "desktop-data", label: "Professional", type: "number"},
            {id: "desktop-annot", label: "Gliese Annotation Title", type: "string"},
            {id: "desktop-annot-body", label: "Gliese Annotaioon Text", type: "string"}
        ], "rows": [
            {c: [
                {v: new Date(2006, 3, 15)},
                {v: 3.45 },
                {v: 'Secondary School Completed'},
                {v: 'S.S.C'},
                {v: undefined},
                {v: undefined},
                {v: undefined}
            ]},
            {c: [
                {v: new Date(2008, 3, 15)},
                {v:  3.55},
                {v: 'Intermediatte Education'},
                {v: 'Intermediatte'},
                {v:undefined},
                {v: undefined},
                {v: undefined}
            ]},
            {c: [
                {v: new Date(2012, 04, 31)},
                {v: 3.83 },
                {v: 'Undergraduate Engg. - Information Technology'},
                {v: 'Bachelor of Technology'},
                {v: undefined},
                {v: undefined},
                {v: undefined}
            ]},
            {c: [
                {v: new Date(2012, 12, 31)},
                {v: 3.83 },
                {v: undefined},
                {v: undefined},
                {v: 3.83},
                {v: 'Trainee Software Engineer'},
                {v: 'HSBC Bank'}
            ]},
            {c: [
                {v: new Date(2014, 8, 8)},
                {v: 3.83 },
                {v: undefined},
                {v: undefined},
                {v: 3.83},
                {v: 'Software Engineer'},
                {v: 'HSBC Bank'}
            ]},
            {c: [
                {v: new Date(2016, 05, 27)},
                {v: 3.55 },
                 {v: 'Graduate Engg. - Software Engineering'},
                {v: 'Masters'},
                {v: undefined},
                {v: undefined},
                {v: undefined}
            ]},
            {c: [
                {v: new Date(2015, 10, 13)},
                {v: 3.55 },
                 {v: undefined},
                {v: undefined},
                {v: 3.55},
                {v: 'Software Intern(Started)'},
                {v: 'Prolifics Inc.'}
            ]},
            {c: [
                {v: new Date(2016, 10, 13)},
                {v: 3.60 },
                 {v: undefined},
                {v: undefined},
                {v: 3.60},
                {v: 'Software Intern'},
                {v: 'Prolifics Inc.'}
            ]}  
        ]};

        $scope.chartObject.options = {
            displayAnnotations: true, 
            width:840,
            height:550,
            is3D:true,
            thickness:5,
            colors:['#4285F4','#3361B5'],
            // background:{fill:'transparent'}
        };
    }); 