function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function isPalindrom (string) {
  const cleanString = string.toLowerCase().replaceAll('', '');
  let revString = '';

  for (let i = cleanString.length - 1; i >=0; i--){
    revString += cleanString[i];
  }

  return cleanString === revString;
}

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');
