import * as React from 'react';
import Layout from "../components/layout"

const contacts = () => {
  return (
    <>
      <Layout pageTitle='Контакты' >
        <h1>Свяжитесь с нами</h1>
        <a href='tel:9183074759' rel='noopener noreferrer'>8(918) 307-47-59</a>
        <br />
        <a href="mailto:anita2022@yandex.ru" rel="noopener noreferrer">anita2022@yandex.ru</a>
        <br />
        <a href="https://api.whatsapp.com/send/?phone=9183074759" rel="noopener noreferrer">WhatsApp</a>
      </Layout>
    </>
  )
}

export const Head = () =>
  <>
    <title>Контакты</title>
    <meta name='description' content='Как с нами связаться: телефон, адрес, Телеграм' />
  </>

export default contacts