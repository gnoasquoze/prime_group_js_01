var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var bonus = function (employee) {
  //creates a loop to loop through employees array
  for (var i = 0; i < employees.length; i++) {
    //initialize empty array to add values to
    var bonusCheck = [];
    var name = employee[i][0];
    var iD = employee[i][1];
    var rating = employee[i][3];
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
    if(employee[i][2] > 65000){
        bonusCheck[1] -=1;
    }
    //check if bonus% is greater than 13 or less than 0 and set to max or min
    if(bonusCheck[1]>13){
      bonusCheck[1]=13;
    } else if (bonusCheck[1]<0) {
    bonusCheck[1] = 0;
    }
    //calculate bonus amount, round to nearest dollar and assign to last spot in array
    bonusCheck[3] = Math.round(employee[i][2]*(bonusCheck[1]/100));
    //calculate total by adding salary plus bonus amount
    bonusCheck[2] = bonusCheck[3] + Number.parseInt(employee[i][2]);

    //create text node that contains all of the values in the finished array
    var text = document.createTextNode(
      "Name: " + bonusCheck[0] +
      ", Bonus Rate: " + bonusCheck[1] +
      "%, Salary + Bonus: $" + bonusCheck[2] +
      ", Total Bonus: $" + bonusCheck[3]
    );
    //create list item node to add text to
    var par = document.createElement("li");
    //add text node to list item node
    var node = par.appendChild(text)
    //add list item node to unordered list
    document.getElementById("employee-list").appendChild(par);

  console.log(bonusCheck);
 }
};

bonus(employees);
