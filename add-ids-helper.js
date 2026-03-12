// Script para adicionar IDs aos inputs do arealogada.html
// Execute este script no console do navegador após carregar a página

// Seção 1 - Dados do Servidor (readonly)
document.querySelector('input[value="JOÃO DA SILVA"]').id = 'nomeCompleto';
document.querySelector('input[value="123.456.789-00"]').id = 'cpf';
document.querySelectorAll('input[type="date"]')[0].id = 'dataNascimento';
document.querySelector('input[value="123456"]').id = 'matricula';
document.querySelector('input[value="ANALISTA DE SISTEMAS"]').id = 'cargo';
document.querySelector('input[value="Efetivo"]').id = 'vinculo';
document.querySelectorAll('input[type="date"]')[1].id = 'dataAdmissao';

// Seção 2 - Dados Complementares
const section2Inputs = document.querySelectorAll('.form-wrapper')[1].querySelectorAll('input, select');
const section2Labels = ['nacionalidade', 'lotacao', 'pcd', 'genero', 'racaCor', 'email', 'telefone', 'faixaRemuneracao', 'outroCargo'];

// Seção 2 - Outro Cargo
document.querySelectorAll('#divOutroCargoDetalhes input')[0].id = 'matriculaSegundoCargo';
document.querySelectorAll('#divOutroCargoDetalhes input')[1].id = 'lotacaoSegundoCargo';

// Seção 4 - Documentação
const fileInputs = document.querySelectorAll('input[type="file"]');
const fileIds = ['fileCurriculo', 'fileGraduacao', 'fileCartaAceite', 'fileCartaMotivacao', 'filePlanoAplicacao', 'fileEscolhaUniversidade', 'fileCartaAceiteDefinitiva'];
fileInputs.forEach((input, index) => {
    if (index < fileIds.length) {
        input.id = fileIds[index];
    }
});

console.log('IDs adicionados com sucesso!');
