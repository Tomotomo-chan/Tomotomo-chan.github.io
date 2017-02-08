/* displayer */

function scroll_top()
{
	$("html,body").animate({
						scrollTop: 0
					  },
					  'slow');
}

/* OBJECTS */

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

/* tools */

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
