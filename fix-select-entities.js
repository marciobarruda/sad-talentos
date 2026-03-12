const fs = require('fs');

// Ler arquivo
let content = fs.readFileSync('arealogada.html', 'utf8');

// SELECT com HTML entities
const selectNew = `<select class="form-select" required id="lotacao">
                                <option value="">Selecione...</option>
                                <option value="EMPREL">EMPREL - Empresa Municipal de Inform&aacute;tica</option>
                                <option value="SEPLAGTD">SEPLAGTD - Secretaria de Planejamento, Gest&atilde;o e Transforma&ccedil;&atilde;o Digital</option>
                                <option value="SDECTI">SDECTI - Secretaria de Desenvolvimento Econ&ocirc;mico, Ci&ecirc;ncia, Tecnologia e Inova&ccedil;&atilde;o</option>
                                <option value="AESP">AESP - Gabinete de Assessoria Especial</option>
                                <option value="PGM">PGM - Procuradoria-Geral do Munic&iacute;pio</option>
                                <option value="GVP">GVP - Gabinete Vice-Prefeitura</option>
                                <option value="GPREF">GPREF - Gabinete Prefeito</option>
                                <option value="GABPE">GABPE - Gabinete de Projetos Especiais</option>
                                <option value="GABCENTRO">GABCENTRO - Gabineto do Centro do Recife</option>
                                <option value="GABCOM">GABCOM - Gabinete de Comunica&ccedil;&atilde;o</option>
                                <option value="CGM">CGM - Controladoria-Geral do Munic&iacute;pio</option>
                                <option value="AMPASS">AMPASS - Autarquia Municipal de Previd&ecirc;ncia e Assist&ecirc;ncia &agrave; Sa&uacute;de dos Servidores</option>
                                <option value="CONVIVA">CONVIVA - CONVIVA Mercados e Feiras- Autarquia Municipal</option>
                                <option value="CTTU">CTTU - Autarquia de Tr&acirc;nsito e Transporte Urbano do Recife</option>
                                <option value="EMLURB">EMLURB - Autarquia de Manuten&ccedil;&atilde;o e Limpeza Urbana do Recife</option>
                                <option value="URB">URB - Autarquia de Urbaniza&ccedil;&atilde;o do Recife</option>
                                <option value="FCCR">FCCR - Funda&ccedil;&atilde;o de Cultura Cidade do Recife</option>
                                <option value="SEGOV">SEGOV - Secretaria de Governo e Participa&ccedil;&atilde;o Social</option>
                                <option value="SEFIN">SEFIN - Secretaria de Finan&ccedil;as</option>
                                <option value="SEINFRA">SEINFRA - Secretaria de Infraestrutura</option>
                                <option value="SMAS">SMAS - Secretaria de Meio Ambiente e Sustentabilidade</option>
                                <option value="SEPUL">SEPUL - Secretaria de Pol&iacute;tica Urbana e Licenciamento</option>
                                <option value="SESAN">SESAN - Secretaria de Saneamento</option>
                                <option value="SEHAB">SEHAB - Secretaria de Habita&ccedil;&atilde;o</option>
                                <option value="SESEC">SESEC - Secretaria de Seguran&ccedil;a Cidad&atilde;</option>
                                <option value="SEMUL">SEMUL - Secretaria da Mulher</option>
                                <option value="SDSDHJPD">SDSDHJPD - Secretaria de Desenvolvimento Social, Direitos Humanos, Juventude e Pol&iacute;ticas sobre Drogas</option>
                                <option value="SECULT">SECULT - Secretaria de Cultura</option>
                                <option value="SESP">SESP - Secretaria de Esportes</option>
                                <option value="SETURL">SETURL - Secretaria de Turismo e Lazer</option>
                                <option value="STQP">STQP - Secretaria de Trabalho e Qualifica&ccedil;&atilde;o Profissional</option>
                                <option value="SEDUC">SEDUC - Secretaria de Educa&ccedil;&atilde;o</option>
                                <option value="SESAU">SESAU - Secretaria de Sa&uacute;de</option>
                                <option value="GIMP">GIMP - Gabinete de Imprensa</option>
                                <option value="PROMORAR">PROMORAR - Gabinete de Gerenciamento do Programa de Requalifica&ccedil;&atilde;o e Resili&ecirc;ncia Urbana em &Aacute;reas de Vulnerabilidade Socioambiental</option>
                            </select>`;

// Substituir
content = content.replace(/<select class="form-select" required id="lotacao">[\s\S]*?<\/select>/, selectNew);

// Salvar
fs.writeFileSync('arealogada.html', content, 'utf8');

console.log('SELECT atualizado com HTML entities!');
console.log('Caracteres especiais agora devem aparecer corretamente no navegador');
