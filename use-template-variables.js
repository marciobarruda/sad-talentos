const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔄 Removendo dados de exemplo e adicionando variáveis de template...\n');

// 1. Remover o bloco de dados de exemplo
const exampleDataRegex = /\s*<!-- Dados do Backend - SUBSTITUA ISSO COM SEUS DADOS REAIS -->\s*<script>[\s\S]*?window\.userData = \[[\s\S]*?\];[\s\S]*?<\/script>/;
content = content.replace(exampleDataRegex, '');
console.log('✅ Dados de exemplo removidos');

// 2. Modificar o código JavaScript para usar variáveis do template
// Substituir a linha que define backendData
const oldBackendDataLine = 'const backendData = window.userData || [];';
const newBackendDataLine = `const backendData = {{ $json }} || [];`;

content = content.replace(oldBackendDataLine, newBackendDataLine);
console.log('✅ Código JavaScript atualizado para usar {{ $json }}');

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Arquivo atualizado com sucesso!');
console.log('✅ O código agora usa {{ $json }} diretamente');
console.log('✅ Não há mais dados de exemplo hardcoded');
console.log('\n📝 O template engine irá substituir {{ $json }} pelos dados reais');
