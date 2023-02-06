import * as React from "react";
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle='Анита' >
        <p>добро пожаловать в наш гостевой дом</p>
        <h2>Номера</h2>
        <p>2-х местные</p>
        <br />
        <p>3-х местные</p>
        <h2>Особенности</h2>
      </Layout>
    </>
  )
}


export const Head = () =>
  <>
    <title>Анита. Главная страница</title>
    <meta name='description' content='Отель Анита: номера, море, фото, услуги' />
  </>

export default IndexPage