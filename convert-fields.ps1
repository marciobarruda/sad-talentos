# Script PowerShell para converter campos em arealogada.html

$filePath = "arealogada.html"

# Ler o arquivo
$content = Get-Content $filePath -Raw -Encoding UTF8

# 1. Converter Matrícula para SELECT
$matriculaOld = '<input type="text" class="form-control bg-light" value="123456" readonly id="matricula">'
$matriculaNew = '<select class="form-select bg-light" id="matricula" disabled>
                                <option value="123456" selected>123456</option>
                            </select>'
$content = $content.Replace($matriculaOld, $matriculaNew)

# 2. Converter Nacionalidade para SELECT
$nacionalidadeOld = '<input type="text" class="form-control" required id="nacionalidade">'
$nacionalidadeNew = @'
<select class="form-select" required id="nacionalidade">
                                <option value="">Selecione...</option>
                                <option value="brasileira">Brasileira</option>
                                <option value="afegane">Afegane</option>
                                <option value="sul-africana">Sul-Africana</option>
                                <option value="albanesa">Albanesa</option>
                                <option value="alema">Alemã</option>
                                <option value="andorrana">Andorrana</option>
                                <option value="angolana">Angolana</option>
                                <option value="antiguana">Antiguana</option>
                                <option value="saudita">Saudita</option>
                                <option value="argelina">Argelina</option>
                                <option value="argentina">Argentina</option>
                                <option value="armenia">Armênia</option>
                                <option value="australiana">Australiana</option>
                                <option value="austriaca">Austríaca</option>
                                <option value="azerbaijana">Azerbaijana</option>
                                <option value="bahamense">Bahamense</option>
                                <option value="bangladeshiana">Bangladeshiana</option>
                                <option value="barbadiana">Barbadiana</option>
                                <option value="barenita">Barenita</option>
                                <option value="belga">Belga</option>
                                <option value="belizenha">Belizenha</option>
                                <option value="beninense">Beninense</option>
                                <option value="bielorrussa">Bielorrussa</option>
                                <option value="boliviana">Boliviana</option>
                                <option value="bosniaca">Bósniaca</option>
                                <option value="botsuanesa">Botsuanesa</option>
                                <option value="bruneiana">Bruneiana</option>
                                <option value="bulgara">Búlgara</option>
                                <option value="burquinense">Burquinense</option>
                                <option value="burundesa">Burundesa</option>
                                <option value="butanesa">Butanesa</option>
                                <option value="cabo-verdiana">Cabo-Verdiana</option>
                                <option value="camaronesa">Camaronesa</option>
                                <option value="cambojana">Cambojana</option>
                                <option value="canadense">Canadense</option>
                                <option value="catariana">Catariana</option>
                                <option value="cazaque">Cazaque</option>
                                <option value="chadiana">Chadiana</option>
                                <option value="chilena">Chilena</option>
                                <option value="chinesa">Chinesa</option>
                                <option value="cipriota">Cipriota</option>
                                <option value="colombiana">Colombiana</option>
                                <option value="comorense">Comorense</option>
                                <option value="congolesa">Congolesa</option>
                                <option value="norte-coreana">Norte-Coreana</option>
                                <option value="sul-coreana">Sul-Coreana</option>
                                <option value="marfinense">Marfinense</option>
                                <option value="costarriquenha">Costarriquenha</option>
                                <option value="croata">Croata</option>
                                <option value="cubana">Cubana</option>
                                <option value="dinamarquesa">Dinamarquesa</option>
                                <option value="djiboutiana">Djiboutiana</option>
                                <option value="dominicana">Dominicana</option>
                                <option value="egipcia">Egípcia</option>
                                <option value="salvadorenha">Salvadorenha</option>
                                <option value="emiradense">Emiradense</option>
                                <option value="equatoriana">Equatoriana</option>
                                <option value="eritreia">Eritreia</option>
                                <option value="eslovaca">Eslovaca</option>
                                <option value="eslovena">Eslovena</option>
                                <option value="espanhola">Espanhola</option>
                                <option value="estadunidense">Estadunidense</option>
                                <option value="estonia">Estônia</option>
                                <option value="etiope">Etíope</option>
                                <option value="fijiana">Fijiana</option>
                                <option value="filipina">Filipina</option>
                                <option value="finlandesa">Finlandesa</option>
                                <option value="francesa">Francesa</option>
                                <option value="gabonesa">Gabonesa</option>
                                <option value="gambiana">Gambiana</option>
                                <option value="ganesa">Ganesa</option>
                                <option value="georgiana">Georgiana</option>
                                <option value="granadina">Granadina</option>
                                <option value="grega">Grega</option>
                                <option value="guatemalteca">Guatemalteca</option>
                                <option value="guianense">Guianense</option>
                                <option value="guineense">Guineense</option>
                                <option value="equatoguineana">Equatoguineana</option>
                                <option value="guine-bissauense">Guiné-Bissauense</option>
                                <option value="haitiana">Haitiana</option>
                                <option value="hondurenha">Hondurenha</option>
                                <option value="hungara">Húngara</option>
                                <option value="iemenita">Iemenita</option>
                                <option value="indiana">Indiana</option>
                                <option value="indonesia">Indonésia</option>
                                <option value="iraniana">Iraniana</option>
                                <option value="iraquiana">Iraquiana</option>
                                <option value="irlandesa">Irlandesa</option>
                                <option value="islandesa">Islandesa</option>
                                <option value="israelense">Israelense</option>
                                <option value="italiana">Italiana</option>
                                <option value="jamaicana">Jamaicana</option>
                                <option value="japonesa">Japonesa</option>
                                <option value="jordaniana">Jordaniana</option>
                                <option value="quirguiz">Quirguiz</option>
                                <option value="kiribatiana">Kiribatiana</option>
                                <option value="kuwaitiana">Kuwaitiana</option>
                                <option value="laosiana">Laosiana</option>
                                <option value="lesota">Lesota</option>
                                <option value="letã">Letã</option>
                                <option value="libanesa">Libanesa</option>
                                <option value="liberiana">Liberiana</option>
                                <option value="libia">Líbia</option>
                                <option value="liechtensteiniana">Liechtensteiniana</option>
                                <option value="lituana">Lituana</option>
                                <option value="luxemburguesa">Luxemburguesa</option>
                                <option value="macedônia">Macedônia</option>
                                <option value="madagascarense">Madagascarense</option>
                                <option value="malaia">Malaia</option>
                                <option value="malauiana">Malauiana</option>
                                <option value="maldiva">Maldiva</option>
                                <option value="malinesa">Malinesa</option>
                                <option value="maltesa">Maltesa</option>
                                <option value="marroquina">Marroquina</option>
                                <option value="marshallina">Marshallina</option>
                                <option value="mauriciana">Mauriciana</option>
                                <option value="mauritana">Mauritana</option>
                                <option value="mexicana">Mexicana</option>
                                <option value="micronesia">Micronésia</option>
                                <option value="moçambicana">Moçambicana</option>
                                <option value="moldava">Moldava</option>
                                <option value="monegasca">Monegasca</option>
                                <option value="mongol">Mongol</option>
                                <option value="montenegrina">Montenegrina</option>
                                <option value="namibiana">Namibiana</option>
                                <option value="nauruana">Nauruana</option>
                                <option value="nepalesa">Nepalesa</option>
                                <option value="nicaraguense">Nicaraguense</option>
                                <option value="nigerina">Nigerina</option>
                                <option value="nigeriana">Nigeriana</option>
                                <option value="norueguesa">Norueguesa</option>
                                <option value="neozelandesa">Neozelandesa</option>
                                <option value="omanense">Omanense</option>
                                <option value="neerlandesa">Neerlandesa</option>
                                <option value="paquistanesa">Paquistanesa</option>
                                <option value="palauense">Palauense</option>
                                <option value="palestina">Palestina</option>
                                <option value="panamenha">Panamenha</option>
                                <option value="papua">Papua</option>
                                <option value="paraguaia">Paraguaia</option>
                                <option value="peruana">Peruana</option>
                                <option value="polonesa">Polonesa</option>
                                <option value="portuguesa">Portuguesa</option>
                                <option value="queniana">Queniana</option>
                                <option value="centro-africana">Centro-Africana</option>
                                <option value="dominicana-rep">Dominicana (Rep.)</option>
                                <option value="tcheca">Tcheca</option>
                                <option value="romena">Romena</option>
                                <option value="ruandesa">Ruandesa</option>
                                <option value="russa">Russa</option>
                                <option value="salomonense">Salomonense</option>
                                <option value="samoana">Samoana</option>
                                <option value="santa-lucense">Santa-Lucense</option>
                                <option value="sao-cristovense">São-Cristovense</option>
                                <option value="sao-marinense">São-Marinense</option>
                                <option value="sao-tomense">São-Tomense</option>
                                <option value="senegalesa">Senegalesa</option>
                                <option value="serra-leonesa">Serra-Leonesa</option>
                                <option value="servia">Sérvia</option>
                                <option value="seichelense">Seichelense</option>
                                <option value="singapuriana">Singapuriana</option>
                                <option value="siria">Síria</option>
                                <option value="somali">Somali</option>
                                <option value="cingalesa">Cingalesa</option>
                                <option value="suazi">Suazi</option>
                                <option value="sudanesa">Sudanesa</option>
                                <option value="sul-sudanesa">Sul-Sudanesa</option>
                                <option value="sueca">Sueca</option>
                                <option value="suiça">Suíça</option>
                                <option value="surinamesa">Surinamesa</option>
                                <option value="tailandesa">Tailandesa</option>
                                <option value="tanzaniana">Tanzaniana</option>
                                <option value="tajique">Tajique</option>
                                <option value="timorense">Timorense</option>
                                <option value="togolesa">Togolesa</option>
                                <option value="tonganesa">Tonganesa</option>
                                <option value="trinitino-tobagense">Trinitino-Tobagense</option>
                                <option value="tunisiana">Tunisiana</option>
                                <option value="turcomena">Turcomena</option>
                                <option value="turca">Turca</option>
                                <option value="tuvaluana">Tuvaluana</option>
                                <option value="ucraniana">Ucraniana</option>
                                <option value="ugandense">Ugandense</option>
                                <option value="uruguaia">Uruguaia</option>
                                <option value="uzbeque">Uzbeque</option>
                                <option value="vanuatuense">Vanuatuense</option>
                                <option value="vaticana">Vaticana</option>
                                <option value="venezuelana">Venezuelana</option>
                                <option value="vietnamita">Vietnamita</option>
                                <option value="zambiana">Zambiana</option>
                                <option value="zimbabuana">Zimbabuana</option>
                            </select>
'@
$content = $content.Replace($nacionalidadeOld, $nacionalidadeNew)

# Salvar o arquivo
Set-Content $filePath -Value $content -Encoding UTF8 -NoNewline

Write-Host "Conversões concluídas com sucesso!"
Write-Host "- Matrícula: convertido para SELECT"
Write-Host "- Nacionalidade: convertido para SELECT com lista completa"
