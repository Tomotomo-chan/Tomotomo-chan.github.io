function	disp_mathilde_age()
{
	var str_age;

	console.log("coucou 0");
	str_age = ft_age("20 October 1996");
	document.getElementById("age").innerHTML = str_age;
}

function	ft_age(born_date)
{
	var birthday;
	var	age;
	var result;

	console.log("coucou 1");
	birthday = new Date(born_date);
	age = new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0) - 1;
	result = "Nee le 20/10/1996 (";
	result = result.concat(age);
	result = result.concat(" ans)");
	console.log("coucou 2");
	return result;
}
