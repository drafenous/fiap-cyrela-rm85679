# Projeto Cyrela: FIAP
Desenvolvido por: Rodrigo Roberto de Almeida, RGM: RM85679.
Este projeto foi desenvolvido com base no framework AdonisJS.
## Os principais motivos de uso do AdonisJS são:
- Uso de migrations para versionamento do banco de dados
- KnexJS para utilização de ORM
- Estrutura MVC (Model-View-Controller) já estabelecida em NodeJS

## Para o Deploy está sendo utilizado a plataforma Heroku com banco de dados em Postgres.

Para teste da aplicação acesse a url:
[https://cyrela-rm85679.herokuapp.com/](https://cyrela-rm85679.herokuapp.com/)
Exibirá a página de boas vindas do AdonisJS.

## Para testes de Crud, foram criados as seguintes rotas:
### Usuários Públicos:
GET [https://cyrela-rm85679.herokuapp.com/PublicUser](https://cyrela-rm85679.herokuapp.com/PublicUser) - Lista todos os usuários

Post [https://cyrela-rm85679.herokuapp.com/PublicUser](https://cyrela-rm85679.herokuapp.com/PublicUser) - Cria um usuário (enviar nos headers a estrutura de JSON abaixo)

GET [https://cyrela-rm85679.herokuapp.com/PublicUser/1](https://cyrela-rm85679.herokuapp.com/PublicUser/1) - Faz a busca por dados de usuário por ID (no exemplo está o ID 1)

PUT [https://cyrela-rm85679.herokuapp.com/PublicUser/1](https://cyrela-rm85679.herokuapp.com/PublicUser/1) - Faz a busca por ID e atualiza os dados enviados via header (json) (no exemplo está o ID 1)

DELETE [https://cyrela-rm85679.herokuapp.com/PublicUser/1](https://cyrela-rm85679.herokuapp.com/PublicUser/1) - Faz a busca por ID e deleta a entrada no banco de dados (no exemplo está o ID 1)


#### Estrutura de JSON para o POST ou PUT:
```json
{
	"fullname": "Rodrigo Roberto de Almeida", // Nome completo
	"email": "rodrigo.roberto.almeida@gmail.com", // Email
	"entity": "teste", // Entidade (favor marcar como 'teste', será utilizado em implementações futuras)
	"gender": 1, // Genero 0 = mulher, 1 = homem, 2 = não binário
	"bday": "11-26-1993", // Data de nascimento
	"password": "123456" // Senha
}
```
### Casas:
GET [https://cyrela-rm85679.herokuapp.com/establishments](https://cyrela-rm85679.herokuapp.com/establishments) - Lista todas as casas

Post [https://cyrela-rm85679.herokuapp.com/establishments](https://cyrela-rm85679.herokuapp.com/establishments) - Cria o registro de uma casa (enviar nos headers a estrutura de JSON abaixo)

GET [https://cyrela-rm85679.herokuapp.com/establishments/1](https://cyrela-rm85679.herokuapp.com/establishments/1) - Faz a busca por dados de uma casa  por ID (no exemplo está o ID 1)

PUT [https://cyrela-rm85679.herokuapp.com/establishments/1](https://cyrela-rm85679.herokuapp.com/establishments/1) - Faz a busca por ID e atualiza os dados enviados via header (json) (no exemplo está o ID 1)

DELETE [https://cyrela-rm85679.herokuapp.com/establishments/1](https://cyrela-rm85679.herokuapp.com/establishments/1) - Faz a busca por ID e deleta a entrada no banco de dados (no exemplo está o ID 1)


#### Estrutura de JSON para o POST:
```json
{
  "name": "Rodrigo R. Almeida Company", // Nome da empresa
  "fantasy_name": "Rodrigo R. Almeida", // Nome fantasia
  "national_registry": "75.641.329/0001-30", // CNPJ
  "status": "1", // Status, no caso 0 inativo e 1 ativo
}
```
