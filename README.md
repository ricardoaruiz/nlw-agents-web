# NLW-Agents

Este projeto foi desenvolvido durante o evento **NLW (Next Level Week) da Rocketseat**.

## Descrição

O **NLW-Agents** é uma aplicação web construída com React, focada em organização modular, uso de componentes reutilizáveis e integração com bibliotecas modernas para produtividade e experiência do usuário.

## Principais Tecnologias e Bibliotecas

- **React 19** – Biblioteca principal para construção da interface.
- **Vite** – Ferramenta de build e desenvolvimento rápido.
- **TypeScript** – Tipagem estática para maior segurança.
- **React Router v7** – Gerenciamento de rotas SPA.
- **@tanstack/react-query** – Gerenciamento de dados assíncronos.
- **Tailwind CSS** – Utilitários para estilização rápida.
- **Radix UI** – Componentes acessíveis e semânticos.
- **Lucide React** – Ícones SVG.
- **Class Variance Authority, clsx, tailwind-merge** – Utilitários para composição de classes CSS.

## Padrões de Projeto

- **Componentização**: Componentes reutilizáveis organizados em `src/components` e `src/components/ui`.
- **Pages**: Páginas principais em `src/pages`.
- **Hooks e Providers**: Uso de React Query para gerenciamento de estado assíncrono.
- **Alias de Imports**: Utilização de `@/` para facilitar imports relativos.

## Setup e Instalação

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repo>
   cd web-agents
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Rode o projeto em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Build para produção:**

   ```bash
   npm run build
   ```

5. **Preview do build:**
   ```bash
   npm run preview
   ```

## Extensões Recomendadas do VS Code

Este projeto inclui uma lista de extensões recomendadas para o VS Code que melhoram significativamente a experiência de desenvolvimento.

### 📦 **Instalação Automática**
Quando você abrir o projeto no VS Code, aparecerá uma notificação para instalar as extensões recomendadas. Clique em **"Install All"** para instalar todas de uma vez.

### 📋 **Lista Completa**
Para ver a lista completa de extensões recomendadas e suas descrições, consulte: [**`.vscode/extensions.md`**](.vscode/extensions.md)

### 🔧 **Principais Extensões**
- **Biome** - Formatação e linting unificado
- **Tailwind CSS IntelliSense** - Autocomplete para Tailwind
- **ES7+ React Snippets** - Snippets úteis para React
- **GitLens** - Recursos avançados do Git
- **Error Lens** - Visualização inline de erros

## Configurações

- **TypeScript**: Configurações estritas e paths customizados em `tsconfig.json` e `tsconfig.app.json`.
- **Vite**: Plugins para React e Tailwind, além de alias para `@/src`.
- **Tailwind CSS**: Configurado via plugin do Vite.
