function FormularioProduto({ valores, onChange, onSubmit }) {
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
      <h2>Cadastrar produto</h2>
      <p className="formulario__ajuda">Os produtos ficam salvos no State do React.</p>

      <label htmlFor="produto-nome">Nome</label>
      <input
        id="produto-nome"
        name="nome"
        type="text"
        placeholder="Ex.: Monitor 27 polegadas"
        value={valores.nome}
        onChange={handleChange}
        required
      />

      <label htmlFor="produto-categoria">Categoria</label>
      <input
        id="produto-categoria"
        name="categoria"
        type="text"
        placeholder="Ex.: Informatica"
        value={valores.categoria}
        onChange={handleChange}
        required
      />

      <label htmlFor="produto-preco">Preco</label>
      <input
        id="produto-preco"
        name="preco"
        type="number"
        min="0"
        step="0.01"
        placeholder="3500.00"
        value={valores.preco}
        onChange={handleChange}
        required
      />

      <button type="submit">Cadastrar produto</button>
    </form>
  )
}

export default FormularioProduto
