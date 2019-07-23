# About Packages in Project

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

### react-awesome-modal

Pacote para exibir a janela modal no projeto, e muito fácil de instalar, utilizar e alterar as telas de sua aplicação, foi utilizado para três telas: FormModalAdd, FormModalDelete e FormModalUpdate

exmplo:

--- components/Content/index.js

{/_ form Modal Add _/}

<section>
<Modal
visible={this.state.visible}
width="400"
height="400"
effect="fadeInUp"
onClickAway={() => this.closeModal()} >
<div>
<input type="button" value="Add" onClick={() => this.openModal()} />
<FormModalAdd />
</div>
</Modal>
</section>

import Modal from 'react-awesome-modal';

link: https://github.com/shibe97/react-awesome-modal

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

exemplo:

--- components/HeaderModalAdd/styles.js

import styled from 'styled-components';

import AddIcon from '../../assets/images/plus.svg';

export const Container = styled.div`display: flex; flex-direction: column; align-items: left; padding: 20px;`;

export styled

--- components/HeaderModalAdd/index.js

import { Container } from './styles';

render() {
return (
<Container>
...
</Container>
)

}

### Eslint, .editorconfig e Prettier

São pacotes de configuração de ambiente de Desenvolvimento, servem para um melhor desempenho em equipes que estão desenvolvendo o mesmo projeto.

- Eslint: Serve para demostrar os Error dos padrões dos Codes de sua aplicação;
- .editorconfig: Serve para padronizar os Codes, de diferentes editores;
- Prettier: Serve para deixar os Codes bem aninhados

### SEO e history

Sobre a atuais diretrizes do SEO para sua aplicação JS
link: https://webmasters.googleblog.com/2015/10/deprecating-our-ajax-crawling-scheme.html

O Pacote History serve para ajudar no SEO, para o pushState() dos navegadores, como tem explicado no link acima para os webmaters.googleblog

### Suggestions for improvement to the challenge

01 - No desafio teria que ter um Footer, para ver o conhecimento em css para poder ver o grau de conhecimento em css, como alinhar todo o conteúdo do projeto no footer;

02 - Nesse projeto do challenge e mais uma comprovação se o canditado sabe fazer um simpes CRUD, mais como não pediram o Update, isso também deveria pelo menos estar como Bonus;

# the end About Packages in Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start or yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
