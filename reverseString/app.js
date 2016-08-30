function trans(s, n){
        //write code here
    var splited = s.split(' ');
    splited = splited.reverse();
	function changeUpper(str) {
     function reverseUpperLower(c) {
       return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
     }
     var sp = str.split('');
     var re = sp.map(reverseUpperLower);
     return re.join('');
   }
   var reArr = splited.map(changeUpper);
    return reArr.join(' ');
}
   
console.log(trans('asd fFFDF', 1));