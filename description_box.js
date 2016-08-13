function	show_elem(elem_id)
{
	var		old_display;
	var		new_display;

	old_display = document.getElementById(elem_id).style.display;
	console.log("old display");
	console.log(old_display);
	if (old_display.localeCompare("normal") == 0)
		new_display = "none";
	else
		new_display = "normal";
	console.log("new");
	console.log(new_display);
	return (new_display);
}