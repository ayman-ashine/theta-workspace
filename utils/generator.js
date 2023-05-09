// Generator : Generate unique id

const DATA = {

  characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  length: 4

}

let STOCK = ['']

export function Generator() {

  let id = ''
  
  while(STOCK.includes(id)){

    id = ''
    for(let i=0; i<DATA.length; i++){

      id += DATA.characters[Math.floor( Math.random() * DATA.characters.length )]

    }
    
  }

  STOCK.push(id)

  return id

}