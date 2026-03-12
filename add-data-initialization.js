const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

// Código de inicialização para adicionar no DOMContentLoaded
const initCode = `
        // Initialize with backend data when page loads
        document.addEventListener('DOMContentLoaded', () => {
            // Example: Replace this with actual data from your backend
            // The data should be available as a global variable or injected via template
            const backendData = window.userData || []; // Assuming data is in window.userData
            
            if (backendData && backendData.length > 0) {
                // Get first record for common fields (same for all matriculas)
                const firstRecord = backendData[0];
                
                // Populate common fields (readonly)
                document.getElementById('nomeCompleto').value = firstRecord.nomeCompleto || '';
                document.getElementById('cpf').value = firstRecord.cpf || '';
                document.getElementById('dataNascimento').value = firstRecord.dataNascimento || '';
                
                // Populate editable fields
                document.getElementById('nacionalidade').value = firstRecord.nacionalidade?.toLowerCase() || '';
                document.getElementById('lotacao').value = firstRecord.lotacao || '';
                document.getElementById('genero').value = firstRecord.genero || '';
                document.getElementById('racaCor').value = firstRecord.racaCor || '';
                document.getElementById('email').value = firstRecord.email || '';
                document.getElementById('telefone').value = firstRecord.telefone || '';
                
                // Handle PCD checkbox
                const pcdCheckbox = document.getElementById('pcd');
                if (pcdCheckbox) {
                    pcdCheckbox.checked = firstRecord.pcd === true || firstRecord.pcd === 'true';
                }
                
                // Transform data for matriculas (extract only matricula-specific fields)
                const matriculasData = backendData.map(record => ({
                    matricula: record.matricula,
                    cargo: record.cargo,
                    vinculo: record.vinculo,
                    dataAdmissao: record.dataAdmissao
                }));
                
                // Initialize matriculas system
                initializeMatriculas(matriculasData);
            }
            
            // Also initialize university management
            addUniversity();
        });`;

// Encontrar o DOMContentLoaded existente e substituir ou adicionar antes do fechamento do script
const domContentLoadedRegex = /document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{[\s\S]*?addUniversity\(\);[\s\S]*?\}\);/;

if (content.match(domContentLoadedRegex)) {
    // Substituir o DOMContentLoaded existente
    content = content.replace(domContentLoadedRegex, initCode.trim());
    console.log('✅ DOMContentLoaded existente substituído');
} else {
    // Adicionar antes do fechamento do script
    const scriptCloseRegex = /(\s+)<\/script>(\s+)<\/body>/;
    content = content.replace(scriptCloseRegex, `${initCode}\n$1</script>$2</body>`);
    console.log('✅ DOMContentLoaded adicionado');
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('✅ Código de inicialização adicionado!');
console.log('✅ Formulário será populado automaticamente com dados do backend');
console.log('✅ Sistema de múltiplas matrículas será inicializado');
console.log('');
console.log('⚠️  IMPORTANTE: Você precisa disponibilizar os dados em window.userData');
console.log('   Exemplo: <script>window.userData = {{ seu_json_aqui }};</script>');
