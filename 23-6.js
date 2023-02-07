const phones = [
    {name: 'Samsung', camara: 12, stroage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camara: 12, stroage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camara: 12, stroage: '32gb', price: 82000, color: 'silver'},
    {name: 'Xaomi', camara: 12, stroage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camara: 12, stroage: '32gb', price: 20000, color: 'silver'},
    {name: 'Nakia', camara: 12, stroage: '32gb', price: 44000, color: 'silver'},
    {name: 'HTC', camara: 12, stroage: '32gb', price: 62000, color: 'silver'}
]


function cheapestphone(phones) {
    let cheapest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest
}

const myselection = cheapestphone(phones)
console.log(myselection);