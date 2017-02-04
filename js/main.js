//1 level
map();
for (var moved = 0; moved < 2; moved++) {
    north();
    map();
}

// 2 level
for (var moved_2 = 0; moved_2 <= 15; moved_2++) {
    east();
    map();
}

// 3 level
for (var moved_3 = 0; moved_3 < 7; moved_3++) {
    south();
    east();
    map();
}

// 4 level
map();
for (var moved_4 = 0; moved_4 < 13; moved_4++) {
    if (isFree('south') == true) {
        south();
    } else {
        east();
    }
    map();
}

// 5 level
function level_5() {
    var step = '';
    while (step != 'next') {
        if ((isFree('east') == true) && (isFree('north') == false) && (isFree('south') == false)) {
            step = east();
            map();
        } else {
            step = south();
            map();
        }
        if ((isFree('east')!=true) && (isFree('south')!=true)) {
            break;
        }
    }
    while (step != 'next') {
        if (isFree('west') == true) {
            step = west();
            map();
        }
        else if (isFree('west') == false) {
            step = south();
            map();
        }
        else {
            step = west();
            map();
        }
        if ((isFree('west')!=true) && (isFree('south')!=true)) {
            break;
        }
    }
    while (step != 'next') {
        if (isFree('north') == true) {
            step = north();
            map();
        }
        else {
            step = east();
            map();
        }
        if ((isFree('north')!=true) && (isFree('east')!=true)) {
            break;
        }
    }

    while (step != 'next') {
        if (isFree('west') == true) {
            step = west();
            map();
        }
        else {
            step = south();
            map();
        }
        if ((isFree('west')!=true) && (isFree('south')!=true)) {
            break;
        }
    }

    while (step != 'next') {
        if (isFree('south') == true) {
            step = south();
            map();
        }
        else if (isFree('east')) {
            step = east();
            map();
        }
        if (!step) {
            break;
        }
    }
}

level_5();








//first-step//
function first_level() {
    var step = '';
    while (step != 'next') {
        step = north();
        console.log(step);
    }

}

first_level()


//second-step//
function second_level() {
    var step = '';
    while (step != 'next') {
        step = east();
        console.log(step);
    }
}
second_level()

//third(fourth)-step//

function third_level() {
    var step = '';
    while (step != 'next') {
        if (isFree('south')) {
            step = south();
        }
        else {
            step = east();
            console.log(step);

        }
        if (!step) {

            break;
        }

    }

}

third_level()

//4-step//

function third_level() {
    var step = '';
    while (step != 'next') {
        if (isFree('south')) {
            step = south();
        }
        else {
            step = east();
            console.log(step);

        }
        if (!step) {
            break;
        }

    }

}

third_level()

//fifth-step//
function fifth_level() {
    for (var step = ''; step !='next'; ) {
        if (isFree('east') && isFree('north') == false && isFree('south') == false) {
            step=east();
        }
        else {
            step=south();
        }
        if (!isFree('east') && !isFree('south')) {
            break;
        }

    }

    for (; step !='next'; ) {
        if (isFree('west')) {
            step=west();
        }
        else if (isFree('west') == false) {
            step=south();
        }
        else  {
            step=west();
        }
        if (!isFree('west') && !isFree('south')) {
            break;
        }

    }

    for (; step !='next'; ) {
        if (isFree('north')) {
            step=north();
        }
        else  {
            step=east();
        }
        if (!isFree('north') && !isFree('east')) {
            break;
        }
    }

    for (; step !='next'; ){
        if (isFree('west')){
            step=west();
        }
        else{
            step=south();
        }
        if (!isFree('west') && isFree('south')) {
            break;
        }
    }

    for (; step!='next'; ) {

        if (isFree('south')) {
            step=south();
        }
        else if (isFree('east')) {
            step= east();
            console.log(step);
        }
        if (!step) {

            break;
        }
    }

}

fifth_level()