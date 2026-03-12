# Script PowerShell para recriar o SELECT de Lotação com UTF-8 correto

$filePath = "arealogada.html"

# Ler arquivo
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# SELECT correto
$selectCorreto = @'
<select class="form-select" required id="lotacao">
                                <option value="">Selecione...</option>
                                <option value="EMPREL">EMPREL - Empresa Municipal de Informática</option>
                                <option value="SEPLAGTD">SEPLAGTD - Secretaria de Planejamento, Gestão e Transformação Digital</option>
                                <option value="SDECTI">SDECTI - Secretaria de Desenvolvimento Econômico, Ciência, Tecnologia e Inovação</option>
                                <option value="AESP">AESP - Gabinete de Assessoria Especial</option>
                                <option value="PGM">PGM - Procuradoria-Geral do Município</option>
                                <option value="GVP">GVP - Gabinete Vice-Prefeitura</option>
                                <option value="GPREF">GPREF - Gabinete Prefeito</option>
                                <option value="GABPE">GABPE - Gabinete de Projetos Especiais</option>
                                <option value="GABCENTRO">GABCENTRO - Gabineto do Centro do Recife</option>
                                <option value="GABCOM">GABCOM - Gabinete de Comunicação</option>
                                <option value="CGM">CGM - Controladoria-Geral do Município</option>
                                <option value="AMPASS">AMPASS - Autarquia Municipal de Previdência e Assistência à Saúde dos Servidores</option>
                                <option value="CONVIVA">CONVIVA - CONVIVA Mercados e Feiras- Autarquia Municipal</option>
                                <option value="CTTU">CTTU - Autarquia de Trânsito e Transporte Urbano do Recife</option>
                                <option value="EMLURB">EMLURB - Autarquia de Manutenção e Limpeza Urbana do Recife</option>
                                <option value="URB">URB - Autarquia de Urbanização do Recife</option>
                                <option value="FCCR">FCCR - Fundação de Cultura Cidade do Recife</option>
                                <option value="SEGOV">SEGOV - Secretaria de Governo e Participação Social</option>
                                <option value="SEFIN">SEFIN - Secretaria de Finanças</option>
                                <option value="SEINFRA">SEINFRA - Secretaria de Infraestrutura</option>
                                <option value="SMAS">SMAS - Secretaria de Meio Ambiente e Sustentabilidade</option>
                                <option value="SEPUL">SEPUL - Secretaria de Política Urbana e Licenciamento</option>
                                <option value="SESAN">SESAN - Secretaria de Saneamento</option>
                                <option value="SEHAB">SEHAB - Secretaria de Habitação</option>
                                <option value="SESEC">SESEC - Secretaria de Segurança Cidadã</option>
                                <option value="SEMUL">SEMUL - Secretaria da Mulher</option>
                                <option value="SDSDHJPD">SDSDHJPD - Secretaria de Desenvolvimento Social, Direitos Humanos, Juventude e Políticas sobre Drogas</option>
                                <option value="SECULT">SECULT - Secretaria de Cultura</option>
                                <option value="SESP">SESP - Secretaria de Esportes</option>
                                <option value="SETURL">SETURL - Secretaria de Turismo e Lazer</option>
                                <option value="STQP">STQP - Secretaria de Trabalho e Qualificação Profissional</option>
                                <option value="SEDUC">SEDUC - Secretaria de Educação</option>
                                <option value="SESAU">SESAU - Secretaria de Saúde</option>
                                <option value="GIMP">GIMP - Gabinete de Imprensa</option>
                                <option value="PROMORAR">PROMORAR - Gabinete de Gerenciamento do Programa de Requalificação e Resiliência Urbana em Áreas de Vulnerabilidade Socioambiental</option>
                            </select>
'@

# Substituir usando regex
$pattern = '(?s)<select class="form-select" required id="lotacao">.*?</select>'
$content = $content -replace $pattern, $selectCorreto

# Salvar com UTF-8 sem BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($filePath, $content, $utf8NoBom)

Write-Host "SELECT de Lotação recriado com UTF-8 correto!"
Write-Host "Todos os caracteres especiais agora estão corretos"
