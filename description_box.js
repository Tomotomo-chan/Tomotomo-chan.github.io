function	show_elem(elem_id)
{
	var		old_display;
	var		new_display;

	old_display = document.getElementById(elem_id).style.display;
	console.log("old display");
	console.log(old_display);
	if ( old_display === normal)
		new_display = "none";
	else
		new_display = "normal";
	return (new_display);
}