function Produto({ nome, categoria, preco }) {
  const precoFormatado =
    typeof preco === 'number'
      ? preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : preco

  return (
    <article className="card card--produto">
      <span className="card__tag">{categoria}</span>
      <h3>{nome}</h3>
      <p className="card__preco">{precoFormatado}</p>
    </article>
  )
}

export default Produto
