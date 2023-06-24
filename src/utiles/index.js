export function turncate(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix
  } else {
    return text
  }
}

export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function formatNum(num) {
  return new Intl.NumberFormat('fr-FR').format(num)
}
