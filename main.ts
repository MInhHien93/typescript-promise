let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve(`Can buy ${car}`)
            } else {
                reject("Don't enough money")
            }
        }, 100);
    }))
}
money = 1001;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})