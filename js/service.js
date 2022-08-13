let household = document.getElementById("household");
let household_select = document.getElementById("hh-select");
let income = document.getElementById("income");
let income_select = document.getElementById("ic-select");

// document.getElementById("hh-select").innerHTML = hh_select;

function result() {
    household_select.innerHTML = household.value;
    income_select.innerHTML = income.value;

    if (household.value == 1 && income.value <=28000 
        || household.value == 2 && income.value <=32000
        || household.value == 3 && income.value <=36000
        || household.value == 4 && income.value <=42000
        ||household.value == 5 && income.value <=43200){
            document.getElementById("result-T").style.display = "block";
            document.getElementById("result-F").style.display = "none";
    } else {
        document.getElementById("result-T").style.display = "none";
        document.getElementById("result-F").style.display = "block";
    }
}
