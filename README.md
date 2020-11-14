Melhor preço dti

Teste prático para vaga de estágio na dti digital

O site deve ser rodado em um servidor HTTP para algumas funcionalidades funcionarem normalmente, essas foram testadas por uso de um servidor Apache via xampp e pela extensão Live Server do Visual Studio Code, ambas perfeitamente funcionais.

Uma vez carregado o site, deve-se inserir os dados necessários para a funcionalidade (data de quando se deseja utilizar os petshops, quantidade de cachorros pequenos e quantidade de cachorros grandes). Se algum desses dados não for informado, aparecerá uma mensagem de erro. Se todos os dados forem devidamente informados, a página informará qual petshop oferece o menor preço no dia informado, ou informará o canil mais próximo, se houver empate.

O programa foi feito usando HTML5 e CSS3 básicos, assim como JavaScript sem nenhuma biblioteca adicional ou framework. Há necessidade de rodar em um servidor HTTP pela funcionalidade de XMLHttpRequest, que é usada para obter os dados dos canis de um arquivo Json no servidor. Isso foi feito porque, na situação de um cliente real, poderia ocorrer a necessidade de adicionar outros petshops à lista ou remover algum, e a permanência desses dados em um arquivo Json tornaria essa interatividade mais fácil.

A interface é simples, sem tantas estilizações, e simples de usar. A validação dos formulários é feita dentro do próprio código javascript, não sendo usadas funcionalidades do HTML como o required, por exemplo.

Foram feitos testes alterando os valores dos banhos no arquivo Json, e não foram encontrados erros quanto à funcionalidade e à credibilidade dos resultados. O cálculo referente à data, sendo preço de final de semana ou não, usa sempre os valores corretos, e o programa exibe corretamente o petshop mais barato do dia informado para as quantidades de cachorros informadas, ou o petshop mais próximo em caso de empate.
