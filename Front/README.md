# Funcionamento da aplicação

# Procedimentos.

## 1° É necessário rodar o build de produção. Para isso executar o seguinte comando no React: npm run build

## Os dois códigos devem estar rodando para que aplicação funcione corretamente. No BackEnd utilizei o Spring Boot, então é necessário que aplicação esteja rodando com o *Spring Boot DashBoard*.
---

# Considerações iniciais
- ## Agradeço imensamente a oportunidade de participar do teste. Foi uma semana intensa e de muito aprendizado, principalmente em ReactJS. O fato do prazo ser alongado ajudou bastante.
- ## Como não havia construído um CRUD em React ainda resolvi seguir um tutorial. Por um lado foi bom, que me ajudou a entender o funcionamento de diversas funcionalidades da ferramenta. Mas por outro me deixou travado na implementação de algumas funcionalidades. Hoje faria diferente, no entanto o aprendizado permanece.
- ## A função editar fica vísível após clicar sobre um cliente. Após selecionar o cliente é possível realizar o update e o delete.
---
# Decisões tomadas durante a construção da aplicação.

# Pontos positivos
- ## O primeiro ponto é que a aplicação funciona integralmente.
- ## Todas as funções de um CRUD funcionam perfeitamente.
- ## Utilizei ícones para facilitar a visualização e as informações.
- ## A aparência se assemelha a do layout.
- ## O BackEnd, que é área que eu tive mais contato até o momento, ficou bem organizado.
- ## No FrontEnd utilizei formas diferentes de realizar a validação, parte devido as dificuldades, porém ajudou a entender formas diferentes de fazer. 
---

# Pontos a melhorar
## Do layout: 
- A aplicação possui um layout aproximado do que foi pedido. Alguns estudos devem ser aprofundados, no entanto está próximo. 

### Da validação:
- A validação dos campos como CEP e CNPJ precisam melhorar. É exibido uma mensagem ao usuário, no entanto ele permite o preenchimento do cadastro e a confirmação. Porém **não salva na memória**.

### Da utilização da API
- Essa foi a última funcionalidade que implantei, e funciona na cidade, no entanto, por algum motivo que ainda não consegui compreender, ela não preenche o campo endereço, somente a cidade.
