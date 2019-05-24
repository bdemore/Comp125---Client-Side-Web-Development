function calculateBMR() {
    var weight1;
    var height1;
    var height;
    var height2;
    var age;
    var male;
    var female;
    var imperial;
    var metric;

    metric = document.getElementById("metric");
    imperial = document.getElementById("imperial");
    male = document.getElementById("male");
    female = document.getElementById("female");
    age = parseInt(document.getElementById("age"));
    weight = parseInt(document.getElementById("weight"));
    height1 = parseInt(document.getElementById("height1"));
    height2 = parseInt(document.getElementById("height2"));

    height = (height1 * 3) + height2; //in feet

    if (male && imperial)
        result = (10 + weight) + (6.25 * height) - (5 * age) + 5;
    else if (male && metric)
        result = (10 + (weight * 0, 453592)) + (6.25 * (height * 30, 48)) - (5 * age) + 5;
    else if (female && imperial)
        result = (10 + weight) + (6.25 * height) - (5 * age) - 161;
    else if (female && metric)
        result = (10 + (weight * 0, 453592)) + (6.25 * (height * 30.48)) - (5 * age) - 161;

    document.write("Your BMR is ", result);

    var activity = document.getElementsByTagName("activity");

    if (id == sedentary)
        activity = result * 1.2;
    else if (id == light)
        activity = result * 1.375;
    else if (id == moderate)
        activity = result * 1.55;
    else if (id == veryactive)
        activity = result * 1.725;
    else if (id == superactive)
        activity = result * 1.9;

    document.write("You are able to consume {0} calories per day", activity);

}


function array() {

    var feet = document.getElementById("feet");
    var inches = document.getElementById("inches");
    var pounds = document.getElementById("pounds");

    feet.innerHTML = newMeasure[0];
    inches.innerHTML = newMeasure[1];
    pounds.innerHTML = newMeasure[2];

    var metric = document.getElementById("metric")

    if (metric) {
        newMeasure[0] = "Meters";
        newMeasure[1] = "Centimeters";
        newMeasure[2] = "Kilograms";
    }
}