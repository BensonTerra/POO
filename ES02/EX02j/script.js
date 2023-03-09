function exercicio(Fname, Lname, ...argumentos) 
{   
    console.log(`The ${Fname}${Lname} has ${argumentos.length} friends`)
}
Fname = prompt("Insira o primeiro nome")
Lname = prompt("Insira o ultimo nome")
exercicio(Fname, Lname, 1,2,3,4,5)