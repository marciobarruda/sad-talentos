# Script PowerShell para corrigir encoding UTF-8 em arealogada.html

$filePath = "arealogada.html"

# Ler o arquivo com UTF-8
$content = Get-Content $filePath -Raw -Encoding UTF8

# Substituir caracteres mal codificados por versões corretas
$content = $content -replace 'InformÃ¡tica', 'Informática'
$content = $content -replace 'GestÃ£o', 'Gestão'
$content = $content -replace 'TransformaÃ§Ã£o', 'Transformação'
$content = $content -replace 'EconÃ´mico', 'Econômico'
$content = $content -replace 'CiÃªncia', 'Ciência'
$content = $content -replace 'InovaÃ§Ã£o', 'Inovação'
$content = $content -replace 'MunicÃ­pio', 'Município'
$content = $content -replace 'ComunicaÃ§Ã£o', 'Comunicação'
$content = $content -replace 'PrevidÃªncia', 'Previdência'
$content = $content -replace 'AssistÃªncia', 'Assistência'
$content = $content -replace 'SaÃºde', 'Saúde'
$content = $content -replace 'TrÃ¢nsito', 'Trânsito'
$content = $content -replace 'ManutenÃ§Ã£o', 'Manutenção'
$content = $content -replace 'UrbanizaÃ§Ã£o', 'Urbanização'
$content = $content -replace 'FundaÃ§Ã£o', 'Fundação'
$content = $content -replace 'ParticipaÃ§Ã£o', 'Participação'
$content = $content -replace 'FinanÃ§as', 'Finanças'
$content = $content -replace 'PolÃ­tica', 'Política'
$content = $content -replace 'HabitaÃ§Ã£o', 'Habitação'
$content = $content -replace 'SeguranÃ§a', 'Segurança'
$content = $content -replace 'CidadÃ£', 'Cidadã'
$content = $content -replace 'PolÃ­ticas', 'Políticas'
$content = $content -replace 'QualificaÃ§Ã£o', 'Qualificação'
$content = $content -replace 'EducaÃ§Ã£o', 'Educação'
$content = $content -replace 'RequalificaÃ§Ã£o', 'Requalificação'
$content = $content -replace 'ResiliÃªncia', 'Resiliência'
$content = $content -replace 'Ãreas', 'Áreas'
$content = $content -replace 'AlemÃ£', 'Alemã'
$content = $content -replace 'ArmÃªnia', 'Armênia'
$content = $content -replace 'AustrÃ­aca', 'Austríaca'
$content = $content -replace 'BÃ³sniaca', 'Bósniaca'
$content = $content -replace 'BÃºlgara', 'Búlgara'
$content = $content -replace 'EgÃ­pcia', 'Egípcia'
$content = $content -replace 'EstÃ´nia', 'Estônia'
$content = $content -replace 'EtÃ­ope', 'Etíope'
$content = $content -replace 'GuinÃ©-Bissauense', 'Guiné-Bissauense'
$content = $content -replace 'HÃºngara', 'Húngara'
$content = $content -replace 'IndonÃ©sia', 'Indonésia'
$content = $content -replace 'LetÃ£', 'Letã'
$content = $content -replace 'LÃ­bia', 'Líbia'
$content = $content -replace 'MacedÃ´nia', 'Macedônia'
$content = $content -replace 'MicronÃ©sia', 'Micronésia'
$content = $content -replace 'MoÃ§ambicana', 'Moçambicana'
$content = $content -replace 'SÃ©rvia', 'Sérvia'
$content = $content -replace 'SÃ­ria', 'Síria'
$content = $content -replace 'SuÃ­Ã§a', 'Suíça'
$content = $content -replace 'SÃ£o-Cristovense', 'São-Cristovense'
$content = $content -replace 'SÃ£o-Marinense', 'São-Marinense'
$content = $content -replace 'SÃ£o-Tomense', 'São-Tomense'

# Salvar com UTF-8 sem BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($filePath, $content, $utf8NoBom)

Write-Host "Encoding corrigido com sucesso!"
Write-Host "Arquivo salvo em UTF-8 sem BOM"
Write-Host "Caracteres especiais corrigidos"
