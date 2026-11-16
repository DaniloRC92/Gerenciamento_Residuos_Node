# API de Gerenciamento de Resíduos (Node.js + MySQL)

API REST para quem compra e vende resíduos recicláveis (cooperativas, sucateiros, pequenas empresas
de reciclagem) registrar os **materiais** com que trabalha e o **valor** de cada um, e as **coletas**
feitas: data, rota, materiais, peso, veículo e documentos. Só usuários autenticados acessam
os dados.

## Que problema resolve, e para quem

Em operações pequenas de reciclagem, o controle de coletas costuma ficar em papel ou planilha
solta, o que dificulta saber quanto foi coletado, em qual rota e com qual veículo. A API centraliza
esse registro e serve de back-end para um painel web ou app de campo.

## Tecnologias

- Node.js e Express (rotas REST)
- MySQL com o driver `mysql2` e consultas parametrizadas (protege contra SQL injection)
- JSON Web Token (`jsonwebtoken`) para autenticação, com expiração de 30 minutos
- Arquitetura em camadas: `routes` → `controllers` → `models`, com middleware de autenticação

## Como rodar

Pré-requisitos: Node.js 20 ou superior e MySQL (ou MariaDB).

```bash
# 1. Crie o banco e as tabelas
mysql -u root -p < database/schema.sql

# 2. Configure as variáveis de ambiente
cp .env.example .env      # e preencha usuário, senha e SECRET_KEY

# 3. Instale e suba a API (porta 3000)
npm install
npm start
```

## Rotas

| Método | Rota | Autenticação | O que faz |
|---|---|---|---|
| POST | `/api/auth/register` | não | Cadastra usuário (`username`, `password`, `role`) |
| POST | `/api/auth/login` | não | Devolve um token JWT |
| POST | `/api/materials` | token | Cadastra material (`type`, `subtype`, `value`) |
| GET | `/api/materials` | token | Lista materiais |
| POST | `/api/collections` | token | Registra coleta (`date`, `route`, `materials`, `weight`, `vehicle`, `documents`, `createdBy`) |
| GET | `/api/collections` | token | Lista coletas |

Exemplo:

```bash
curl -X POST localhost:3000/api/auth/login -H "Content-Type: application/json" \
     -d '{"username":"ana","password":"minhasenha"}'
# {"message":"Successful login","token":"eyJhbGciOi..."}

curl localhost:3000/api/materials -H "Authorization: <token>"
# [{"id":1,"type":"Plástico","subtype":"PET","value":"2.50"}]
```

## Minha parte

Projeto individual: modelei as tabelas, escrevi as rotas, os controllers, os models e o middleware
de autenticação JWT (que também traz um verificador de perfil, `checkRole`).

## Próximos passos

- Guardar as senhas com hash (bcrypt) em vez de texto puro
- Usar o `checkRole` nas rotas de escrita para separar perfis de acesso
- Adicionar testes automatizados das rotas
