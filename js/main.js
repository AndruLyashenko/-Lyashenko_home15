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
    }
    else {
        east();
    }
    map();
}

// 5 level
function moved_5() {
    var step = '';
    while (step != 'next') {
        if ((isFree('east') == true) && (isFree('north') == false) && (isFree('south') == false)) {
            step = east();
            map();
        }
        else {
            step = south();
            map();
        }
        if ((isFree('east') != true) && (isFree('south') != true)) {
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
        if ((isFree('west') != true) && (isFree('south') != true)) {
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
        if ((isFree('north') != true) && (isFree('east') != true)) {
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
        if ((isFree('west') != true) && (isFree('south') != true)) {
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

moved_5();






