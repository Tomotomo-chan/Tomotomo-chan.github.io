function	show_elem(elem_id)
{
	var		old_display;
	var		new_display;

	old_display = document.getElementById(elem_id).style.display;
	if (old_display.localeCompare("block") == 0)
		new_display = "none";
	else
		new_display = "block";
	return (new_display);
}

function	get_color_with_competence(nb_stars)
{
	var color;

	if (nb_stars == 5)
		color = "#66ff66";
	else if (nb_stars == 4)
		color = "ccff66";
	else if (nb_stars == 3)
		color = "ffff99";
	else if (nb_stars == 2)
		color = "ff9966";
	else if (nb_start == 1)
		color = "ff6666";
	else
		color = "cc0000";
	return color;
}

function	check_stars(nb_stars)
{
	if (nb_stars < 0)
		nb_stars = 0;
	else if (nb_stars > 5)
		nb_stars = 5;
	return nb_stars;
}

function	disp_competence(competence, nb_stars)
{
	var		i;
	var		color;
	var		string;

	i = 0;
	nb_stars = check_stars(nb_stars);
	color = get_color_with_competence(nb_stars);
	string = "";
	console.log("coucou 1");
	while (i < 5)
	{
		if (i < nb_stars)
			string = string.concat("★");
		else
			string = string.concat("☆");
		i++;
	}
	document.getElementById(competence).style.color = color;
	document.getElementById(competence).innerHTML = competence.concat(string);
}
