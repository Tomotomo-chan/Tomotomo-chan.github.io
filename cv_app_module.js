var cv_app = angular.module("CV_App", []);

cv_app.controller("CV_Ctrl", function ($scope)
{
	var i = 0;

	$scope.categorie_list = [new categorie(i += 1, "Langagues de programmation",
													"★ = connaissances, ★★ = maitrise des principes de bases, ★★★ = bonne maitrise des subtilités du langage, ★★★★ = pro du code !", categorie_display.BOX,
											[
							 					new content("C", "★★★☆"),
												new content("Script shell", "★★★☆"),
							 					new content("UNIX", "★★☆☆"),
							 					new content("C++", "★★☆☆"),
												new content("Swift", "★★☆☆"),
												new content("Python", "★☆☆☆"),
												new content("HTML CSS", "★★★☆"),
												new content("AngularJS / 2", "★☆☆☆"),
												new content("Node JS / PHP", "★☆☆☆"),
												new content("BDD - Mongoose, MySQL", "★☆☆☆")
											]),
							 new categorie(i += 1, "Parcours scolaire et expériences professionnelles", "", categorie_display.LIST,
							 				[
												new content("Baccalaureat STI2D (*) (mention Tres Bien)", "(*) Sciences et Technologies de l'Industrie et du Développement Durable. Lycée Monge, Savigny sur Orge (91)"),
												new content("Ecole 42", "\"Sa pédagogie, c’est le peer-to-peer learning : un fonctionnement participatif qui permet aux étudiants de libérer toute leur créativité grâce à l’apprentissage par projets.[...]\""),
												new content("STG Interactive - Stage de 6 mois (Octobre 2016 - Avril 2017)", "Stage de fin de 1ère année. Compétences: C, shell script, rigueur, travail d'équipe et remise en question")
							 				]),						 
							 new categorie(i += 1, "Compétences", "", categorie_display.BOX,
							 				[
							 					new content("Programmation Orientée Objet", "En C++, PHP, javascript, swift et python"),
							 					new content("Structures de données", "listes chainées, arbre binaire, structures, dictionnaire, tuples, etc."),
							 					new content("Threads", "thread, mutex, conditions, barrier"),
							 					new content("API REST", "Framework slim en php, "),
							 				]),
							 new categorie(i += 1, "Quelques projets", "", categorie_display.LIST,
							 				[
							 					new content("42sh (C)", "Développement d'un shell type Bash au complet (affichage avec termcaps)"),
							 					new content("libASM (assembleur)", "Création d'une petite librairie en assembleur pour découvrir le langage et les principes de très bas niveau."),
							 					new content("Swifty Companion (Swift - iOS)", "Réalisation d'une application permettant de lister les infos des élèves en utilisant l'API de l'école"),
							 					new content("Piscine CPP", "Le but est d'aborder les concepts de base de la POO à travers les spécifités du C++"),
							 					new content("PiggyBox (Angular2/NodeJS/Mongoose)", "Conception d'un site personnel permettant de gérer son budget")
							 				]),
							 new categorie(i += 1, "Outils", "", categorie_display.LIST,
							 				[
							 					new content("Tests unitaires", "Création systématique de tests unitaires ou e2e (C, script shell, jasmine pour le web et frisby pour les APIS)"),
							 					new content("Utilisation quotidienne de Git", ""),
							 					new content("Gestion des projets avec Trello", "")
							 				]),
							 new categorie(i += 1, "Langues", "", categorie_display.BOX,
							 				[
							 					new content("Anglais", "lu couramment, écrit et parlé niveau lycée"),
							 					new content("Espagnol", "niveau lycée"),
							 					new content("Japonais", "débutant - apprentissage en auto didacte")
							 				]),
							 new categorie(i += 1, "Hobbies", "", categorie_display.BOX,
							 				[
							 					new content("L'informatique", ""),
							 					new content("La culture japonaise", ""),
							 					new content("Le dessin", ""),
							 					new content("Voyager", ""),
							 					new content("Les arts manuels", ""),
							 					new content("La lecture", "Romans, Mangas..."),
							 					new content("La musique", "(10 ans de flute traversière)"),
							 					new content("La gymnastique aux agrès", "")
							 				])
							 ]


	/* display function */

	$scope.smooth_roll = function (button_id)
	{
		div_id = "#div_" + button_id;

		$('html,body').animate({ scrollTop: $(div_id).offset().top  },
							   'slow');
		
	}

});
