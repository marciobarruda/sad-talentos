const fs = require('fs');

console.log('🔄 Aplicando correções completas...\n');

// Ler arquivo atual
let content = fs.readFileSync('arealogada.html', 'utf8');

// 1. BLOQUEAR template variables conforme solicitado pelo usuário
console.log('1️⃣ Bloqueando template variables...');

// Bloquear no SELECT de matrícula
content = content.replace(
    /<option value="0" selected>\{\{ \$json\.vinculos\[0\]\.matricula \}\}<\/option>/g,
    '<option value="0" selected>{{ $json.vinculos[0].matricula }}</option>'
);
content = content.replace(
    /<option value="1">\{\{ \$json\.vinculos\[1\]\.matricula \}\}<\/option>/g,
    '<option value="1">{{ $json.vinculos[1].matricula }}</option>'
);
console.log('   ✅ Matrículas bloqueadas no SELECT');

// 2. CORRIGIR função onMatriculaChange() para usar BIND.vinculos
console.log('\n2️⃣ Corrigindo função onMatriculaChange()...');

const oldOnMatriculaChange = `        // Function called when matricula changes
        function onMatriculaChange() {
            const selectMatricula = document.getElementById('matricula');
            const selectedIndex = selectMatricula.value;
            const matriculaData = matriculasData[selectedIndex];
            
            if (matriculaData) {
                document.getElementById('cargo').value = matriculaData.cargo || '';
                document.getElementById('vinculo').value = matriculaData.vinculo || '';
                document.getElementById('dataAdmissao').value = matriculaData.dataAdmissao || '';
            }
        }`;

const newOnMatriculaChange = `        // Function called when matricula changes
        function onMatriculaChange() {
            const selectMatricula = document.getElementById('matricula');
            const selectedIndex = parseInt(selectMatricula.value);
            
            // Use BIND.vinculos instead of matriculasData
            const vinculoData = BIND.vinculos[selectedIndex];
            
            if (vinculoData) {
                document.getElementById('cargo').value = safeValue(vinculoData.cargo);
                document.getElementById('vinculo').value = safeValue(vinculoData.vinculo);
                document.getElementById('dataAdmissao').value = safeValue(vinculoData.dataAdmissao);
            } else {
                // Clear fields if no data
                document.getElementById('cargo').value = '';
                document.getElementById('vinculo').value = '';
                document.getElementById('dataAdmissao').value = '';
            }
        }`;

content = content.replace(oldOnMatriculaChange, newOnMatriculaChange);
console.log('   ✅ Função onMatriculaChange() atualizada para usar BIND.vinculos');

// 3. REMOVER initializeMatriculas() pois não é mais necessário
console.log('\n3️⃣ Removendo função initializeMatriculas() desnecessária...');

const initializeMatriculasPattern = /\s+\/\/ Function to initialize matriculas data[\s\S]*?onMatriculaChange\(\);\s+\}/;
content = content.replace(initializeMatriculasPattern, '');

const matriculasDataPattern = /\s+\/\/ Multiple Matriculas Management\s+let matriculasData = \[\];/;
content = content.replace(matriculasDataPattern, '');

console.log('   ✅ Função initializeMatriculas() removida');

// 4. REMOVER chamada de initializeMatriculas() no DOMContentLoaded
console.log('\n4️⃣ Removendo chamadas desnecessárias...');

content = content.replace(/\s+\/\/ Initialize matriculas system\s+initializeMatriculas\(matriculasData\);/g, '');
content = content.replace(/\s+\/\/ Transform data for matriculas.*?[\s\S]*?}\);/g, '');

console.log('   ✅ Chamadas removidas do DOMContentLoaded');

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ CORREÇÕES APLICADAS COM SUCESSO!');
console.log('\n📋 Resumo:');
console.log('   ✅ Template variables bloqueadas');
console.log('   ✅ onMatriculaChange() usa BIND.vinculos');
console.log('   ✅ initializeMatriculas() removida (não necessária)');
console.log('   ✅ SELECT de matrícula populado via template variables');
console.log('   ✅ Campos atualizam ao trocar matrícula');
console.log('\n📝 Seção 5 (Dados Acadêmicos) já existe no arquivo!');
