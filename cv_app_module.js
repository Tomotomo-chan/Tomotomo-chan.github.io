var cv_app = angular.module("CV_App", []);

function		categorie(id, name, display_type, description_obj)
{
	this.id = id;
	this.name = name;
	this.description = description_obj;
	this.display_type = display_type;
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
	$scope.categorie_list = [new categorie(i += 1, "Langagues de programmation", "boxes",
											[
							 					new description("C", "★★★★☆"),
							 					new description("PHP", "★★★☆☆"),
							 					new description("UNIX", "★★★☆☆"),
												new description("Script shell", "★★★☆☆"),
												new description("HTML CSS", "★★☆☆☆"),
												new description("Javascript", "★★☆☆☆"),
												new description("Python", "★★☆☆☆"),
												new description("MySQL", "★★☆☆☆"),
												new description("Angular JS", "★★☆☆☆"),
												new description("J'aimerais faire:", "Node JS")
											]),
							 new categorie(i += 1, "Parcours scolaire et expériences professionnelles", "list",
							 				[
												new description("⚪ Baccalaureat STI2D (*) (mention Tres Bien)", "(*) Sciences et Technologies de l'Industrie et du Développement Durable. Lycée Monge, Savigny sur Orge (91)"),
												new description("⚪ Ecole 42", "\"Sa pédagogie, c’est le peer-to-peer learning : un fonctionnement participatif qui permet aux étudiants de libérer toute leur créativité grâce à l’apprentissage par projets.[...]\""),
												new description("⚪ STG Interactive - Stage de 6 mois (Octobre 2016 - Avril 2017)", "Stage de fin de 1ère année. Compétences: C, shell script, rigueur, travail d'équipe et remise en question")
							 				]),						 
							 new categorie(i += 1, "Compétences C", "list",
							 				[
							 					new description("⚪ Structures de données", "listes chainées, arbre binaire, structures, etc."),
							 					new description("⚪ Appels système", ""),
							 					new description("⚪ Backtracking", ""),
							 					new description("⚪ Itératif/Récursif", ""),
							 					new description("⚪ Pointeurs sur fonctions", ""),
							 					new description("⚪ Threads", "thread, mutex, conditions, barrier")
							 				]),
							 new categorie(i += 1, "Projets C",  "list",
							 				[
							 					new description("⚪ Recode de la fonction  printf flags sSpdDioOuUxXcC)", ""),
							 					new description("⚪ Recode de la fonction ls avec flags", ""),
							 					new description("⚪ Développement d'un programme utilisant le brute force pour résoudre une problématique", ""),
							 					new description("⚪ Developement d'une IA de tri optimisé", ""),
							 					new description("⚪ Developement d'une IA pour un puissance 4 utilisant l'agorithme MinMax", ""),
							 					new description("⚪ Création d'une bibliothèque personnelle", ""),
							 					new description("⚪ Développement d'un shell type Bash au complet (affichage avec termcaps)", "")
							 				]),
							 new categorie(i += 1, "Projets Web",  "list",
							 				[
							 					new description("⚪ Creation du front-end et d'une partie du back-end d'un site de commerce", "(en php: gestion de sessions, mot de passes, produits), rush de 2 jours"),
							 					new description("⚪ Réalisation d'un site en PHP permettant à des utilisateurs de réaliser et partager des photo-montage ", "Photo montage avec caméra ou photos importées. Implémentation à mains nues des fonctionnalités de base rencontrées sur la majorité des sites possédant une base utilisateur. "),
							 					new description("⚪ Conception d'un site personnel permettant de gérer des économies", "Projet personnel en développement. HTML/CSS, PHP, Angular JS et MySQL")
							 				]),
							 new categorie(i += 1, "Projets/compétences autres",  "list",
							 				[
							 					new description("⚪ Creation de programmes de test unitaires en C et en script shell pour mes projets", ""),
							 					new description("⚪ Utilisation quotidienne de Git", ""),
							 					new description("⚪ Gestion des projets avec Trello", "")
							 				]),
							 new categorie(i += 1, "Langues",  "boxes",
							 				[
							 					new description("Anglais", "lu couramment, écrit et parlé niveau lycée"),
							 					new description("Espagnol", "niveau lycée"),
							 					new description("Japonais", "débutant - apprentissage en auto didacte")
							 				]),
							 new categorie(i += 1, "Hobbies",  "boxes",
							 				[
							 					new description("L'informatique", ""),
							 					new description("La culture japonaise", ""),
							 					new description("Le dessin", ""),
							 					new description("Voyager", ""),
							 					new description("Les arts manuels", ""),
							 					new description("La lecture", "Romans (♡: les Chroniques de l'Armagedon), Mangas..."),
							 					new description("La musique", "(10 ans de flute traversière)"),
							 					new description("La gymnastique aux agrès", "")
							 				])
							 ]

	/* onload */

});
