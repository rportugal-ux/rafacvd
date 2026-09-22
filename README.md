# Sistema de Clientes React

Aplicacao web da Aurora Tech para apresentar o catalogo de produtos e cadastrar clientes da loja.

## Problema solucionado

A empresa precisava de um painel simples para:

- visualizar produtos cadastrados;
- adicionar novos produtos no catalogo;
- consultar clientes ja registrados;
- cadastrar novos clientes com persistencia em banco de dados.

Os produtos ficam apenas no State do React. Os clientes sao enviados para a API, processados pelo Back-End e gravados no Banco de Dados SQLite.

## Tecnologias utilizadas

- Node.js
- npm
- Vite
- React
- JSX
- Componentes, Props, State e Eventos
- `map()`
- JavaScript
- CSS
- Express
- SQLite (`better-sqlite3`)
- Git / GitHub

## Como executar o Front-End

```bash
cd frontend
npm install
npm run dev
```

A aplicacao sobe em `http://localhost:5173`.

O Vite encaminha as requisicoes de `/api` para o Back-End em `http://localhost:3001`.

## Como executar o Back-End

```bash
cd backend
npm install
npm start
```

A API sobe em `http://localhost:3001`.

Para iniciar os dois servicos juntos:

```bash
chmod +x start.sh
./start.sh
```

## Rotas da API

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/api/clientes` | Lista todos os clientes cadastrados |
| POST | `/api/clientes` | Cadastra um novo cliente |

Exemplo de corpo para `POST /api/clientes`:

```json
{
  "nome": "Ana Souza",
  "email": "ana@email.com",
  "telefone": "(11) 98888-1234"
}
```

Teste sugerido no Postman ou equivalente:

1. `GET http://localhost:3001/api/clientes`
2. `POST http://localhost:3001/api/clientes` com o JSON acima
3. Confirme o novo registro no retorno do GET e no arquivo `database/clientes.db`

## Estrutura do Banco de Dados

Arquivo: `database/clientes.db` (SQLite)

Tabela `clientes`:

| Coluna | Tipo | Descricao |
| --- | --- | --- |
| id | INTEGER | Chave primaria autoincremento |
| nome | TEXT | Nome do cliente |
| email | TEXT | E-mail do cliente |
| telefone | TEXT | Telefone do cliente |
| criado_em | TEXT | Data e hora do cadastro |

O schema tambem esta em `database/schema.sql`.

## Funcionalidades

- Catalogo de produtos com 3 itens iniciais
- Cadastro de produtos no State do React
- Listagem de produtos com `map()` e o componente `Produto`
- Listagem de clientes com `map()` e o componente `Cliente`
- Formulario controlado para cadastro de clientes
- Comunicacao com a API usando `fetch()`
- Persistencia dos clientes no Banco de Dados
- Identidade visual propria em CSS

## Estrutura do projeto

```text
sistema-clientes-react
├── frontend
│   └── src
│       ├── components
│       │   ├── Titulo.jsx
│       │   ├── Produto.jsx
│       │   ├── FormularioProduto.jsx
│       │   ├── Cliente.jsx
│       │   └── FormularioCliente.jsx
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── backend
│   ├── server.js
│   ├── database.js
│   └── package.json
├── database
│   ├── schema.sql
│   ├── seed.sql
│   └── clientes.db
├── docs
│   └── aplicacao.png
├── start.sh
└── README.md
```

## Integrantes

- Rafaela Portugal e Tais Millena.

## Captura de tela

Aplicacao em funcionamento, com catalogo de produtos no State do React e clientes carregados da API:

![Catalogo de Produtos e Gestao de Clientes](docs/aplicacao.png)
