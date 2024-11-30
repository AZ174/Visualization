let characterCarousel;
let offset = 0;

addSearchIconListener();
addSearchListener();
readRandomCharacter(random => loadFeaturedCharacter(random));
loadTopCharactersCarousel();
loadCharactersCarousel();

function loadCharactersCarousel(offset) {
  listCharacters(offset, characters => {
    characterCarousel = createCarousel('更多', filterCharacterWithoutImages(characters), 'default', loadMoreItems);
    $('.container').fadeIn('slow');
  })
}

function loadMoreItems() {
  offset += 10;
  listCharacters(offset, characters => loadCarousel(filterCharacterWithoutImages(characters), characterCarousel, 'default'));
}

function loadTopCharactersCarousel() {
  listTopCharacters(characters => createCarousel('人气角色', characters, 'big'));
}

function filterCharacterWithoutImages(characters) {
  return characters.filter(character => {
    let expr = /image_not_available/;
    return !expr.test(character.thumbnail.path);
  })
}
