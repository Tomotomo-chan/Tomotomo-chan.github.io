function	show_elem(elem_id)
{
	var		old_display;
	var		new_display;

	old_display = document.getElementById(elem_id).style.display;
	console.log(old_display);
	if ( old_display.localeCompare("none") == 0)
		new_display = "normal";
	else
		new_display = "none";
	document.getElementById(elem_id).style.display = new_display;
}