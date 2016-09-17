var assert = require('assert');
var expect = require('chai').expect; // npm i chai --save-dev
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var array_sort = require('../client/app/array_sort');

// in terminal      : npm i mocha chai mochawesome sinon sinon-chai rewire --save-dev
// in package.json  : "test": "mocha --reporter mochawesome && open mochawesome-reports/mochawesome.html"


describe('Test Suite array_sort', function () {

    before(function () {
        // runs before all tests in this block

        var my_array = [];

        // var GenderEnum = Object.freeze({MALE : 0, FEMALE: 'female', OTHERS: 'others'});

        var GenderEnum = {
            MALE: {value: 0, name: "male", code: "M"},
            FEMALE: {value: 1, name: "female", code: "F"},
            OTHERS: {value: 2, name: "others", code: "O"}
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
    });

    describe('#sortArray()', function () {

        it('should return array sorted alphabetic name order ', function () {
            array_sort.sortArrayDefault(my_array);
            expect(my_array[0].name).equal('Andre');
            expect(my_array[1].name).equal('Maria');
            expect(my_array[2].name).equal('Minder');
        });

        it('should return array sorted numeric age order', function () {
            array_sort.sortArrayByAge(my_array);
            expect(my_array[0].name).equal('Minder');
            expect(my_array[1].name).equal('Andre');
            expect(my_array[2].name).equal('Maria');
        });

        it('should return array sorted gender custom order (male, female, others) ', function () {
            array_sort.sortArrayByGender(my_array);
            expect(my_array[0].name).equal('Andre');
            expect(my_array[1].name).equal('Maria');
            expect(my_array[2].name).equal('Minder');
        });

    });
});