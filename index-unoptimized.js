let users = []
let products = []

const elem = 50000
for (let i = 0; i < elem; i++) {
    users.push({ id: i, nombre: `nombre-${i}`})
}

for (let i = 0; i < elem; i++) {
    products.push({
        id: i,
        nombre: `nombre-producto-${i}`,
        user_id: Math.floor(Math.random() * elem)
    })
}

console.time(1)
const mezclados = products.map(x => ({
    ...x,
    user: users.find(y => y.id === x.user_id)
}))
console.timeEnd(1)
console.log('mezclados', mezclados[0])