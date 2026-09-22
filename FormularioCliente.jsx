function FormularioCliente({ valores, onChange, onSubmit, enviando }) {
  function handleChange(evento) {
    const { name, value } = evento.target
    onChange(name, value)
  }

  function handleSubmit(evento) {
    evento.preventDefault()
    onSubmit()
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Cadastrar cliente</h2>
      <p className="formulario__ajuda">
        Os dados sao enviados com fetch() para a API e gravados no banco.
      </p>

      <label htmlFor="cliente-nome">Nome</label>
      <input
        id="cliente-nome"
        name="nome"
        type="text"
        placeholder="Ex.: Ana Souza"
        value={valores.nome}
        onChange={handleChange}
        required
      />

      <label htmlFor="cliente-email">E-mail</label>
      <input
        id="cliente-email"
        name="email"
        type="email"
        placeholder="Ex.: ana@email.com"
        value={valores.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="cliente-telefone">Telefone</label>
      <input
        id="cliente-telefone"
        name="telefone"
        type="tel"
        placeholder="Ex.: (11) 98888-1234"
        value={valores.telefone}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={enviando}>
        {enviando ? 'Cadastrando...' : 'Cadastrar cliente'}
      </button>
    </form>
  )
}

export default FormularioCliente
