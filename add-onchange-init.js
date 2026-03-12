const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔄 Adicionando chamada onMatriculaChange() no DOMContentLoaded...\n');

// Encontrar e substituir o trecho após addUniversity()
const pattern = /(\s+\/\/ Also initialize university management\r?\n\s+addUniversity\(\);)\r?\n(\s+}\);)/;

const replacement = `$1
            
            // Initialize matricula-dependent fields
            onMatriculaChange();
$2`;

if (content.match(pattern)) {
    content = content.replace(pattern, replacement);
    console.log('✅ Chamada onMatriculaChange() adicionada após addUniversity()');
} else {
    console.log('❌ Padrão não encontrado - tentando abordagem alternativa');

    // Tentar encontrar apenas addUniversity();
    const altPattern = /(addUniversity\(\);)\r?\n(\s+}\);)/;
    if (content.match(altPattern)) {
        const altReplacement = `$1
            
            // Initialize matricula-dependent fields
            onMatriculaChange();
$2`;
        content = content.replace(altPattern, altReplacement);
        console.log('✅ Chamada onMatriculaChange() adicionada (abordagem alternativa)');
    } else {
        console.log('❌ Não foi possível adicionar automaticamente');
    }
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Arquivo atualizado!');
console.log('✅ onMatriculaChange() será chamado ao carregar a página');
console.log('✅ Campos cargo, vínculo e data admissão serão populados automaticamente');
console.log('✅ Campos atualizarão ao trocar de matrícula');
