const fs = require('fs');

console.log('🔄 Restaurando funções de gerenciamento de matrículas...\n');

// Ler arquivo atual
let content = fs.readFileSync('arealogada.html', 'utf8');

// Código das funções de matrícula (extraído do commit d97d97c)
const matriculaFunctions = `
        // Multiple Matriculas Management
        let matriculasData = [];

        // Function to initialize matriculas data
        function initializeMatriculas(data) {
            if (Array.isArray(data)) {
                matriculasData = data;
            } else {
                matriculasData = [data];
            }
            
            const selectMatricula = document.getElementById('matricula');
            selectMatricula.innerHTML = '';
            
            matriculasData.forEach((mat, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = mat.matricula;
                if (index === 0) option.selected = true;
                selectMatricula.appendChild(option);
            });
            
            onMatriculaChange();
        }

        // Function called when matricula changes
        function onMatriculaChange() {
            const selectMatricula = document.getElementById('matricula');
            const selectedIndex = selectMatricula.value;
            const matriculaData = matriculasData[selectedIndex];
            
            if (matriculaData) {
                document.getElementById('cargo').value = matriculaData.cargo || '';
                document.getElementById('vinculo').value = matriculaData.vinculo || '';
                document.getElementById('dataAdmissao').value = matriculaData.dataAdmissao || '';
            }
        }

`;

// Encontrar onde inserir (antes de "// University Management Logic" ou similar)
const insertMarker = content.indexOf('// University Management Logic');
if (insertMarker === -1) {
    // Tentar outro marcador
    const altMarker = content.indexOf('const eixosData = [');
    if (altMarker !== -1) {
        const before = content.substring(0, altMarker);
        const after = content.substring(altMarker);
        content = before + matriculaFunctions + '\n        ' + after;
        console.log('✅ Funções de matrícula inseridas antes de eixosData');
    } else {
        console.log('❌ Não foi possível encontrar local de inserção');
    }
} else {
    const before = content.substring(0, insertMarker);
    const after = content.substring(insertMarker);
    content = before + matriculaFunctions + '\n        ' + after;
    console.log('✅ Funções de matrícula inseridas antes de University Management');
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('\n✅ Funções restauradas com sucesso!');
console.log('✅ initializeMatriculas() - popula SELECT com matrículas');
console.log('✅ onMatriculaChange() - atualiza cargo, vínculo e data admissão');
console.log('\n📝 Próximo passo: verificar se initializeMatriculas() é chamado no DOMContentLoaded');
