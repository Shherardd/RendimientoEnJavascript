let a, b , c, i;

[a, b, c, ...i] = [1,2,3,4,5,6,7,8]


for (const [key, value] of i.entries()) {
    console.log(`llave: ${key}, valor: ${value}`)
}
