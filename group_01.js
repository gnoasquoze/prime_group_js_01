var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];


var bonus = function (employee) {
  for (var i = 0; i < employees.length; i++) {
    var bonusCheck = [];
    var rating = employee[i][3];
    bonusCheck[0] = employee[i][0];

    if (rating < 3) {
      bonusCheck[1]= 0;
    }
    else if (rating === 3) {
      bonusCheck[1]= 4;
    }
    else if (rating === 4) {
      bonusCheck[1]= 6;
    }
    else if (rating === 5) {
      bonusCheck[1]= 10;
    }

   if (employee[i][1].length === 4) {
      bonusCheck[1] += 5;
    }

   if(employee[i][2] > 65000){
        bonusCheck[1] -=1;
    }

   if(bonusCheck[1]>13){
      bonusCheck[1]=13;
    } else if (bonusCheck[1]<0) {
    bonusCheck[1] = 0;
    }

   bonusCheck [3] = Math.round(employee[i][2]*(bonusCheck[1]/100));

   bonusCheck[2] = bonusCheck[3] + Number.parseInt(employee[i][2]);

  console.log(bonusCheck);
 }
};

bonus(employees);
