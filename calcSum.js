/** 大数计算和 */
function calcSum (n1, n2) {
  var s1 = n1.split('')
  var s2 = n2.split('')
  var f = false
  var str = ''
  while (s1.length || s2.length || f) {
    var a = Number(s1.pop() || 0)
    var b = Number(s2.pop() || 0)
    total = f + a + b
    str = (total % 10) + str
    f = total >= 10
  }
  return str
}