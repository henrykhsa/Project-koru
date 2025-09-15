# 💻 Blog Pessoal - Código Humano

Um blog minimalista e pessoal que explora a intersecção entre a tecnologia e a vida humana. Este projeto foi construído do zero com o Next.js para demonstrar conceitos modernos de desenvolvimento web, como roteamento dinâmico e componentes de servidor.

## ✨ Funcionalidades

* **Página Inicial:** Lista posts recentes e em destaque para uma visualização rápida.
* **Páginas Dinâmicas:** Cada post tem sua própria URL, exibindo o conteúdo completo.
* **Página "Sobre Mim":** Uma página estática para informações pessoais e links sociais.
* **Layout Global:** Navegação e rodapé consistentes em todas as páginas.
* **Conteúdo em Markdown:** As postagens são criadas em arquivos `.mdx` simples, facilitando a escrita.

---

## 🛠️ Tecnologias Utilizadas

* **Next.js:** Framework de React para renderização no lado do servidor.
* **React:** Biblioteca para a interface do usuário.
* **TypeScript:** Linguagem de tipagem para código mais seguro.
* **Tailwind CSS:** Framework utilitário para estilização rápida e responsiva.
* **Gray-matter:** Para analisar metadados de arquivos Markdown.

---

## ⚙️ Instalação e Dependências

Para iniciar o projeto, você precisa instalar todas as dependências do `package.json`.

1.  **Instale os pacotes principais:**

    ```bash
    npm install
    ```

2.  **Instale as bibliotecas adicionais:**
    * Se você não instalou o Tailwind CSS e o Gray-matter, use os comandos abaixo.

    ```bash
    # Tailwind CSS
    npm install -D tailwindcss postcss autoprefixer

    # Gray-matter (para ler os posts)
    npm install gray-matter
    ```

3.  **Inicialize a configuração do Tailwind (se necessário):**

    ```bash
    npx tailwindcss init -p
    ```

---

## 🚀 Como Executar o Projeto

1.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

2.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📂 Estrutura do Projeto

* `app/`: Onde ficam as rotas e páginas.
* `src/content/posts/`: Pasta dedicada a todas as postagens do blog (arquivos `.mdx`).
* `src/components/`: Componentes reutilizáveis, como o `Header`, `Footer` e os cards de postagem.
* `src/lib/`: Funções utilitárias e lógicas de busca de dados.
* `src/types/`: Interfaces TypeScript para garantir a tipagem.

---

## 📄 Licença

Este projeto está sob a licença MIT.