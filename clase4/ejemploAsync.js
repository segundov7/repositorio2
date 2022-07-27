//______________________________sincronica___________________________________

// const delay = ret => {for(let i=0; i<ret*3e6; i++);}

// function hacerTarea(num){
//     console.log(`haciendo tarea ${num}`)
//     delay(1000)
// }

// console.log('inicio tareas')
// hacerTarea(1)
// hacerTarea(2)
// hacerTarea(3)
// hacerTarea(4)
// console.log('fin tareas')
// console.log('otras tareas ...')

//______________________________asincronica_____________________________________

function hacerTareas(num,cb){
    console.log(`haciendo tarea ${num}`)
    setTimeout(cb,1000)
}

console.log('inicio de tareas')
hacerTareas(1,() => {
    hacerTareas(2,()=>{
        hacerTareas(3,()=>{
            hacerTareas(4,()=>{
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas')
