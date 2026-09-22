function Cliente({ nome, email, telefone }) {
  return (
    <article className="card card--cliente">
      <h3>{nome}</h3>
      <p>
        <span>E-mail</span>
        {email}
      </p>
      <p>
        <span>Telefone</span>
        {telefone}
      </p>
    </article>
  )
}

export default Cliente
