//JS / loose coupling / Inversion of Control (Ioc)

//library collection
class Collection {
    constructor(data = []) {
        this.data = data
    }

    add(value) {
        this.data.push(value)
    }
    ///imutability
    // filterMInMax(min, max) {//strong coupling (min, max)
    //     let tempColl = new Collection()

    //     for (let index = 0; index < this.data.length; index++) {
    //         //strong coupled algoritm 
    //         //Control it from here
    //         //   VVV
    //         if (this.data[index] >= min && this.data[index] <= max) {
    //             tempColl.add(this.data[index])// strong coupling
    //         }
    //     }
    //     //strong coupled algoritm 
    //     return tempColl;

    // }
    filter(cb) {
        let tempColl = new Collection()

        for (let index = 0; index < this.data.length; index++) {

            //loose coupled algorithm            

            if (cb(this.data[index]) == true) {
                tempColl.add(this.data[index])
            }
        }

        return tempColl;

    }

    get length() {
        return this.data.length;
    }
}

//HW rewrite the tests
///test cases 1 
let bYears = new Collection([
    1999, 1992, 2001, 2004, 2018, 2020
])

bYears.add(2019);

if (bYears.length == 7) {
    console.log(bYears)
    console.log('test 1 passed!');

} else {
    console.log(bYears)
    console.error('test 1 FAILED!')
}

//test case 2 
let fYears = bYears.filter(y => y >= 1999 && y <= 2009 ? true : false);

if (fYears.length == 3) {
    console.log(fYears)
    console.log('test 2 passed!');

} else {
    console.log(fYears)
    console.error('test 2 FAILED!')
}
////////////////////////////////
//main code

let payments = new Collection([
    { amount: 100, currency: 'EUR', date: '2023-01-01' },
    { amount: 200, currency: 'USD', date: '2023-01-02' },
    { amount: 300, currency: 'EUR', date: '2023-01-03' },
])

payments.add({ amount: 400, currency: 'EUR', date: '2023-01-04' })


// Ioc

//                             VVVV Controled here

// HW rewrite this arrow function with less code
// how can we pass parametres (min, max)
//bind 
//call apply
let mPayments = payments.filter(v => v.amount >= 200 && v.amount <= 300 ? true : false)
