
function solution(ineq, eq, n, m) {
  if (ineq === "<" && eq === "=") {
    return n <= m ? 1 : 0;
  } else if (ineq === "<" && eq === "!") {
    return n < m ? 1 : 0;
  } else if (ineq === ">" && eq === "=") {
    return n >= m ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    return n > m ? 1 : 0;
  }
}
/* if (ineq === ">" && eq === "!") {
  if (n > m) return 1;
  else return 0;
}
*/
