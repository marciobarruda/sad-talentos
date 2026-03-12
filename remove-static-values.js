const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔍 Removendo valores estáticos dos campos...\n');

// 1. Remover value de nomeCompleto
content = content.replace(
    /(<input type="text" class="form-control bg-light") value="JOÃO DA SILVA" (readonly\s+id="nomeCompleto">)/,
    '$1 $2'
);
console.log('✅ Removido value de nomeCompleto');

// 2. Remover value de cpf
content = content.replace(
    /(<input type="text" class="form-control bg-light") value="123\.456\.789-00" (readonly id="cpf">)/,
    '$1 $2'
);
console.log('✅ Removido value de cpf');

// 3. Remover value de dataNascimento
content = content.replace(
    /(<input type="date" class="form-control bg-light") value="1985-05-15" (readonly\s+id="dataNascimento">)/,
    '$1 $2'
);
console.log('✅ Removido value de dataNascimento');

// 4. Remover value de cargo
content = content.replace(
    /(<input type="text" class="form-control bg-light") value="ANALISTA DE SISTEMAS" (readonly\s+id="cargo">)/,
    '$1 $2'
);
console.log('✅ Removido value de cargo');

// 5. Remover value de vinculo
content = content.replace(
    /(<input type="text" class="form-control bg-light") value="Efetivo" (readonly id="vinculo">)/,
    '$1 $2'
);
console.log('✅ Removido value de vinculo');

// 6. Remover value de dataAdmissao
content = content.replace(
    /(<input type="date" class="form-control bg-light") value="2010-02-01" (readonly\s+id="dataAdmissao">)/,
    '$1 $2'
);
console.log('✅ Removido value de dataAdmissao');

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Todos os valores estáticos foram removidos!');
console.log('✅ Os campos agora serão preenchidos dinamicamente via JavaScript');
console.log('✅ Certifique-se de injetar os dados em window.userData');
