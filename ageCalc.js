//javascript calculates how many days you've been alive including leap years on any year (birth, living and current)

//user input variables 
var currentMonth = prompt("What is the current month (number)?");
var currentDay = prompt("What is the current Day?");
var currentYear = prompt("What is the current Year?");
var age = prompt("How old are you?");
var birthMonth = prompt("Birth month (1-12)?");
var birthDayS = prompt("Birth day (1-31)?");
var birthdayYet = prompt("Have you had your birthday this year? (Y/N)");

//month variables
var preMonth = currentMonth - 1;
var monthAfterBirthMonth = parseFloat(birthMonth) + 1;
var daysRemainingBirthMonth = 0;
var daysinPreMonths = 0;
var daysinAfterBirthMonth = 0;
var birthDay = parseFloat(birthDayS);
var monthDays = [0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//calc days in birth year after birthday in birthday month 
switch(birthMonth) {
    case "1": //jan
		daysRemainingBirthMonth = monthDays[1] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
	case "2": //feb
		daysRemainingBirthMonth = monthDays[2] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "3": //mar
		daysRemainingBirthMonth = monthDays[3] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "4": //apr
		daysRemainingBirthMonth = monthDays[4] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "5": //may
		daysRemainingBirthMonth = monthDays[5] - birthDay;	
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "6": //jun
		daysRemainingBirthMonth = monthDays[6] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "7": //jul
		daysRemainingBirthMonth = monthDays[7] - birthDay;	
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "8": //aug
		daysRemainingBirthMonth = monthDays[8] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
		break;
    case "9": //sep
		daysRemainingBirthMonth = monthDays[9] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "10": //oct
		daysRemainingBirthMonth= monthDays[10] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "11": //nov
		daysRemainingBirthMonth = monthDays[11] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
    case "12": //dec
		daysRemainingBirthMonth = monthDays[12] - birthDay;
		console.log("Days remaining in birth month = " + daysRemainingBirthMonth);
        break;
	default:
		console.log("Switch cases arent working");
}

//calc Days in birth year in months after birthday month
for (i = monthAfterBirthMonth; i < 13; i++){
	daysinAfterBirthMonth += monthDays[i];
}
console.log("Days in birth year in months after birthday month = " + daysinAfterBirthMonth);

//calc days in birth month after birthdy + days in months after birthday only in birth year
var daysInBirthYear = daysRemainingBirthMonth + daysinAfterBirthMonth;
console.log("Total days happened after birthday in birth year = " + daysInBirthYear);

//calc days in previous months of current year
for (i = preMonth; i > 0; i--){
	daysinPreMonths += monthDays[i];
}
console.log("Days in previous months of current year = " + daysinPreMonths);

//calc number of days happened in current year
var daysTotalCurYear = daysinPreMonths + parseFloat(currentDay);
console.log("Total days happened this year = " + daysTotalCurYear);

//new variables
var birthYear;
var preYear = currentYear - 1;
var daysInNormalYear = 365;
var daysInLeapYear = 366;
var leapYearCounter = 0;
var normalYearCounter = 0;
var currentYearLeap = false;
var birthYearLeap = false;

//calc birthyear
if (birthdayYet == "Y"){ 
	birthYear = currentYear - age;
	console.log("Birthday was this year, birthyear = " + birthYear);
}
else {
	birthYear = preYear - age;
	console.log("Birthday was last year, birthyear = " + birthYear);
}

//calc current year leap year
//if current month of current year is > 2 then it matters
if (currentMonth > 2) {
	var yearDiv4 = currentYear % 4;
	var yearDiv100 = currentYear % 100;
	var yearDiv400 = currentYear % 400;
		
		if (yearDiv4 == 0){
			if(yearDiv100 == 0){
				if(yearDiv400 == 0){
					currentYearLeap = true;
					console.log("Year = " + currentYear + ". Current Year leap = " + currentYearLeap);
				}
				else {
					currentYearLeap = false;
					console.log("(1st else) Year = " + currentYear + ". Normal year.");
				}
			}
			else {
					currentYearLeap = true;
					console.log("Year = " + currentYear + ". Current Year leap = " + currentYearLeap);
				
			}
		}
		else {
				currentYearLeap = false;
					console.log("(1st else) Year = " + currentYear + ". Normal year.");
		}
}

//calc birth year leap year
//if birth month of birth year is =< 2 then it matters
if (birthMonth < 3) {
	var yearDiv4 = birthYear % 4;
	var yearDiv100 = birthYear % 100;
	var yearDiv400 = birthYear % 400;
		
		if (yearDiv4 == 0){
			if(yearDiv100 == 0){
				if(yearDiv400 == 0){
					birthYearLeap = true;
					console.log("Year = " + birthYear + ". Birth Year leap = " + birthYearLeap);
				}
				else {
					birthYearLeap = false;
					console.log("(1st else) Year = " + birthYear + ". Normal year.");
				}
			}
			else {
					birthYearLeap = true;
					console.log("Year = " + birthYear + ". Birth Year leap = " + birthYearLeap);
				
			}
		}
		else {
				birthYearLeap = false;
					console.log("(1st else) Year = " + birthYear + ". Normal year.");
		}
}

// calc years inbetween birthyear and current year normal or leap
for (i = preYear; i > birthYear; i--){
	var yearDiv4 = i % 4;
	var yearDiv100 = i % 100;
	var yearDiv400 = i % 400;
		
		if (yearDiv4 == 0){
			if(yearDiv100 == 0){
				if(yearDiv400 == 0){
					leapYearCounter += 1;
					console.log("Year = " + i + ". Leap year counter = " + leapYearCounter);
				}
				else {
					normalYearCounter += 1;
					console.log("(1st else) Year = " + i + ". Normal year counter = " + normalYearCounter);
				}
			}
			else {
					leapYearCounter += 1;
					console.log("(2nd else) Year = " + i + ". Leap year counter = " + leapYearCounter);
			}
		}
		else {
				normalYearCounter += 1;
				console.log("(third else) Year = " + i + ". Normal year counter = " + normalYearCounter);
		}
}


//calc total days in leap years
var totalDaysAllLeapYears = leapYearCounter * daysInLeapYear;

//add one day if current year is leap year
if (currentYearLeap == true){
	totalDaysAllLeapYears += 	1;
	console.log("Current year is leap year and we are passed Feb 29.");
}
else {
	console.log("Current year is not a leap year");
}

//calc total days in normal years
var totalDaysNormalYears = normalYearCounter * daysInNormalYear;

//calc total days in normal and leap years (not including current year days and birth year days)
var totalDaysPreYear = totalDaysAllLeapYears + totalDaysNormalYears;

//add one day if birth year is leap year and born before leap day
if (birthYearLeap == true){
	daysInBirthYear += 	1;
	console.log("Birth year is leap year and you are born before Feb 29.");
}
else {
	console.log("Birth year is not a leap year");
}

//add total days from current year previous years and birth year
var totalDays = totalDaysPreYear + daysTotalCurYear + daysInBirthYear;

//print number two both places
console.log("You have been alive for " + totalDays + " days!");
alert("You have been alive for " + totalDays + " days!");

