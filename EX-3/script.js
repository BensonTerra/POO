function numeroDeCidadesV2(...args)  
{
  let res = ""
  for (let cidade of args)
  {
    res += `${cidade},`
  }
  alert(`Você visitou as cidades: ${res}`)
}
numeroDeCidadesV2("Madrid","Braga","Aveiro","Funchal")