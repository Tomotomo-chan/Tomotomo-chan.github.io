function	ft_age(born_date)
{
	var birthday;
	var	age;
	var result;

	birthday = new Date(born_date);
	age = new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0) - 1;
	result = "Née le 20/10/1996 (";
	result = result.concat(age);
	result = result.concat(" ans)");
	return result;
}
