let orders = [
    {total : 325},
    {total : 512},
    {total: 128},
    {total: 32}
];

//dengan menggunakan looping for
let total = 0;
for (let i = 0; i < orders.length; i++){
    total = total + orders[i].total;
}
console.log(total);

//dengan menggunakan reduce
let total2 = orders.reduce((total, order) => total + order.total, 0);
console.log(total2);