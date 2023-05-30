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
}] ;
const hola={"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
console.log(hola.menu.id);
console.log(hola.menu.value);
 hola.menu.popup.menuitem.map(function(per) {
  console.log( per.value+' '+ per.onclick);
});
