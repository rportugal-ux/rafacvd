import { useEffect, useState } from 'react'
import Titulo from './components/Titulo.jsx'
import Produto from './components/Produto.jsx'
import FormularioProduto from './components/FormularioProduto.jsx'
import Cliente from './components/Cliente.jsx'
import FormularioCliente from './components/FormularioCliente.jsx'

const produtosIniciais = [
  { id: 1, nome: 'Notebook Aurora 15', categoria: 'Informatica', preco: 3500 },
  { id: 2, nome: 'Fone Pulse Pro', categoria: 'Audio', preco: 489.9 },
  { id: 3, nome: 'Cadeira Ergonoma Lite', categoria: 'Escritorio', preco: 1290 },
]

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais)
  const [produtoForm, setProdutoForm] = useState({
    nome: '',
    categoria: '',
    preco: '',
  })

  const [clientes, setClientes] = useState([])
  const [clienteForm, setClienteForm] = useState({
    nome: '',
    email: '',
    telefone: '',
  })
  const [enviandoCliente, setEnviandoCliente] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  async function carregarClientes() {
    try {
      const resposta = await fetch('/api/clientes')
      if (!resposta.ok) {
        throw new Error('Nao foi possivel carregar os clientes.')
      }
      const dados = await resposta.json()
      setClientes(dados)
      setErro('')
    } catch (falha) {
      setErro(falha.message)
    }
  }

  useEffect(() => {
    carregarClientes()
  }, [])

  function atualizarProdutoForm(campo, valor) {
    setProdutoForm((atual) => ({ ...atual, [campo]: valor }))
  }

  function cadastrarProduto() {
    const novoProduto = {
      id: Date.now(),
      nome: produtoForm.nome.trim(),
      categoria: produtoForm.categoria.trim(),
      preco: Number(produtoForm.preco),
    }

    setProdutos((lista) => [...lista, novoProduto])
    setProdutoForm({ nome: '', categoria: '', preco: '' })
    setMensagem('Produto adicionado ao catalogo.')
  }

  function atualizarClienteForm(campo, valor) {
    setClienteForm((atual) => ({ ...atual, [campo]: valor }))
  }

  async function cadastrarCliente() {
    setEnviandoCliente(true)
    setMensagem('')
    setErro('')

    try {
      const resposta = await fetch('/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: clienteForm.nome.trim(),
          email: clienteForm.email.trim(),
          telefone: clienteForm.telefone.trim(),
        }),
      })

      if (!resposta.ok) {
        const corpo = await resposta.json().catch(() => ({}))
        throw new Error(corpo.erro || 'Nao foi possivel cadastrar o cliente.')
      }

      setClienteForm({ nome: '', email: '', telefone: '' })
      await carregarClientes()
      setMensagem('Cliente cadastrado com sucesso.')
    } catch (falha) {
      setErro(falha.message)
    } finally {
      setEnviandoCliente(false)
    }
  }

  return (
    <div className="pagina">
      <Titulo />

      {mensagem ? <p className="alerta alerta--ok">{mensagem}</p> : null}
      {erro ? <p className="alerta alerta--erro">{erro}</p> : null}

      <section className="secao">
        <div className="secao__cabecalho">
          <h2>Produtos</h2>
          <p>Lista controlada pelo State do React, sem API.</p>
        </div>

        <div className="grade">
          <FormularioProduto
            valores={produtoForm}
            onChange={atualizarProdutoForm}
            onSubmit={cadastrarProduto}
          />

          <div className="lista">
            {produtos.map((produto) => (
              <Produto
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="secao__cabecalho">
          <h2>Clientes</h2>
          <p>Dados buscados e gravados pela API com fetch().</p>
        </div>

        <div className="grade">
          <FormularioCliente
            valores={clienteForm}
            onChange={atualizarClienteForm}
            onSubmit={cadastrarCliente}
            enviando={enviandoCliente}
          />

          <div className="lista">
            {clientes.length === 0 ? (
              <p className="lista__vazia">Nenhum cliente cadastrado ainda.</p>
            ) : (
              clientes.map((cliente) => (
                <Cliente
                  key={cliente.id}
                  nome={cliente.nome}
                  email={cliente.email}
                  telefone={cliente.telefone}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
