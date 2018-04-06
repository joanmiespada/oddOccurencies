

function solution(A) {
    
    var dic = {};

    for(var i=0;i<A.length;i++)
        {
            
            if( dic[A[i]] === undefined ||dic[A[i]] === 0 )
                dic[A[i]] = 1;
            else if( dic[A[i]] === 1)
                delete dic[A[i]];
        }

    for(var i in dic)
        {
            return Number(i);
        }
    
}

var res = solution([9,3,9,3,9,7,9]);
console.log(res);

