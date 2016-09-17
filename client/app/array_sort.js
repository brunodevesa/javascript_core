/**
 * Sort array in javascript using an attribute.
 * The trick to sort by attribute which dont have natural lexicography order is
 * to put in a enum with a value ( in this example the gender ).
 * The sort function will use that value to sort it
 * @type {Array}
 */

my_array = [];

// var GenderEnum = Object.freeze({MALE : 0, FEMALE: 'female', OTHERS: 'others'});

var GenderEnum = {
    MALE : {value: 0, name: "male", code: "M"},
    FEMALE: {value: 1, name: "female", code: "F"},
    OTHERS : {value: 2, name: "others", code: "O"}
};

var p1 = {
    name: "Andre",
    age: 22,
    gender: GenderEnum.MALE
};

var p2 = {
    name: "Maria",
    age: 32,
    gender: GenderEnum.FEMALE
};

var p3 = {
    name: "Minder",
    age: 6,
    gender: GenderEnum.OTHERS
};

my_array.push(p1);
my_array.push(p2);
my_array.push(p3);


//default sort the array -------------------------------------------------------
sortArrayDefault(my_array);

// present results:
console.log('default sorting :');
printResults(my_array);


//age sort --------------------------------------------------------------------
sortArrayByAge(my_array);

// present results:
console.log('');
console.log('age sorting:');
printResults(my_array);


//gender sort -----------------------------------------------------------------
sortArrayByGender(my_array);

// present results:
console.log('');
console.log('gender sorting:');
printResults(my_array);


function printResults(my_array) {
    for (var i = 0; i < my_array.length; i++) {
        console.log(my_array[i].name + ' | ' + my_array[i].age + ' | ' + my_array[i].gender.name);
    }
}

// sort functions: -----------------------------------------------------------
function sortArrayDefault(my_array) {
    my_array.sort();
}

function sortArrayByAge(my_array) {
    my_array.sort(function (a, b) {
        return a.age - b.age;
    })
}

function sortArrayByGender(my_array) {
    my_array.sort(function (a, b) {
        return a.gender.value - b.gender.value;
    })
}


module.exports = {
    sortArrayDefault:sortArrayDefault,
    sortArrayByAge:sortArrayByAge,
    sortArrayByGender:sortArrayByGender
};