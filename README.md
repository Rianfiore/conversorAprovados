# conversorAprovados
Descrição: Aplicação feita em NodeJS para automatizar o processo de identificação dos aprovados de um curso em múltiplos concursos militares.

Dependências: csv-writer, csvjson

Para entender de fato como funciona o algoritmo é preciso entender primeiro o contexto. Confira abaixo como surgiu a tarefa que resultou nesse algoritmo.

Apresentação do Problema:

O Setor de Marketing do curso preparatório era responsável pela apuração dos alunos aprovados em cada concurso militar, verificando se os aprovados são alunos do curso. Essa verificação é necessária para que o setor entre em contato com os aprovados e faça campanhas publicitárias para o curso.

Esse processo era apurado no último bimestre do ano de forma totalmente manual, requisitando muito tempo para finalizar essa tarefa. Para se ter uma ideia precisavamos de aproximadamente 2 semanas, deixando a planilha pronta para poder entrar em contato com os alunos aprovados.

Como funciona esse processo manual?

1- Após a publicação do resultado dos concursos em sites oficiais o arquivo PDF era baixado para dar início ao processo;

2- Era necessário converter o arquivo PDF para XLSX, possibilitando-o abrir em um editor de planilhas para ajeitar os erros de conversão;

3- O processo de correção de erros é a tarefa mais demorada, cerca de 1500 linhas eram corrigidas (varia de acordo com os concursos), após a correção uma exportação em CSV era feita;

4- Com a exportação concluída, o arquivo era levado ao sistema WEB do curso, onde era enviado para análise de alunos que fazem parte do curso;

5- Ao analisar, o sistema retornava um novo CSV contendo alunos que fazem parte do curso e que foram aprovados nos concursos;

6- O novo CSV passa pelo editor de planilhas, onde será feita uma consulta (PROCV) para verificar a classificação de cada aprovado;

7- O processo é finalizado após a consulta desses dados, deixando pronto para a equipe poder entrar em contato com os alunos aprovados;

Solução do problema:

Após perceber o quão demorado era essa tarefa me questionei sobre a possibilidade de automatizar esse processo e qual seria a melhor forma de realizar isso. Após pensar na ideia passei para a minha gestora a sugestão de criar esse algoritmo, reduzindo o tempo de entrega da tarefa.

A sugestão foi aceita por ela com uma condição: O prazo de entrega máximo era de 5 dias.

O desafio era maior por conta da ausência de uma API do sistema WEB para acessar os dados dos alunos cadastrados. Para piorar o funcionário responsável pela criação do banco de dados não fazia mais parte da equipe e o setor de marketing não tinha permissão para acessar esses dados.

Trabalhando sozinho e com acesso limitado aos dados tive que dividir o algoritmo em 2 partes, tentando automatizar o máximo de tarefas possíveis. No final o algoritmo conseguiu agilizar o processo, reduzindo o tempo de entrega em 1 dia.

Explicação do Projeto:

Para exemplificar, utilizei 3 concursos de sargento para aeronáutica (EAGS SAD, EAGS SEF e EAGS SIN). Esses concursos estão separados em pastas, dentro do diretório './EAGS'.

Ao abrir SAD, por exemplo, existem 2 pastas do código fonte (app1, app2) e 2 arquivos JavaScript (App.js, App2.js). Os arquivos JavaScript são responsáveis pela execução da aplicação, o usuário deve converter o PDF para TXT manualmente e jogar a conversão na pasta './app1/src/TXT'. Esses arquivos JS foram dividos propositalmente, para que o usuário possa pegar o resultado em CSV entregue pelo 'App.js', levar ao sistema WEB que retorna um outro CSV, e devolver o retorno para a pasta './app2/src/CSV'. Após colocar o CSV na pasta o arquivo 'App2.js' é executado, entregando o JSON final com o nome e classificação de cada aluno do curso que foi aprovado.

Após a entrega do JSON final, era necessário converter manualmente o JSON para XLSX e assim finalizar o processo.

