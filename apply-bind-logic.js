const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

console.log('🔄 Aplicando lógica de população dinâmica baseada no exemplo...\n');

// 1. Remover o bloco window.userData atual
const userDataRegex = /<!-- Dados do Backend -->\s*<script>\s*\/\/ Dados injetados[\s\S]*?window\.userData = \{\{ \$json \}\};[\s\S]*?<\/script>/;
content = content.replace(userDataRegex, '');
console.log('✅ Removido bloco window.userData');

// 2. Criar o objeto BIND com template variables (similar ao exemplo)
const bindObject = `
    <!-- Dados do Backend -->
    <script>
        // Objeto BIND com template variables do backend
        const BIND = {
            dadosComuns: {
                cpf: \`{{ $json[0].cpf }}\`,
                nomeCompleto: \`{{ $json[0].nomeCompleto }}\`,
                dataNascimento: \`{{ $json[0].dataNascimento }}\`,
                nacionalidade: \`{{ $json[0].nacionalidade }}\`,
                lotacao: \`{{ $json[0].lotacao }}\`,
                pcd: {{ $json[0].pcd }},
                genero: \`{{ $json[0].genero }}\`,
                racaCor: \`{{ $json[0].racaCor }}\`,
                email: \`{{ $json[0].email }}\`,
                telefone: \`{{ $json[0].telefone }}\`
            },
            vinculos: [
                {
                    matricula: \`{{ $json[0].matricula }}\`,
                    cargo: \`{{ $json[0].cargo }}\`,
                    vinculo: \`{{ $json[0].vinculo }}\`,
                    dataAdmissao: \`{{ $json[0].dataAdmissao }}\`
                },
                {
                    matricula: \`{{ $json[1].matricula }}\`,
                    cargo: \`{{ $json[1].cargo }}\`,
                    vinculo: \`{{ $json[1].vinculo }}\`,
                    dataAdmissao: \`{{ $json[1].dataAdmissao }}\`
                }
            ]
        };

        // Função auxiliar para valores seguros
        function safeValue(v) {
            return v && v !== 'undefined' && v !== 'null' ? v : '';
        }
    </script>
`;

// Inserir antes do script principal
const scriptMarker = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>';
content = content.replace(scriptMarker, scriptMarker + bindObject);
console.log('✅ Objeto BIND adicionado com template variables');

// 3. Modificar o DOMContentLoaded para usar BIND ao invés de window.userData
const oldDOMContentLoaded = `const backendData = window.userData || [];`;
const newDOMContentLoaded = `const backendData = BIND.vinculos || [];`;

content = content.replace(oldDOMContentLoaded, newDOMContentLoaded);
console.log('✅ DOMContentLoaded atualizado para usar BIND.vinculos');

// 4. Adicionar população de dados comuns
const populateCommonFieldsCode = `
                // Populate common fields from BIND.dadosComuns
                const dc = BIND.dadosComuns || {};
                document.getElementById('nomeCompleto').value = safeValue(dc.nomeCompleto);
                document.getElementById('cpf').value = safeValue(dc.cpf);
                document.getElementById('dataNascimento').value = safeValue(dc.dataNascimento);
                document.getElementById('nacionalidade').value = safeValue(dc.nacionalidade)?.toLowerCase() || '';
                document.getElementById('lotacao').value = safeValue(dc.lotacao);
                document.getElementById('genero').value = safeValue(dc.genero);
                document.getElementById('racaCor').value = safeValue(dc.racaCor);
                document.getElementById('email').value = safeValue(dc.email);
                document.getElementById('telefone').value = safeValue(dc.telefone);
                
                const pcdCheckbox = document.getElementById('pcd');
                if (pcdCheckbox) {
                    pcdCheckbox.checked = dc.pcd === true || dc.pcd === 'true';
                }
                
`;

// Inserir após "if (backendData && backendData.length > 0) {"
const insertAfterMarker = 'if (backendData && backendData.length > 0) {';
const insertIndex = content.indexOf(insertAfterMarker);
if (insertIndex !== -1) {
    const insertPosition = insertIndex + insertAfterMarker.length;
    content = content.substring(0, insertPosition) + populateCommonFieldsCode + content.substring(insertPosition);
    console.log('✅ Código de população de campos comuns adicionado');
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Arquivo atualizado com sucesso!');
console.log('✅ Agora usa objeto BIND com template variables');
console.log('✅ Campos são populados a partir de BIND.dadosComuns e BIND.vinculos');
console.log('✅ Lógica similar ao exemplo fornecido');
