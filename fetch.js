fetch(url) // fonction asynchrone qui permet de faire des requetês http grâce à un url donné en paramètre de la fonction

try // essaye d'éxecuter le code entre les accolades
{
	fetch(badUrl)
}
catch (error) // si le code dans le try ne peut pas être éxecuté, éxecute le code dans les accolades du catch
{
	console.error(error);
}