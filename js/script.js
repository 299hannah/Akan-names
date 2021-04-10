
function MakeArray(n) {
    this.length = n;
    for (let i = 1; i <= n; i++) {
        this[i] = 0;
    }
  }
  // Initialize Days of Week Array
  days = new MakeArray(7);
  days[0] = "Sunday"
  days[1] = "Monday"
  days[2] = "Tuesday"
  days[3] = "Wednesday"
  days[4] = "Thursday"
  days[5] = "Friday"
  days[6] = "Saturday"
  
  
  // Initialize Months Array
  months = new MakeArray(12);
  months[0] = "January"
  months[1] = "February"
  months[2] = "March"
  months[3] = "April"
  months[4] = "May"
  months[5] = "June"
  months[6] = "July"
  months[7] = "August"
  months[8] = "September"
  months[9] = "October"
  months[10] = "November"
  months[11] = "December"
  
  // Initialize Male 's Akan Name Array
  male = new MakeArray(7);
  male[0] = "Kwasi"
  male[1] = "Kwandwo"
  male[2] = "Kwabena"
  male[3] = "Kwaku"
  male[4] = "Yaw"
  male[5] = "Kofi"
  male[6] = "Kwame"
  
  //Initialize Female's Akan Name Array
  female = new MakeArray(7);
  female[0] = "Akosua"
  female[1] = "Adwoa"
  female[2] = "Abenaa"
  female[3] = "Akua"
  female[4] = "Yaa"
  female[5] = "Afua"
  female[6] = "Ama"
  
  //Akan name derivation Function
  function compute(form) {
    let day = parseInt(form.day.value, 10)
    let month = parseInt(form.month.value, 10)
    let year = parseInt(form.year.value, 10)
  
    if ((day <= 0) || (day > 31)) {
        alert("Enter a valid day!")
        return false;
    }
  
  
    if ((month <= 0) || (month > 12)) {
        alert("Enter a valid month!")
        return false;
    }
    let monthx = parseInt(form.month.value, 10)
  
  
    if (year < 0) {
        alert("Enter a valid year!")
        return false;
    }
  
  
    if (month == 1) {
        monthx = 13;
        year = year - 1
    }
    if (month == 2) {
        monthx = 14;
        year = year - 1
    }
    let val1 = parseInt(((monthx + 1) * 3) / 5, 10)
    let val2 = parseInt(year / 4, 10)
    let val3 = parseInt(year / 100, 10)
    let val4 = parseInt(year / 400, 10)
    let val5 = val1 + (monthx * 2) + val1 + year + val2 - val3 + val4 + 2
    let val6 = parseInt(val5 / 7, 10)
    let val0 = (val5 - (val6 * 7)) - 1
  
    let gender = parseInt(form.gender.value, 10)
  
    if (gender == 0) {
        form.resultDay.value = days[val0]
        form.result2.value = male[val0]
  
  
  
    } else if (gender == 1) {
        form.resultDay.value = days[val0]
        form.result2.value = female[val0]
    } else {
        alert("Please choose your Gender!")
    }
  
  
  
  
  }