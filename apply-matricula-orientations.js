const fs = require('fs');

console.log('🔄 Aplicando orientações para SELECT matrícula e campos dependentes...\n');

// Ler arquivo atual
let content = fs.readFileSync('arealogada.html', 'utf8');

// 1. ATUALIZAR SELECT DE MATRÍCULA
console.log('1️⃣ Atualizando SELECT de matrícula...');

const oldMatriculaSelect = `                            <select class="form-select bg-light" id="matricula" disabled>
                                <option value="123456" selected>123456</option>
                            </select>`;

const newMatriculaSelect = `                            <select class="form-select bg-light" id="matricula" onchange="onMatriculaChange()">
                                <option value="0" selected>{{$json.vinculos[0].matricula}}</option>
                                <option value="1">{{$json.vinculos[1].matricula}}</option>
                            </select>`;

content = content.replace(oldMatriculaSelect, newMatriculaSelect);
console.log('   ✅ SELECT de matrícula atualizado com template variables e onchange');

// 2. REMOVER VALORES HARDCODED DOS CAMPOS DEPENDENTES
console.log('\n2️⃣ Removendo valores hardcoded dos campos dependentes...');

// Cargo
content = content.replace(
    /<input type="text" class="form-control bg-light" value="ANALISTA DE SISTEMAS" readonly\s+id="cargo">/,
    '<input type="text" class="form-control bg-light" readonly id="cargo">'
);
console.log('   ✅ Campo Cargo: value removido');

// Vínculo
content = content.replace(
    /<input type="text" class="form-control bg-light" value="Efetivo" readonly id="vinculo">/,
    '<input type="text" class="form-control bg-light" readonly id="vinculo">'
);
console.log('   ✅ Campo Vínculo: value removido');

// Data de Admissão
content = content.replace(
    /<input type="date" class="form-control bg-light" value="2010-02-01" readonly\s+id="dataAdmissao">/,
    '<input type="date" class="form-control bg-light" readonly id="dataAdmissao">'
);
console.log('   ✅ Campo Data de Admissão: value removido');

// 3. ADICIONAR OBJETO BIND E FUNÇÕES
console.log('\n3️⃣ Adicionando objeto BIND e funções JavaScript...');

const bindAndFunctions = `    <!-- Dados do Backend -->
    <script>
        // Objeto BIND com template variables do backend
        const BIND = {
            dadosComuns: {
                cpf: \`{{$json.cpf}}\`,
                nomeCompleto: \`{{$json.nomeCompleto}}\`,
                dataNascimento: \`{{$json.dataNascimento}}\`,
                nacionalidade: \`{{$json.nacionalidade}}\`,
                lotacao: \`{{$json.lotacao}}\`,
                pcd: {{$json.pcd}},
                genero: \`{{$json.genero}}\`,
                racaCor: \`{{$json.racaCor}}\`,
                email: \`{{$json.email}}\`,
                telefone: \`{{$json.telefone}}\`
            },
            vinculos: [
                {
                    matricula: \`{{$json.vinculos[0].matricula}}\`,
                    cargo: \`{{$json.vinculos[0].cargo}}\`,
                    vinculo: \`{{$json.vinculos[0].vinculo}}\`,
                    dataAdmissao: \`{{$json.vinculos[0].dataAdmissao}}\`
                },
                {
                    matricula: \`{{$json.vinculos[1].matricula}}\`,
                    cargo: \`{{$json.vinculos[1].cargo}}\`,
                    vinculo: \`{{$json.vinculos[1].vinculo}}\`,
                    dataAdmissao: \`{{$json.vinculos[1].dataAdmissao}}\`
                }
            ]
        };

        // Função auxiliar para valores seguros
        function safeValue(v) {
            return v && v !== 'undefined' && v !== 'null' ? v : '';
        }

        // Function called when matricula changes
        function onMatriculaChange() {
            const selectMatricula = document.getElementById('matricula');
            const selectedIndex = parseInt(selectMatricula.value);
            
            // Use BIND.vinculos
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
        }
    </script>

`;

// Inserir antes do primeiro <script> existente
const firstScriptTag = content.indexOf('    <script>');
if (firstScriptTag !== -1) {
    const before = content.substring(0, firstScriptTag);
    const after = content.substring(firstScriptTag);
    content = before + bindAndFunctions + after;
    console.log('   ✅ Objeto BIND e funções adicionados');
} else {
    console.log('   ❌ Não foi possível encontrar tag <script>');
}

// 4. ADICIONAR CHAMADA onMatriculaChange() NO DOMContentLoaded
console.log('\n4️⃣ Adicionando inicialização no DOMContentLoaded...');

const oldDOMContentLoaded = `        // Initialize with one university
        document.addEventListener('DOMContentLoaded', () => {
            addUniversity();
        });`;

const newDOMContentLoaded = `        // Initialize with one university
        document.addEventListener('DOMContentLoaded', () => {
            addUniversity();
            
            // Initialize matricula-dependent fields
            onMatriculaChange();
        });`;

content = content.replace(oldDOMContentLoaded, newDOMContentLoaded);
console.log('   ✅ Chamada onMatriculaChange() adicionada ao DOMContentLoaded');

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ TODAS AS ORIENTAÇÕES APLICADAS COM SUCESSO!');
console.log('\n📋 Resumo das alterações:');
console.log('   ✅ SELECT matrícula com template variables e onchange');
console.log('   ✅ Campos cargo, vínculo e data admissão sem valores hardcoded');
console.log('   ✅ Objeto BIND criado com dadosComuns e vinculos');
console.log('   ✅ Função onMatriculaChange() implementada');
console.log('   ✅ Função safeValue() para valores seguros');
console.log('   ✅ Inicialização automática no DOMContentLoaded');
console.log('\n🔄 Funcionamento:');
console.log('   1. Página carrega → onMatriculaChange() popula campos');
console.log('   2. Usuário troca matrícula → campos atualizam automaticamente');
