# Práticas de TypeScript

Esta pasta contém um projeto de demonstração focado nos conceitos básicos e essenciais da linguagem **TypeScript**. O objetivo é ilustrar como usar **interfaces** para criar um código mais seguro e organizado, garantindo que os objetos sigam uma estrutura pré-definida.

## 📝 Conceitos Abordados

O arquivo `Pratica.ts` demonstra:

  * **Interfaces**: Como definir moldes para objetos, como `Address`, `Person` e `Product`.
  * **Herança de Interfaces**: O uso da palavra-chave `extends` para criar interfaces mais específicas a partir de outras, como a interface `Employee` que estende `Person`.
  * **Propriedades Opcionais**: Como definir propriedades que não são obrigatórias em uma interface, usando o `?` (ex: `department?` em `Employee`).
  * **Arrays Tipados**: Como tipar um array para garantir que todos os seus elementos sigam a mesma interface (ex: `const productsList: Product[]`).
  * **Métodos de Array**: Um exemplo prático de uso do método `.map()` em um array tipado.

## 🚀 Como Executar

Para compilar e rodar o arquivo `Pratica.ts`, você precisa ter o **TypeScript** e o **Node.js** instalados em sua máquina.

1.  **Compilar o código TypeScript:**
    Navegue até a pasta `TypeScript` no seu terminal e execute o comando para compilar o arquivo `.ts` para um arquivo `.js`:

    ```bash
    tsc Pratica.ts
    ```

    Isso criará um arquivo `Pratica.js` na mesma pasta.

2.  **Executar o arquivo JavaScript:**
    Agora, você pode executar o arquivo JavaScript compilado usando o Node.js:

    ```bash
    node Pratica.js
    ```