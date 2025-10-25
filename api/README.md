## API
Projeto BackEnd

## Atenção
Utilizei o node `v22.20.0` e o Docker para rodar o Banco de Dados, então recomendo que faça o mesmo.

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

3. (Opcional) Instale o docker para "subir" o container que irá rodar o Banco de Dados PostgreSQL:

> obs: Caso não queira utilizar o Docker, terá que conter o PostgreSQL em sua máquina local e realizar as configurações necessárias, principalmente na variável de ambiente `DATABASE_URL` que é informado no passo 6.
### Instalação do Docker

#### Windows
- Acesse o site oficial: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
- Baixe o Docker Desktop para Windows
- Execute o instalador e siga as instruções na tela
- Reinicie o computador se solicitado
- Verifique a instalação executando `docker --version` no terminal

#### macOS
- Acesse o site oficial: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
- Baixe o Docker Desktop para Mac (escolha entre Intel ou Apple Silicon)
- Abra o arquivo `.dmg` e arraste o Docker para a pasta Applications
- Inicie o Docker Desktop a partir do Launchpad
- Verifique a instalação executando `docker --version` no terminal

#### Linux (Ubuntu/Debian)
```bash
# Atualize os pacotes
sudo apt-get update

# Instale dependências
sudo apt-get install ca-certificates curl gnupg lsb-release

# Adicione a chave GPG oficial do Docker
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Configure o repositório
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instale o Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Adicione seu usuário ao grupo docker (opcional, para executar sem sudo)
sudo usermod -aG docker $USER
```

#### Verificação
Após a instalação, verifique se o Docker foi instalado corretamente:
```bash
docker --version
docker compose version
```

4. Instale o CLI do [Nest](https://docs.nestjs.com) na sua máquina:
- `npm i -g @nestjs/cli`

5. Na raiz do projeto **e utilizando o Node na versão v22.20.0** execute: `npm install`;

6. Crie um arquivo `.env` na raiz do projeto, copie o conteúdo contido em `.env.example` e cole em `.env` e configure as variáveis de ambiente para o seu caso de teste local.
- `JWT_SECRET`: se quiser pode utilizar o mesmo token, não têm problema.
- `DATABASE_URL`: será a configuração do seu banco de dados rodando em sua máquina, nesse caso, o PostgreSQL.
- - Caso utilize o Docker e irá rodar o container com as instruções contidas em `docker-compose.yml`, então você pode seguir exatamente essas informações (a não ser que tenha algo rodando em sua máquina que conflite com as configurações, ai terá que ajustar manualmente):
- - `DATABASE_URL="postgresql://admin:admin@localhost:5432/meudb?schema=public"`

7. Após instalar as dependências suba o container Docker e rode as migrações de desenvolvimento do prisma:
- Iniciar o container do PostgreSQL
- - `docker-compose up -d`

- Verificar se está rodando
- - `docker ps`

- Rodar as migrations do Prisma
- - `npx prisma migrate dev`

- Abrir o Prisma Studio (interface visual)
- - `npx prisma studio`

8. Se tudo ocorrer bem, para rodar o projeto execute:
- `npm run start:dev`

9. Caso dê algum problema de Error com Status 500 relacionado à conexão do prisma, tente rodar `npx prisma migrate reset` e execute novamente o projeto(`npm run start:dev`)