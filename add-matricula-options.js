const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔄 Adicionando options do SELECT matrícula com template variables...\n');

// Encontrar o SELECT de matrícula e substituir o conteúdo
const selectRegex = /(<select class="form-select bg-light" id="matricula" onchange="onMatriculaChange\(\)">)\s*<!-- Populado dinamicamente via JavaScript -->\s*(<\/select>)/;

const newSelectContent = `$1
                                <option value="0" selected>{{ $json.vinculos[0].matricula }}</option>
                                <option value="1">{{ $json.vinculos[1].matricula }}</option>
                            $2`;

if (content.match(selectRegex)) {
    content = content.replace(selectRegex, newSelectContent);
    console.log('✅ Options adicionadas ao SELECT matrícula');
} else {
    console.log('❌ SELECT matrícula não encontrado ou já modificado');
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Arquivo atualizado!');
console.log('✅ SELECT matrícula agora tem:');
console.log('   - Option 1 (value="0"): {{ $json.vinculos[0].matricula }}');
console.log('   - Option 2 (value="1"): {{ $json.vinculos[1].matricula }}');
console.log('\n✅ Campos já configurados:');
console.log('   - Cargo: {{ $json.vinculos[0].cargo }}');
console.log('   - Vínculo: {{ $json.vinculos[0].vinculo }}');
console.log('   - Data Admissão: {{ $json.vinculos[0].dataAdmissao }}');
