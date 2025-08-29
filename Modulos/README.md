# Módulos em Node.js

Esta pasta contém exemplos práticos de como criar e usar módulos em um projeto Node.js. Ela demonstra a importação e exportação de funções de arquivos locais e a utilização de bibliotecas externas instaladas via npm.

## 📁 Estrutura da Pasta

  - `calculos.js`: Módulo que exporta funções para operações matemáticas simples, como `somar` e `multiplicar`.
  - `utils.js`: Módulo de utilidades que exporta a função `saudacao` para criar mensagens personalizadas.
  - `index.js`: Arquivo principal do projeto, onde todos os módulos e bibliotecas são importados e utilizados.
  - `package.json` e `package-lock.json`: Arquivos de configuração do Node.js que gerenciam as dependências do projeto.

## 🚀 Como Executar

Para rodar este projeto, você precisa ter o Node.js instalado. Siga os passos abaixo:

1.  **Instalar as dependências:**
    A única dependência externa utilizada é a biblioteca `lodash`. Para instalá-la, navegue até a pasta `Módulos` no seu terminal e execute o seguinte comando:

    ```bash
    npm install
    ```

2.  **Executar o arquivo principal:**
    Após a instalação, você pode executar o `index.js` com o seguinte comando:

    ```bash
    node index.js
    ```

## 📝 Descrição dos Arquivos

  - **`calculos.js`**:
    ```javascript
    export function somar(a, b) {
      return a + b;
    }
    export default function multiplicar(a, b) {
      return a * b;
    }
    ```
  - **`utils.js`**:
    ```javascript
    export function saudacao(userName) {
      return `Olá, ${userName}! Bem vindo ao módulo de saudação!`;
    }
    ```
  - **`index.js`**:
    Este arquivo demonstra a importação e o uso das funções exportadas. Ele também mostra um exemplo de uso da biblioteca `lodash` para embaralhar um array de números.