$content = Get-Content 'arealogada.html' -Raw -Encoding UTF8
$replacements = @{
    'InformÃ¡tica'    = 'Informática'
    'MunicÃ­pio'      = 'Município'
    'AssistÃªncia Ã ' = 'Assistência à'
    'PolÃ­tica'       = 'Política'
    'PolÃ­ticas'      = 'Políticas'
    'Ãreas'           = 'Áreas'
    'AustrÃ­aca'      = 'Austríaca'
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

$content | Set-Content 'arealogada.html' -Encoding UTF8 -NoNewline
Write-Host "Encoding fixed successfully!"
