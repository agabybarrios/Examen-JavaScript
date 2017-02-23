var numero = 6;

for (i = 1; i <= numero; i++){
  for(j = 1; j <= numero; j++) {
    console.log("*");
    if (i===1 || i === numero || j === 1 || j === numero) {
      console.log("*");
    } else {
      console.log("-");
    }
  }
}console.log("<br>");
