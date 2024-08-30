let input="30 50 30 50 20 50 50 20 50 50 50"
let inn=input.split(" ").map(Number);
let pair=0;
inn.sort((a,b)=>a-b);
console.log(inn);
for(i=0;i<inn.length;i++){
    for(j=i+1;j<inn.length;j++){
        if(inn[i]==inn[j]){
          pair++;
          i=i+1;
        }
    }
}
console.log(pair)
