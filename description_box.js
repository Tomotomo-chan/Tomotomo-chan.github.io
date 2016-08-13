function	show_elem(elem_id)
{
	var		old_display;
	var		new_display;

	old_display = document.getElementById(elem_id).style.display;
	console.log("old display");
	console.log(old_display);
	if (old_display.localeCompare("block") == 0)
		new_display = "none";
	else
		new_display = "block";
	return (new_display);
}