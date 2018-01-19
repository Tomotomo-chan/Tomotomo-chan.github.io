var app = angular.module('papyApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.displayProgram = () => {
        const titleDiv = document.getElementById('mainTitle');
        const cardDiv = document.getElementById('mainCard');
        const validBtn = document.getElementById('confirmBtn');

        titleDiv.style.opacity = 0;
        titleDiv.style.marginTop = '-900px';
        setTimeout(() => {
            titleDiv.style.display = 'none';
            mainCard.style.display = 'block';
            confirmBtn.style.display = 'block';
            setTimeout(() => {
                mainCard.style.opacity = 1;
                confirmBtn.style.opacity = 1;
            }, 500);
        }, 3000);

        console.log(titleDiv);
        console.log(cardDiv);
    };
});
