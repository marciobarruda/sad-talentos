# Script PowerShell para converter caracteres especiais em HTML entities

$filePath = "arealogada.html"

# Ler arquivo como bytes e converter para string
$bytes = [System.IO.File]::ReadAllBytes($filePath)
$content = [System.Text.Encoding]::UTF8.GetString($bytes)

# Substituir caracteres especiais por HTML entities no SELECT de Lotação
$replacements = @{
    'InformÃ¡tica'     = 'Inform&aacute;tica'
    'GestÃ£o'          = 'Gest&atilde;o'
    'TransformaÃ§Ã£o'  = 'Transforma&ccedil;&atilde;o'
    'EconÃ´mico'       = 'Econ&ocirc;mico'
    'CiÃªncia'         = 'Ci&ecirc;ncia'
    'InovaÃ§Ã£o'       = 'Inova&ccedil;&atilde;o'
    'MunicÃ­pio'       = 'Munic&iacute;pio'
    'ComunicaÃ§Ã£o'    = 'Comunica&ccedil;&atilde;o'
    'PrevidÃªncia'     = 'Previd&ecirc;ncia'
    'AssistÃªncia'     = 'Assist&ecirc;ncia'
    'SaÃºde'           = 'Sa&uacute;de'
    'TrÃ¢nsito'        = 'Tr&acirc;nsito'
    'ManutenÃ§Ã£o'     = 'Manuten&ccedil;&atilde;o'
    'UrbanizaÃ§Ã£o'    = 'Urbaniza&ccedil;&atilde;o'
    'FundaÃ§Ã£o'       = 'Funda&ccedil;&atilde;o'
    'ParticipaÃ§Ã£o'   = 'Participa&ccedil;&atilde;o'
    'FinanÃ§as'        = 'Finan&ccedil;as'
    'PolÃ­tica'        = 'Pol&iacute;tica'
    'HabitaÃ§Ã£o'      = 'Habita&ccedil;&atilde;o'
    'SeguranÃ§a'       = 'Seguran&ccedil;a'
    'CidadÃ£'          = 'Cidad&atilde;'
    'PolÃ­ticas'       = 'Pol&iacute;ticas'
    'QualificaÃ§Ã£o'   = 'Qualifica&ccedil;&atilde;o'
    'EducaÃ§Ã£o'       = 'Educa&ccedil;&atilde;o'
    'RequalificaÃ§Ã£o' = 'Requalifica&ccedil;&atilde;o'
    'ResiliÃªncia'     = 'Resili&ecirc;ncia'
    'Ãreas'            = '&Aacute;reas'
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

# Salvar arquivo
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($filePath, $content, $utf8NoBom)

Write-Host "Caracteres especiais convertidos para HTML entities!"
Write-Host "Agora devem aparecer corretamente no navegador"
