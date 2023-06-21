//extensible fizzbuzz

const fb=(n,c=0)=>{
    if (c>=n){return};
    let w;[[3,"fizz"],[5,"buzz"]].forEach((item)=>{c%item[0]==0?(()=>{w=1;process.stdout.write(item[1]);})():(()=>{})()});
    w?(()=>{process.stdout.write('\n')})():(()=>{console.log(c)})();fb(n,++c);
}

fb(100)
