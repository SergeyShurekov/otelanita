import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Страница не найдена</h1>
      <p style={paragraphStyles}>
        Сожелеем 😔, но данной страницы у нас нет.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Сделай страницу на  <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Вернуться</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Не найден</title>
