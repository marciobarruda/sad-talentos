const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

// 1. Modificar o SELECT de matrícula para remover disabled e adicionar onchange
content = content.replace(
    /<select class="form-select bg-light" id="matricula" disabled>/,
    '<select class="form-select bg-light" id="matricula" onchange="onMatriculaChange()">'
);

// 2. Remover a option hardcoded de matrícula (será populada via JS)
content = content.replace(
    /<option value="123456" selected>123456<\/option>/,
    '<!-- Populado dinamicamente via JavaScript -->'
);

// 3. Adicionar o código JavaScript para gerenciar múltiplas matrículas
// Encontrar onde adicionar (após a função toggleOutroCargo)
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

        // University Management Logic`;

// Substituir "// University Management Logic" pelo código completo
content = content.replace(
    /(\s+)\/\/ University Management Logic/,
    jsCode
);

// Salvar o arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('✅ Arquivo atualizado com sucesso!');
console.log('✅ SELECT de matrícula agora é editável');
console.log('✅ Função onMatriculaChange() adicionada');
console.log('✅ Função initializeMatriculas() adicionada');
