const fs = require('fs');

console.log('🔄 Restaurando seção Dados Acadêmicos e função onMatriculaChange...\n');

// Ler arquivos
const oldVersion = fs.readFileSync('temp_old_version.html', 'utf8');
const currentVersion = fs.readFileSync('arealogada.html', 'utf8');

// 1. Extrair seção Dados Acadêmicos do arquivo antigo
const academicSectionStart = oldVersion.indexOf('<!-- Seção 5: Dados Acadêmicos e de Pesquisa -->');
const academicSectionEnd = oldVersion.indexOf('<!-- Seção 6: Declaração -->');

if (academicSectionStart === -1 || academicSectionEnd === -1) {
    console.log('❌ Não foi possível encontrar a seção Dados Acadêmicos');
} else {
    const academicSection = oldVersion.substring(academicSectionStart, academicSectionEnd);
    console.log('✅ Seção Dados Acadêmicos extraída');

    // Inserir antes da Seção 6 no arquivo atual
    const currentSection6 = currentVersion.indexOf('<!-- Seção 6: Declaração -->');
    if (currentSection6 !== -1) {
        const before = currentVersion.substring(0, currentSection6);
        const after = currentVersion.substring(currentSection6);
        const newContent = before + academicSection + '\n            ' + after;
        fs.writeFileSync('arealogada_temp.html', newContent, 'utf8');
        console.log('✅ Seção Dados Acadêmicos inserida no arquivo');
    }
}

// 2. Extrair funções de matrícula do arquivo antigo
const onMatriculaChangeStart = oldVersion.indexOf('// Multiple Matriculas Management');
const onMatriculaChangeEnd = oldVersion.indexOf('// Initialize with backend data');

if (onMatriculaChangeStart === -1 || onMatriculaChangeEnd === -1) {
    console.log('❌ Não foi possível encontrar as funções de matrícula');
} else {
    const matriculaFunctions = oldVersion.substring(onMatriculaChangeStart, onMatriculaChangeEnd);
    console.log('✅ Funções de matrícula extraídas');
    console.log('   - initializeMatriculas()');
    console.log('   - onMatriculaChange()');

    // Salvar em arquivo separado para análise
    fs.writeFileSync('matricula_functions.txt', matriculaFunctions, 'utf8');
}

console.log('\n✅ Extração concluída!');
console.log('📁 Arquivos criados:');
console.log('   - arealogada_temp.html (com seção Dados Acadêmicos)');
console.log('   - matricula_functions.txt (funções para análise)');
