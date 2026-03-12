const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

// Dados de exemplo
const exampleDataScript = `
    <!-- Dados do Backend - SUBSTITUA ISSO COM SEUS DADOS REAIS -->
    <script>
        // Exemplo de dados - substitua com {{ $json }} ou seus dados do backend
        window.userData = [
            {
                "cpf": "123.456.789-00",
                "nomeCompleto": "Fulano de Tal",
                "dataNascimento": "1990-05-15",
                "matricula": "2024001ABC",
                "cargo": "Analista de Sistemas",
                "vinculo": "Efetivo",
                "dataAdmissao": "2024-01-10",
                "nacionalidade": "brasileira",
                "lotacao": "Empresa Municipal de Informática - EMPREL",
                "pcd": false,
                "genero": "Masculino",
                "racaCor": "Parda",
                "email": "fulano.tal@exemplo.com.br",
                "telefone": "(11) 98888-7777"
            },
            {
                "cpf": "123.456.789-00",
                "nomeCompleto": "Fulano de Tal",
                "dataNascimento": "1990-05-15",
                "matricula": "2026005XYZ",
                "cargo": "Coordenador de Projetos",
                "vinculo": "Comissionado",
                "dataAdmissao": "2026-01-20",
                "nacionalidade": "brasileira",
                "lotacao": "Empresa Municipal de Informática - EMPREL",
                "pcd": false,
                "genero": "Masculino",
                "racaCor": "Parda",
                "email": "fulano.tal@exemplo.com.br",
                "telefone": "(11) 98888-7777"
            }
        ];
    </script>
`;

// Encontrar onde adicionar (antes do script principal)
const bootstrapScript = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>';
const marker = bootstrapScript + '\r\n    <script>';

if (content.includes(bootstrapScript)) {
    content = content.replace(marker, bootstrapScript + exampleDataScript + '\r\n    <script>');
    console.log('✅ Dados de exemplo adicionados com sucesso!');
} else {
    console.log('❌ Não foi possível encontrar o local para inserir os dados');
}

// Salvar arquivo
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('✅ Arquivo atualizado!');
console.log('✅ window.userData agora contém dados de exemplo');
console.log('✅ Formulário será populado automaticamente ao carregar');
console.log('');
console.log('⚠️  IMPORTANTE: Substitua window.userData pelos dados reais do backend');
