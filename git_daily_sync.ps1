# Script para sincronização diária do projeto com o GitHub
# Este script é executado automaticamente via Agendador de Tarefas do Windows

$RepoPath = "g:\Outros computadores\Meu laptop (Emprel)\Desktop\Automação\GitHub\sad-talentos"
Set-Location $RepoPath

Write-Host "--- Iniciando Sincronização Diária ($(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')) ---"

# Verificar se há alterações
$status = git status --porcelain
if ($status) {
    Write-Host "Alterações detectadas. Iniciando commit e push..."
    
    # Adicionar todas as alterações
    git add .
    
    # Commit com data e hora
    $commitMsg = "Auto-sync: Atualização diária $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
    git commit -m $commitMsg
    
    # Garantir que estamos atualizados antes do push
    git pull origin main --rebase
    
    # Push para o repositório remoto
    git push origin main
    
    Write-Host "Sincronização concluída com sucesso!"
} else {
    Write-Host "Nenhuma alteração detectada no projeto. Sincronização ignorada."
}

Write-Host "--- Fim da Sincronização ---"
