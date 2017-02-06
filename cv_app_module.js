var cv_app = angular.module("CV_App", []);

function		categorie(id, name, description)
{
	this.id = id;
	this.name = name;
	this.description = description;
	this.class_id = id % 3;
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
	$scope.categorie_list = [new categorie(i += 1, "Langagues de programmation", ""),
							 new categorie(i += 1, "Parcours scolaire", ""),						 
							 new categorie(i += 1, "Compétences C", ""),
							 new categorie(i += 1, "Projets C", ""),
							 new categorie(i += 1, "Projets Web", ""),
							 new categorie(i += 1, "Projets/compétences autres", ""),
							 new categorie(i += 1, "Langues", ""),
							 new categorie(i += 1, "Hobbies", "")];

	/* onload */

});