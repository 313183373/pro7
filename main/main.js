module.exports = function main(str) {
	var numbers=[[['._.'],['|.|'],['|_|']],[['...'],['..|'],['..|']],[['._.'],['._|'],['|_.']],[['._.'],['._|'],['._|']],[['...'],['|_|'],['..|']],[['._.'],['|_.'],['._|']],[['._.'],['|_.'],['|_|']],[['._.'],['..|'],['..|']],[['._.'],['|_|'],['|_|']],[['._.'],['|_|'],['..|']]];
	var result="";
	for(let i=0;i<3;i++){
		for(let j=0;j<str.length;j++){
			result+=numbers[parseInt(str.charAt(j))][i];
			if(j!=str.length-1){
				result+=' ';
			}
		}
		result+='\n';
	}
	return result;
};