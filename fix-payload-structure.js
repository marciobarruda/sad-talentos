const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔄 Ajustando template variables para nova estrutura de payload...\n');

// 1. Corrigir campos HTML - dados comuns ($json -> $json[0])
content = content.replace(
    /value="\{\{ \$json\.nomeCompleto \}\}"/g,
    'value="{{ $json[0].nomeCompleto }}"'
);
console.log('✅ Nome Completo: $json.nomeCompleto → $json[0].nomeCompleto');

content = content.replace(
    /value="\{\{ \$json\.dataNascimento \}\}"/g,
    'value="{{ $json[0].dataNascimento }}"'
);
console.log('✅ Data Nascimento: $json.dataNascimento → $json[0].dataNascimento');

// 2. Corrigir campos HTML - dados de vínculo ($json -> $json[0].vinculos[0])
content = content.replace(
    /value="\{\{ \$json\.cargo \}\}"/g,
    'value="{{ $json[0].vinculos[0].cargo }}"'
);
console.log('✅ Cargo: $json.cargo → $json[0].vinculos[0].cargo');

content = content.replace(
    /value="\{\{ \$json\.vinculo \}\}"/g,
    'value="{{ $json[0].vinculos[0].vinculo }}"'
);
console.log('✅ Vínculo: $json.vinculo → $json[0].vinculos[0].vinculo');

content = content.replace(
    /value="\{\{ \$json\.dataAdmissao \}\}"/g,
    'value="{{ $json[0].vinculos[0].dataAdmissao }}"'
);
console.log('✅ Data Admissão: $json.dataAdmissao → $json[0].vinculos[0].dataAdmissao');

// 3. Corrigir objeto BIND - dados comuns
content = content.replace(
    /cpf: `\{\{ \$json\.cpf \}\}`/g,
    'cpf: `{{ $json[0].cpf }}`'
);
content = content.replace(
    /nomeCompleto: `\{\{ \$json\.nomeCompleto \}\}`/g,
    'nomeCompleto: `{{ $json[0].nomeCompleto }}`'
);
content = content.replace(
    /dataNascimento: `\{\{ \$json\.dataNascimento \}\}`/g,
    'dataNascimento: `{{ $json[0].dataNascimento }}`'
);
content = content.replace(
    /nacionalidade: `\{\{ \$json\.nacionalidade \}\}`/g,
    'nacionalidade: `{{ $json[0].nacionalidade }}`'
);
content = content.replace(
    /lotacao: `\{\{ \$json\.lotacao \}\}`/g,
    'lotacao: `{{ $json[0].lotacao }}`'
);
content = content.replace(
    /pcd: \{\{ \$json\.pcd \}\}/g,
    'pcd: {{ $json[0].pcd }}'
);
content = content.replace(
    /genero: `\{\{ \$json\.genero \}\}`/g,
    'genero: `{{ $json[0].genero }}`'
);
content = content.replace(
    /racaCor: `\{\{ \$json\.racaCor \}\}`/g,
    'racaCor: `{{ $json[0].racaCor }}`'
);
content = content.replace(
    /email: `\{\{ \$json\.email \}\}`/g,
    'email: `{{ $json[0].email }}`'
);
content = content.replace(
    /telefone: `\{\{ \$json\.telefone \}\}`/g,
    'telefone: `{{ $json[0].telefone }}`'
);
console.log('✅ Objeto BIND.dadosComuns: $json → $json[0]');

// 4. Corrigir objeto BIND - vinculos
content = content.replace(
    /matricula: `\{\{ \$json\.matricula \}\}`/g,
    'matricula: `{{ $json[0].vinculos[0].matricula }}`'
);
content = content.replace(
    /cargo: `\{\{ \$json\.cargo \}\}`/g,
    'cargo: `{{ $json[0].vinculos[0].cargo }}`'
);
content = content.replace(
    /vinculo: `\{\{ \$json\.vinculo \}\}`/g,
    'vinculo: `{{ $json[0].vinculos[0].vinculo }}`'
);
content = content.replace(
    /dataAdmissao: `\{\{ \$json\.dataAdmissao \}\}`/g,
    'dataAdmissao: `{{ $json[0].vinculos[0].dataAdmissao }}`'
);

content = content.replace(
    /matricula: `\{\{ \$json\[1\]\.matricula \}\}`/g,
    'matricula: `{{ $json[0].vinculos[1].matricula }}`'
);
content = content.replace(
    /cargo: `\{\{ \$json\[1\]\.cargo \}\}`/g,
    'cargo: `{{ $json[0].vinculos[1].cargo }}`'
);
content = content.replace(
    /vinculo: `\{\{ \$json\[1\]\.vinculo \}\}`/g,
    'vinculo: `{{ $json[0].vinculos[1].vinculo }}`'
);
content = content.replace(
    /dataAdmissao: `\{\{ \$json\[1\]\.dataAdmissao \}\}`/g,
    'dataAdmissao: `{{ $json[0].vinculos[1].dataAdmissao }}`'
);
console.log('✅ Objeto BIND.vinculos: $json → $json[0].vinculos[]');

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Arquivo atualizado com sucesso!');
console.log('✅ Estrutura agora corresponde ao novo payload:');
console.log('   - Dados comuns: $json[0].campo');
console.log('   - Vínculos: $json[0].vinculos[0].campo');
