var cv_app = angular.module("CV_App", []);

function		categorie(id, name, description_obj)
{
	this.id = id;
	this.name = name;
	this.description = description_obj;
	this.class_id = id % 3;
}

function		description(name, content)
{
	this.name = name;
	this.content = content;
}

function		get_categorie_color(id)
{
	res = id % 3;
	if (res == 0)
		color = "#eaece5";
	else if (res == 1)
		color = "#3b3a30";
	else
		color = "#c5d5c5";
	return (color);
}

cv_app.controller("CV_Ctrl", function ($scope)
{
	var i = 0;
	$scope.categorie_list = [new categorie(i += 1, "Langagues de programmation",
											[
							 					new description("", "")
											]),
							 new categorie(i += 1, "Parcours scolaire",
							 				[
												new description("Baccalaureat STI2D (*) (mention Tres Bien)", "(*) Sciences et Technologies de l'Industrie et du Développement Durable"),
												new description("Ecole 42", "\"Sa pédagogie, c’est le peer-to-peer learning : un fonctionnement participatif qui permet aux étudiants de libérer toute leur créativité grâce à l’apprentissage par projets.[...]\"")
							 				]),						 
							 new categorie(i += 1, "Compétences C", 
							 				[
							 					new description("", "")
							 				]),
							 new categorie(i += 1, "Projets C", 
							 				[
							 					new description("", "")
							 				]),
							 new categorie(i += 1, "Projets Web", 
							 				[
							 					new description("", "")
							 				]),
							 new categorie(i += 1, "Projets/compétences autres", 
							 				[
							 					new description("", "")
							 				]),
							 new categorie(i += 1, "Langues", 
							 				[
							 					new description("", "")
							 				]),
							 new categorie(i += 1, "Hobbies", 
							 				[
							 					new description("", "")
							 				])
							 ]

	/* onload */

});
