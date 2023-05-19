const persona =[{
  
  nombre: ['Bob', 'Smith'],
  edad: 32,
  genero: 'masculino',
  intereses: ['música', 'esquí'],
},
{
  
  nombre: ['Maria', 'Carmen'],
  edad: 31,
  genero: 'Femenino',
  intereses: ['música', 'Bailar'],
}] 
 persona.map(function(per) {
  console.log('Hola, Soy '+ per.nombre + '. ');
});