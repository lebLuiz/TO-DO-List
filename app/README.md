## APP
Projeto FrontEnd

## Atenção
Utilizei o node `v22.20.0` para executar o projeto, então recomendo que faça o mesmo.

## Configurações iniciais - Siga passo a passo.
1. Primeiro acesse a pasta do projeto;

2. Caso não tenha o Node em sua máquina, siga os passos abaixo:
### Instalação do Node.js

#### Windows
- Acesse o site oficial: [https://nodejs.org](https://nodejs.org)
- Baixe o instalador LTS (recomendado) ou a versão específica v22.20.0
- Execute o instalador e siga as instruções na tela
- Verifique a instalação executando `node --version` no terminal

#### macOS
- **Usando Homebrew** (recomendado):
  ```bash
  brew install node@20
  ```
- **Ou baixe diretamente**:
  - Acesse [https://nodejs.org](https://nodejs.org)
  - Baixe o instalador para macOS
  - Execute o instalador e siga as instruções

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Verificação
Após a instalação, verifique se o Node.js foi instalado corretamente:
```bash
node --version
npm --version
```

3. Na raiz do projeto **e utilizando o Node na versão v22.20.0** execute: `npm install`;

4. Se tudo ocorrer bem, para rodar o projeto execute:
- `npm run dev`
- - Na sequência, abra o navegador em: `http://localhost:5173`
- - E pronto, projeto rodando! :D