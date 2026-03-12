const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔄 Removendo valores hardcoded dos campos cargo, vínculo e data de admissão...\n');

// Remover value dos campos cargo, vínculo e data de admissão
content = content.replace(
    /<input type="text" class="form-control bg-light" readonly id="cargo"\s*value="\{\{ \$json\.vinculos\[0\]\.cargo \}\}">/g,
    '<input type="text" class="form-control bg-light" readonly id="cargo">'
);
console.log('✅ Campo Cargo: value removido');

content = content.replace(
    /<input type="text" class="form-control bg-light" readonly id="vinculo"\s*value="\{\{ \$json\.vinculos\[0\]\.vinculo \}\}">/g,
    '<input type="text" class="form-control bg-light" readonly id="vinculo">'
);
console.log('✅ Campo Vínculo: value removido');

content = content.replace(
    /<input type="date" class="form-control bg-light" readonly id="dataAdmissao"\s*value="\{\{ \$json\.vinculos\[0\]\.dataAdmissao \}\}">/g,
    '<input type="date" class="form-control bg-light" readonly id="dataAdmissao">'
);
console.log('✅ Campo Data de Admissão: value removido');

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Arquivo atualizado!');
console.log('✅ Campos agora serão populados dinamicamente via JavaScript');
console.log('✅ onMatriculaChange() irá preencher os valores baseado na matrícula selecionada');
