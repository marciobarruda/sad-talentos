# -*- coding: utf-8 -*-
import codecs

# Ler o arquivo com UTF-8
with codecs.open('arealogada.html', 'r', encoding='utf-8') as f:
    content = f.read()

# SELECT correto com UTF-8
lotacao_select = '''<select class="form-select" required id="lotacao">
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
                            </select>'''

# Encontrar e substituir o SELECT antigo
import re
pattern = r'<select class="form-select" required id="lotacao">.*?</select>'
content = re.sub(pattern, lotacao_select, content, flags=re.DOTALL)

# Salvar com UTF-8
with codecs.open('arealogada.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Arquivo atualizado com UTF-8 correto!")
print("Caracteres especiais agora estão corretos")
