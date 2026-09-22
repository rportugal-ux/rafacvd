# Sistema de Clientes React

Aplicação web desenvolvida para a Aurora Tech com o objetivo de apresentar um catálogo de produtos e realizar o cadastro de clientes utilizando React, API, Back-End e Banco de Dados.

## Problema solucionado

A empresa precisava de um sistema simples para:

- visualizar produtos cadastrados;
- adicionar novos produtos ao catálogo;
- consultar clientes já cadastrados;
- cadastrar novos clientes;
- armazenar os dados dos clientes em um banco de dados.

Os produtos são armazenados no State do React. Os clientes são enviados para uma API, processados pelo Back-End e gravados no banco de dados SQLite.

---

## Tecnologias utilizadas

- Node.js
- npm
- Vite
- React
- JSX
- JavaScript
- Componentes
- Props
- State
- Eventos
- map()
- CSS
- Express
- SQLite
- better-sqlite3
- Git
- GitHub

---

## Como executar o Front-End

Abra o terminal na pasta Frontend:

```bash
cd Frontend
npm install
npm run dev
```

A aplicação será executada em:

```text
http://localhost:5173
```

---

## Como executar o Back-End

Abra outro terminal na pasta backend:

```bash
cd backend
npm install
npm start
```

A API será executada em:

```text
http://localhost:3001
```

---

## Rotas da API

| Método | Rota | Descrição |
|----------|-----------------|-----------------------------------|
| GET | /api/clientes | Lista todos os clientes |
| POST | /api/clientes | Cadastra um novo cliente |

### Exemplo de JSON para cadastro

```json
{
  "nome": "Ana Souza",
  "email": "ana@email.com",
  "telefone": "(11) 98888-1234"
}
```

---

## Testes no Postman

### GET

```text
http://localhost:3001/api/clientes
```

### POST

```text
http://localhost:3001/api/clientes
```

Body:

```json
{
  "nome": "Ana Souza",
  "email": "ana@email.com",
  "telefone": "(11) 98888-1234"
}
```

Após o cadastro, o novo cliente aparecerá na aplicação.

---

## Estrutura do Banco de Dados

Banco utilizado:

```text
Banco de dados/clientes.db
```

Tabela:

```text
clientes
```

Campos:

| Campo | Tipo |
|---------|---------|
| id | INTEGER |
| nome | TEXT |
| email | TEXT |
| telefone | TEXT |
| criado_em | TEXT |

Arquivos:

```text
Banco de dados/schema.sql
Banco de dados/seed.sql
```

---

## Funcionalidades

- Catálogo de produtos;
- Cadastro de produtos;
- Produtos armazenados no State;
- Listagem de produtos utilizando map();
- Componente Produto;
- Componente Titulo;
- Listagem de clientes;
- Componente Cliente;
- Formulário de cadastro;
- Componente FormularioCliente;
- Utilização de Props;
- Utilização de State;
- Eventos;
- Comunicação com API usando fetch();
- Requisição GET;
- Requisição POST;
- Persistência dos dados no banco;
- Atualização automática da lista;
- Estilização própria com CSS.

---

## Estrutura do Projeto

```text
sistema-clientes-react/
│
├── backend/
│   ├── database.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Banco de dados/
│   ├── clientes.db
│   ├── schema.sql
│   ├── seed.sql
│
├── Docs/
│   └── aplicacao.png
│
├── Frontend/
│   ├── src/
│   │   ├── Ativos/
│   │   ├── Componentes/
│   │   │   ├── Titulo.jsx
│   │   │   ├── Produto.jsx
│   │   │   ├── FormularioProduto.jsx
│   │   │   ├── Cliente.jsx
│   │   │   └── FormularioCliente.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── index.html
│
├── README.md
└── start.sh
```

---

## Fluxo da Aplicação

### Cadastro

```text
USUÁRIO
   ↓
FORMULÁRIO REACT
   ↓
STATE
   ↓
fetch()
   ↓
POST
   ↓
API
   ↓
BACK-END
   ↓
BANCO DE DADOS
```

### Retorno dos dados

```text
BANCO DE DADOS
   ↓
BACK-END
   ↓
API
   ↓
fetch()
   ↓
STATE
   ↓
REACT
   ↓
map()
   ↓
COMPONENTE CLIENTE
   ↓
TELA
```

---

## Componentes React

### Titulo.jsx

Exibe o nome da aplicação e uma descrição.

### Produto.jsx

Recebe por Props:

- nome;
- categoria;
- preço.

### Cliente.jsx

Recebe por Props:

- nome;
- e-mail;
- telefone.

### FormularioCliente.jsx

Possui:

- Nome;
- E-mail;
- Telefone;
- Botão de cadastro.

Os dados são controlados pelo State.

---

## Requisitos atendidos

✅ React  
✅ JSX  
✅ Componentes  
✅ Props  
✅ State  
✅ Eventos  
✅ map()  
✅ CSS  
✅ fetch()  
✅ API  
✅ Back-End  
✅ Banco de Dados  
✅ GET  
✅ POST  
✅ GitHub  
✅ README.md

---

## Captura de Tela

A imagem da aplicação está na pasta:

```text
Docs/aplicacao.png
```

Para exibir no README:

```markdown
![Aplicação funcionando](Docs/aplicacao.png)
```

---

## Integrantes

- Rafaela Portugal
- Taís Millena

---

## GitHub

Repositório:

https://github.com/rportugal-ux/rafacvd

---

## Conclusão

O projeto foi desenvolvido utilizando React no Front-End, Express no Back-End e SQLite para armazenamento dos dados.

A aplicação permite visualizar produtos, cadastrar produtos, consultar clientes e cadastrar novos clientes, colocando em prática os conceitos de React, JSX, Componentes, Props, State, Eventos, map(), fetch(), API, Banco de Dados e GitHub.
