const fs = require('fs');

// Ler arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

// Corrigir HTML entities mal codificadas no SELECT de nacionalidade
const fixes = {
    'Alem&Atilde;£': 'Alem&atilde;',
    'Arm&Atilde;ªnia': 'Arm&ecirc;nia',
    'Austr&Atilde;­aca': 'Austr&iacute;aca',
    'B&Atilde;³sniaca': 'B&oacute;sniaca',
    'B&Atilde;ºlgara': 'B&uacute;lgara',
    'Eg&Atilde;­pcia': 'Eg&iacute;pcia',
    'Est&Atilde;´nia': 'Est&ocirc;nia',
    'Et&Atilde;­ope': 'Et&iacute;ope',
    'Guin&Atilde;©-Bissauense': 'Guin&eacute;-Bissauense',
    'H&Atilde;ºngara': 'H&uacute;ngara',
    'Indon&Atilde;©sia': 'Indon&eacute;sia',
    'Let&Atilde;£': 'Let&atilde;',
    'L&Atilde;­bia': 'L&iacute;bia',
    'Maced&Atilde;´nia': 'Maced&ocirc;nia',
    'Micron&Atilde;©sia': 'Micron&eacute;sia',
    'Mo&Atilde;§ambicana': 'Mo&ccedil;ambicana',
    'S&Atilde;©rvia': 'S&eacute;rvia',
    'S&Atilde;­ria': 'S&iacute;ria',
    'Su&Atilde;­&Atilde;§a': 'Su&iacute;&ccedil;a',
    'S&Atilde;£o-Cristovense': 'S&atilde;o-Cristovense',
    'S&Atilde;£o-Marinense': 'S&atilde;o-Marinense',
    'S&Atilde;£o-Tomense': 'S&atilde;o-Tomense'
};

// Aplicar todas as correções
for (const [wrong, correct] of Object.entries(fixes)) {
    content = content.replace(new RegExp(wrong, 'g'), correct);
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('✅ HTML entities corrigidas no SELECT de Nacionalidade!');
console.log('✅ Todas as nacionalidades agora usam entities corretas');
console.log('✅ Exemplos: Alemã, Armênia, Austríaca, Egípcia, etc.');
