//JS / loose coupling / Inversion of Control (Ioc)

//library collection
class Collection {
    constructor (data = []) {
        this .data = data
    }

    add (value) {
        this.data.push(value)
    }
}


////////////////////////////////
//main code

let paymens = new Collection ([
    { amount: 100, currency: 'EUR', date: '2023-01-01' },
    { amount: 200, currency: 'USD', date: '2023-01-02' },
    { amount: 300, currency: 'EUR', date: '2023-01-03' },
])

paymens.add ({ amount: 400, currency: 'EUR', date: '2023-01-04' }) 