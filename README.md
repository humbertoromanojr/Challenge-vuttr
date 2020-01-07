<h1 align="center">
DESAFIO VUTTR
</h1>

### Axios

usado para poder comsumir a API, nesse caso eu usei um arquivo externo para instanciar a API, nesse arquivo:

--- services/api.js

exemplo:
import axios from 'axios';

const api = axios.create({
baseURL: 'http://localhost:3001',
});

export default api;

E depois ao montar o componente, o componentDidMount faz acontecer e mostrar a lista da API pelo method get:

exemplo:
componentDidMount() {
api.get('/tools').then((res) => {
...
});
});
}

### prop-types

Pacote que serve para facilitar a vida dos Devs, nele tem quais as Propriedades e Tipo de um component.

Exemplo:

static propTypes = {
tools: PropTypes.shape({
data: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.number,
title: PropTypes.string,
description: PropTypes.string,
tags: PropTypes.string,
}),
),
}).isRequired,
};


### react-router-dom

Este pacote serve para fazer a navegação de telas na aplicação, mais não foi necessário nesse projeto, foi configurado o básico, mesmo assim o deixei porque e um pacote geralmente sempre usado, afinal uma aplicação sempre tem sua navegação.

exemplo:

--- App.js

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

<Container>
  <Content />
  <Router exact path="/" component={Content} />
</Container>

### reactotron-react-js, reactotron-redux e reactotron-redux-saga

Estes três pacotes servem para a mesma coisa, debugar sua aplicação com o Reactotron.

- reactotron-react-js: Este e para toda a aplicação em nivél de react js;
- reactotron-redux: Este e para debugar o redux de sua aplicação;
- reactotron-redux-saga: E este e para debugar os Redux-Saga de sua aplicação

os proóprios nomes são bem sugestivos e já conta o que ele fará em sua aplicação, nesse projeto eu não usei para Redux-saga, apenas configurei como padrão para debug.

### redux e react-redux

Este pacote e muito importa, nele e que fica 99% do estado de sua aplicaçãol ele no store gerencia e falicita nossa vida de Dev e gerencia todo o state de nossa aplicação, não irei me extender muito nessa questão, porque e um assunto complexo. Ele veio do conceito de Flux, unica fonte da verdade.

Já o pacote react-redux, faz a ponte e liga o React ao Redux

### Styled-components

Este pacote e para fazer um layout melhor e mais profissional



### Eslint, .editorconfig e Prettier

São pacotes de configuração de ambiente de Desenvolvimento, servem para um melhor desempenho em equipes que estão desenvolvendo o mesmo projeto.

- Eslint: Serve para demostrar os Error dos padrões dos Codes de sua aplicação;
- .editorconfig: Serve para padronizar os Codes, de diferentes editores;
- Prettier: Serve para deixar os Codes bem aninhados

### SEO e history

Sobre a atuais diretrizes do SEO para sua aplicação JS
link: https://webmasters.googleblog.com/2015/10/deprecating-our-ajax-crawling-scheme.html

O Pacote History serve para ajudar no SEO, para o pushState() dos navegadores, como tem explicado no link acima para os webmaters.googleblog

### Sugestões de mehoria para o desafio

01 - No desafio teria que ter um Footer, para ver o conhecimento em css para poder ver o grau de conhecimento em css, como alinhar todo o conteúdo do projeto no footer;

02 - Nesse projeto do challenge e mais uma comprovação se o canditado sabe fazer um simpes CRUD, mais como não pediram o Update, isso também deveria pelo menos estar como Bonus;


### FRONT-END

- ⚛️ **React Js** — A JavaScript library for building user interfaces

-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [React Router](https://github.com/ReactTraining/react-router)
-   [styled-components](https://www.styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [History](https://www.npmjs.com/package/history)
-   [React-Toastify](https://fkhadra.github.io/react-toastify/)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Reactotron](https://infinite.red/reactotron)
-   [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]



## Instruções

```bash
# Rodar a API JSON-SERVER na porta 3001 e com delay de 500ms
npx json-server db.json -p 3001 -w -d 500

# Instalar os pacotes
yarn ou npm install

# Iniciar a aplicação
yarn ou npm start
```


## Demostration

<h1 align="center">
  <img src="https://i.ibb.co/Nt77NPb/bossabox-vuttr.gif" alt="bossabox-vuttr" border="0">
</h1>


