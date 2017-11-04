/* displayer */

function scroll_top()
{
	$("html,body").animate({
						scrollTop: 0
					  },
					  'slow');
}

/* OBJECTS */

class categorie
{
	constructor(id, name, subtitle, display_type, content_obj)
	{
		this.id = id;
		this.name = name;
		this.subtitle = subtitle;
		this.content = content_obj;
		this.display_type = display_type;
		this.class_id = id % 3;
	}
}

class content
{
	constructor(name, details)
	{
		this.name = name;
		this.details = details;
	}
}

var categorie_display = { BOX: "boxes",
							LIST: "list" }