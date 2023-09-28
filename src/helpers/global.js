export function isNumberKey(evt) {
  let charCode = evt.which ? evt.which : event.keyCode
  if ((charCode > 31 && charCode < 48) || charCode > 57) {
    evt.preventDefault()
    return false
  }
  return true
}

export function formatNum(num) {
  return new Intl.NumberFormat('fr-FR').format(num)
}

export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function turncate(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix
  } else {
    return text
  }
}