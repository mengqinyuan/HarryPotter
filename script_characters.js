// Initialize the language to English by default.
let currentLanguage = "en";

function changeLanguage(lang) {
    currentLanguage = lang;
    updateCharacterInfo();
}

document.getElementById('character-image').addEventListener('click', function() {
    const infoElement = document.getElementById('character-info');
    if (infoElement.style.display === 'none') {
        infoElement.style.display = 'block';
        updateCharacterInfo();
    } else {
        infoElement.style.display = 'none';
    }
});

function updateCharacterInfo() {
    const infoElement = document.getElementById('character-info');
    if (currentLanguage === "en") {
        infoElement.textContent = `Harry Potter is the protagonist of J.K. Rowling's Harry Potter series. Born on July 31, 1980, he is the son of James Potter and Lily Potter. Harry has black hair and green eyes, and his wand is 11 inches long, made of holly with a phoenix feather core from Fawkes. He attends Hogwarts School of Witchcraft and Wizardry in Gryffindor house and leads Dumbledore's Army.`;
    } else if (currentLanguage === "zh") {
        infoElement.textContent = `哈利·波特是J.K.罗琳的《哈利·波特》系列小说中的主角。他出生于1980年7月31日，是詹姆·波特和莉莉·波特的儿子。哈利有着黑发绿眼，他的魔杖长11英寸，是由冬青木制成，杖芯是凤凰福克斯的尾羽。他在霍格沃茨魔法学校就读于格兰芬多学院，并且是邓布利多军的领导人。`;
    }
}