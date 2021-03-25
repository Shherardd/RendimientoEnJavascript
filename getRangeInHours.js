var horas = new Map()
horas.set("8:30", new Date(0, 0, 0, 8, 30, 0, 0))
horas.set("9:00", new Date(0, 0, 0, 9, 0, 0, 0))
horas.set("9:30", new Date(0, 0, 0, 9, 30,0))
horas.set("10:00", new Date(0, 0, 0, 10, 0,0))
horas.set("10:30", new Date(0, 0, 0, 10, 30,0))
horas.set("11:00", new Date(0, 0, 0, 11, 0, 0 ,0))

const determinaRango = (hora) => {
  let rango = new Date(0,0,0,hora.getHours(),hora.getMinutes(),0,0)
  let pertenece  
  for (let [key, value] of horas){
    if (rango.getTime() >= value.getTime() ){
      pertenece = key
    }
    if(rango.getTime() < value.getTime()){
      break
    }
  }
  return pertenece
}

console.log("-",determinaRango(new Date(0,0,0,9,15,0,0))) // 9:15
console.log("-",determinaRango(new Date(0,0,0,10,40,0,0))) // 10:40