let users = []
let products = []

const keyBy = (arr, key) => arr.reduce((acc, el) => {
    acc[el[key]] = el
    return acc
}, {})

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

const keyedUsers = keyBy(users, 'id')

console.time(1)
const mezclados = products.map(x => ({
    ...x,
    user: keyedUsers[x.user_id]
}))
console.timeEnd(1)
console.log('mezclados', mezclados[0])