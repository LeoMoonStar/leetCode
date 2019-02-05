var numJewelsInStones = function(J, S) {
    var number=0;
    for (var i=0;i<J.length;i++){
       for (var j=0;j<S.length;j++) {
            if (J.charAt(i)==S.charAt(j))
                number=number+1;
        }
    }
    return number;
};


console.log(numJewelsInStones("z","ZZ"));