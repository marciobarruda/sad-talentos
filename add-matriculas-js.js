const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

// Código JavaScript para adicionar
const jsCode = `
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

// Encontrar a linha "// University Management Logic" e adicionar o código antes dela
const marker = '        // University Management Logic';
const markerIndex = content.indexOf(marker);

if (markerIndex !== -1) {
    // Inserir o código antes do marker
    content = content.substring(0, markerIndex) + jsCode + '\n' + content.substring(markerIndex);

    // Salvar o arquivo
    fs.writeFileSync('arealogada.html', content, 'utf8');

    console.log('✅ JavaScript adicionado com sucesso!');
    console.log('✅ Funções initializeMatriculas() e onMatriculaChange() inseridas');
} else {
    console.log('❌ Marker "// University Management Logic" não encontrado');
    console.log('Procurando por padrões alternativos...');

    // Tentar encontrar outro padrão
    const altMarker = 'let uniCount = 0;';
    const altIndex = content.indexOf(altMarker);

    if (altIndex !== -1) {
        content = content.substring(0, altIndex) + jsCode + '\n        ' + content.substring(altIndex);
        fs.writeFileSync('arealogada.html', content, 'utf8');
        console.log('✅ JavaScript adicionado com sucesso (usando padrão alternativo)!');
    } else {
        console.log('❌ Não foi possível encontrar local para inserir o JavaScript');
    }
}
