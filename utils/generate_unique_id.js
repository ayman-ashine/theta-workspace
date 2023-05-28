// Generator : Generate unique id

let ID_LIST = ['']
const ID_DATA = {
  characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  length: 4
}

export function Generate_Unique_Id() {

  let unique_id = ''

  while(true){

    for(let i=0; i<ID_DATA.length; i++){
      unique_id += ID_DATA.characters[
        Math.floor( Math.random() * ID_DATA.characters.length )
      ]
    }

    if(!ID_LIST.includes(unique_id)) break
    else unique_id = ''

  } ID_LIST.push(unique_id)

  return unique_id

}