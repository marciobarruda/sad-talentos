const fs = require('fs');

// Ler arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

// Função para converter caracteres especiais em HTML entities
function toHtmlEntities(text) {
    const entities = {
        'á': '&aacute;', 'Á': '&Aacute;',
        'â': '&acirc;', 'Â': '&Acirc;',
        'ã': '&atilde;', 'Ã': '&Atilde;',
        'à': '&agrave;', 'À': '&Agrave;',
        'ç': '&ccedil;', 'Ç': '&Ccedil;',
        'é': '&eacute;', 'É': '&Eacute;',
        'ê': '&ecirc;', 'Ê': '&Ecirc;',
        'í': '&iacute;', 'Í': '&Iacute;',
        'ó': '&oacute;', 'Ó': '&Oacute;',
        'ô': '&ocirc;', 'Ô': '&Ocirc;',
        'õ': '&otilde;', 'Õ': '&Otilde;',
        'ú': '&uacute;', 'Ú': '&Uacute;',
        'ü': '&uuml;', 'Ü': '&Uuml;'
    };

    return text.replace(/[áÁâÂãÃàÀçÇéÉêÊíÍóÓôÔõÕúÚüÜ]/g, char => entities[char] || char);
}

// Encontrar o SELECT de nacionalidade
const nacionalidadeRegex = /<select class="form-select" required id="nacionalidade">([\s\S]*?)<\/select>/;
const match = content.match(nacionalidadeRegex);

if (match) {
    const originalSelect = match[0];
    const selectContent = match[1];

    // Converter caracteres especiais para HTML entities
    const newSelectContent = toHtmlEntities(selectContent);
    const newSelect = `<select class="form-select" required id="nacionalidade">${newSelectContent}</select>`;

    // Substituir no conteúdo
    content = content.replace(originalSelect, newSelect);

    // Salvar arquivo
    fs.writeFileSync('arealogada.html', content, 'utf8');

    console.log('✅ SELECT de Nacionalidade atualizado com HTML entities!');
    console.log('✅ Todos os caracteres especiais foram convertidos');
    console.log('✅ Exemplos: á→&aacute;, ã→&atilde;, ç→&ccedil;, ê→&ecirc;, etc.');
} else {
    console.log('❌ SELECT de nacionalidade não encontrado');
}
