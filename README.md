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


#### Estrutura de JSON para o POST:
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
GET [https://cyrela-rm85679.herokuapp.com/houses](https://cyrela-rm85679.herokuapp.com/houses) - Lista todas as casas

Post [https://cyrela-rm85679.herokuapp.com/houses](https://cyrela-rm85679.herokuapp.com/houses) - Cria o registro de uma casa (enviar nos headers a estrutura de JSON abaixo)

GET [https://cyrela-rm85679.herokuapp.com/houses/1](https://cyrela-rm85679.herokuapp.com/houses/1) - Faz a busca por dados de uma casa  por ID (no exemplo está o ID 1)


#### Estrutura de JSON para o POST:
```json
{
	"owner_name": "Rodrigo Roberto de Almeida", // nome do proprietário
	"owner_registry": "123.456.789-00", // número de identidade do proprietário, está sendo usado o CPF como exemplo
	"house_name": "Minha Casa", // nome da casa, caso aplicado, exemplo: Sítio descanso do seu Zé
	"status": 1, // status 0 = anuncio inativo, status 1 = ativo
	"address_line1": "Rua Guabijú, 68", // linha de endereço 1
	"address_line2": "", // linha de endereço 2, para casos internacionais
	"cep_zip": "03077-100", // CEP ou ZIP code se internacional
	"city": "São Paulo", // Cidade
	"country": "Brazil" // País
}
```
