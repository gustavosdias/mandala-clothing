# mandala_test
Teste de entrevista

# Descrição do Projeto
O projeto foi estruturado para passar dados do Back-End (NodeJS) para o Front-End(Angular). Quando o projeto for carregado, aparecerá uma página com 9 produtos recebidos do servidor. O usuário poderá clicar nos produtos para adicionar ao carrinho. O carrinho poderá ser acessado para ver os produtos que serão comprados. 

O fluxograma do projeto acaba na parte de shipping de compras.

Os produtos são solicitados por uma solicitação POST. Com dados "dummies", o servidor responde à solicitação retornando uma variável em array. O array terá 9 elementos JSON que serão os atributos de cada roupa. 


# Passos de execução do teste:

1- Abrir terminal na pasta raiz 
2- executar o comando "node server.js" (porta usada: 3000)  
3- mudar diretorio do terminal para /mandala-teste  
4- executar o comando "ng serve" (porta usada: 4200)  
5- A página irá automaticamente solicitar os produtos ao servidor e mostrará na tela.  
