// Generator : Generate unique id //

const generateUniqueId = () => {

  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let unique_id = ''

  for (let i = 0; i < 6; i++)
    unique_id += characters[ Math.floor(Math.random() * characters.length) ]

  return unique_id

}

export { generateUniqueId }