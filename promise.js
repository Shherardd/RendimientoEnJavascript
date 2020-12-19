const promesa = (val) => {
    return new Promise((resolve, reject)=>{
        const data = {
            nombre: 'Luis',
            apellido: 'Lopez'
        }
        if(val){
            setTimeout(() => {
                resolve(data);
            }, 2000)
        }else{
            reject(new Error('No se cumplen los requisitos'))
        }
    })
}

const getData = async () => {
    try {
        const data = await promesa(true)
        const { nombre, apellido } = data
        console.log(`Henlo, mi nombre es ${nombre}, y me apellido ${apellido}`)
        return data        
    } catch (error) {
        console.error('Error: ' + error.message)
    }
}

getData()