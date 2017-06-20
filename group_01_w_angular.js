var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

function bonusCalc(employeeArray) {
  //initialize empty array to push employee bonus arrays to
  var bonusArray = [];
  //use forEach method to process employees array
  employeeArray.forEach(employee => {
    //initialize empty array to add values to
    var bonusCheck = [];
    var name = employee[0];
    var iD = employee[1];
    var salary = employee[2];
    var rating = employee[3];
    //assign name value to new array
    bonusCheck[0] = name;
    //check employee rating and assign bonus% value to bonusCheck array
    if (rating < 3) {
      bonusCheck[1]= 0;
    } else if (rating === 3) {
      bonusCheck[1]= 4;
    } else if (rating === 4) {
      bonusCheck[1]= 6;
    } else if (rating === 5) {
      bonusCheck[1]= 10;
    }
    //check employee ID length and add 5% if length is 4
    if (iD.length === 4) {
      bonusCheck[1] += 5;
    }
    //check if employee base salary is greater than 65000 and subtract 1% bonus if true
    if(employee[2] > 65000){
        bonusCheck[1] -=1;
    }
    //check if bonus% is greater than 13 or less than 0 and set to max or min
    if(bonusCheck[1]>13){
      bonusCheck[1]=13;
    } else if (bonusCheck[1]<0) {
    bonusCheck[1] = 0;
    }
    //calculate bonus amount, round to nearest dollar and assign to last spot in array
    bonusCheck[3] = Math.round(salary *(bonusCheck[1]/100));
    //calculate total by adding salary plus bonus amount
    bonusCheck[2] = bonusCheck[3] + parseInt(salary);
    //log employee bonus info to console
    console.log(bonusCheck);
    //push employee bonus info to bonusArray
    bonusArray.push(bonusCheck);
  })
  return bonusArray;
};
//assign returned employee bonus info to variable
var bonusObj = bonusCalc(employees);
//set up angular controller
app.controller('MainController', ['$scope', function($scope) {
  //initialize empty array for bonus info
	$scope.bonuses = [];
  //transforms array data into objects and push to bonuses property
  for (var i = 0; i < bonusObj.length; i++) {
    var newObj = {};
    newObj.name = bonusObj[i][0];
    newObj.bonusPercent = bonusObj[i][1];
    newObj.bonusPlusSalary = bonusObj[i][2];
    newObj.bonusDollars = bonusObj[i][3];
    $scope.bonuses.push(newObj);
  }
}]);
