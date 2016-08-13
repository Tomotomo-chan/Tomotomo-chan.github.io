function ft_age(born_date)
{
	var birthday;
  	var age;
  	var string;

  	birthday = new Date(birthday);
  	age = new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
	
  	string = "Nee le".concat(born_date);
  	string = string.concat("(");
  	string = string.concat(age);
  	string = string.concat(")");
	document.getElementById("age").innerHTML = string;
}
