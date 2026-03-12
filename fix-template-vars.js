const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔄 Substituindo dados de exemplo por variáveis de template...\n');

// Substituir o bloco de dados de exemplo por variáveis de template
const exampleDataRegex = /<!-- Dados do Backend - SUBSTITUA ISSO COM SEUS DADOS REAIS -->\s*<script>\s*\/\/ Exemplo de dados[\s\S]*?window\.userData = \[[\s\S]*?\];\s*<\/script>/;

const templateVariablesCode = `<!-- Dados do Backend -->
    <script>
        // Dados injetados do backend via template variables
        window.userData = {{ $json }};
    </script>`;

if (content.match(exampleDataRegex)) {
    content = content.replace(exampleDataRegex, templateVariablesCode);
    console.log('✅ Dados de exemplo substituídos por {{ $json }}');
} else {
    console.log('❌ Bloco de dados de exemplo não encontrado');
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Arquivo atualizado com sucesso!');
console.log('✅ O código agora usa {{ $json }} para receber dados do backend');
console.log('✅ O template engine (n8n) irá substituir {{ $json }} pelos dados reais');
console.log('\n📝 Formato esperado: array de objetos com campos cpf, nomeCompleto, matricula, etc.');
