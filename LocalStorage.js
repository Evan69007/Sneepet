sessionStorage.getItem('key', 'value') // récupère la valeur assigé à la clé 'key' dans le sessionStorage si elle éxiste, si elle n'éxiste pas, return undefined
sessionStorage.setItem('key', 'value') // créé/modifie une clé dans le sessionStorage et lui assigne une valeur

JSON.parse(sessionStorage.getItem('key')) // parse un tableau/objet stocké dans le sessionStorage
sessionStorage.setItem('key', JSON.stringify('value')) // met un tableau/objet en string pour pouvoir la stocker dans le sessionStorage et le récuperer plus tard grâce à JSON.parse()
