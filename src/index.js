module.exports = function check(str, bracketsConfig) {


	if(str.length%2!=0)
	{
		return false;
	}


	let map = new Map(bracketsConfig);
	let array = [];
	
	for (let i = 0; i < str.length; i++)
	 {

		if(str[i]==map.get(array[array.length - 1]))
		{
			array.pop();
		}
		else 
		{
			array.push(str[i]);
		}
	}


	
	
	return array.length === 0;
	}