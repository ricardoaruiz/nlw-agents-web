# Extensões Recomendadas para o Projeto

Este arquivo documenta as extensões recomendadas para desenvolver neste projeto. O VS Code automaticamente sugerirá instalar essas extensões quando você abrir o workspace.

## 📦 Extensões Essenciais

### 🎨 **Formatação e Linting**
- **Biome** (`biomejs.biome`) - Formatador e linter unificado (substitui Prettier + ESLint)
- **EditorConfig** (`editorconfig.editorconfig`) - Consistência de formatação entre editores

### ⚛️ **TypeScript e React**
- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`) - Snippets úteis para React
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Autocomplete para classes Tailwind
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`) - Renomeia tags HTML automaticamente
- **Highlight Matching Tag** (`vincaslt.highlight-matching-tag`) - Destaca tags correspondentes

### 🔗 **Git e Controle de Versão**
- **GitLens** (`eamodio.gitlens`) - Funcionalidades avançadas do Git
- **Git Graph** (`mhutchie.git-graph`) - Visualizador gráfico do Git
- **Git History** (`donjayamanne.githistory`) - Histórico visual do Git
- **Git Blame** (`waderyan.gitblame`) - Mostra informações de blame inline

### 🚀 **Produtividade**
- **Path Intellisense** (`christian-kohler.path-intellisense`) - Autocomplete para caminhos de arquivos
- **Material Icon Theme** (`pkief.material-icon-theme`) - Ícones bonitos para arquivos
- **Error Lens** (`usernamehw.errorlens`) - Mostra erros inline no código
- **Todo Tree** (`gruntfuggly.todo-tree`) - Destaca e organiza TODOs no código

### 🌐 **Desenvolvimento Web**
- **CSS Peek** (`pranaygp.vscode-css-peek`) - Vai para definições CSS
- **vscode-styled-components** (`styled-components.vscode-styled-components`) - Suporte para styled-components
- **Live Server** (`ritwickdey.liveserver`) - Servidor local para desenvolvimento

### 🛠️ **Utilitários**
- **Color Highlight** (`naumovs.color-highlight`) - Destaca cores no código
- **Turbo Console Log** (`chakrounanas.turbo-console-log`) - Insere console.log rapidamente
- **Template String Converter** (`meganrogge.template-string-converter`) - Converte strings para template literals

### 🤖 **AI e Desenvolvimento**
- **GitHub Copilot** (`github.copilot`) - Assistente de código IA
- **GitHub Copilot Chat** (`github.copilot-chat`) - Chat com IA para código

###  **Debugging e Testing**
- **Console Ninja** (`wallabyjs.console-ninja`) - Console.log melhorado
- **JSON** (`ms-vscode.vscode-json`) - Melhor suporte para arquivos JSON

## 🔧 Como Instalar

### Método Automático (Recomendado)
1. Abra o projeto no VS Code
2. Aparecerá uma notificação para instalar as extensões recomendadas
3. Clique em "Install All" ou "Instalar Todas"

### Método Manual
1. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
2. Digite "Extensions: Show Recommended Extensions"
3. Instale as extensões listadas como "@recommended"

### Via Linha de Comando
```bash
# Instalar todas as extensões recomendadas de uma vez
cat .vscode/extensions.json | jq -r '.recommendations[]' | xargs -I {} code --install-extension {}
```

## 📝 Notas

- Este arquivo é versionado no Git para garantir que toda a equipe use as mesmas extensões
- As configurações específicas das extensões estão no arquivo `.vscode/settings.json`
- Se você tiver outras extensões úteis, considere adicioná-las ao `extensions.json`

## 🔄 Atualizações

Para manter as extensões sempre atualizadas:
1. `Ctrl+Shift+P` → "Extensions: Update All Extensions"
2. Ou use o comando: `code --update-extensions`

## ⚡ Extensões Específicas do Projeto

As extensões foram selecionadas especificamente para este stack:
- **React 19** com **TypeScript**
- **Tailwind CSS** para estilização
- **Biome** para formatação e linting
- **Vite** como bundler
- **React Query** para gerenciamento de estado
