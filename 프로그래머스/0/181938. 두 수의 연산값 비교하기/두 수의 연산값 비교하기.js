function solution(a, b) {
    const ab = Number(`${a}${b}`);
    const ab2 = 2 * a * b;
    return ab > ab2 ? ab : ab2;
}
/* function solution(a,b) {
    return Math.max(Number(`${a}${b}`), 2 * a * b);
}
*/
