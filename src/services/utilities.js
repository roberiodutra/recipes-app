export function getVideoID(url) {
  return url.split(/(v=|youtu\.be\/)/)[2];
}

export function measure(index, details) {
  const measureIndex = `${details[`strMeasure${index + 1}`]}`;
  return measureIndex !== 'null' ? ` - ${measureIndex}` : '';
}

export function shareLink(setCopied, url) {
  navigator.clipboard.writeText(url)
    .then(() => {
      setCopied(true);
    });
}

export function storageObj(detail, option) {
  return {
    id: detail.idMeal || detail.idDrink,
    type: option.includes('foods') ? 'food' : 'drink',
    nationality: detail.strArea || '',
    category: detail.strCategory,
    alcoholicOrNot: detail.strAlcoholic || '',
    name: detail.strMeal || detail.strDrink,
    image: detail.strMealThumb || detail.strDrinkThumb,
  };
}
