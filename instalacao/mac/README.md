# SDS1: Instalação das ferramentas no Mac

## ATENÇÃO:

**É MUITO IMPORTANTE que todos instalem as mesmas versões para evitar imprevistos durante a construção do projeto, e possibilitar que suas dúvidas sejam respondidas.**

## Ferramentas que você deverá instalar no seu computador:

- JDK 11
- STS
- Postman
- Postgresql e pgAdmin
- Heroku CLI
- NPM
- VS Code
- Git

 ## Instalar o Homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
1. Update HomeBrew.
``` 
$ brew update 
```
2. Add the casks tap.
```
$ brew tap homebrew/cask-versions
```

## Java 11 on MacOS
```
$ brew cask install java11 
```
- OU para instalar a última versão
```
$ brew cask install java
```
- Verificar a instalação: 
```
$ java —version
```

## STS on MacOS 
```
$ brew cask install springtoolsuite
```

## postman 
```
$ brew cask install postman
```

## postgresql 
```
$ brew install postgresql
```
- Se você for criar um banco de dados local, execute o seguinte comando para iniciar o servidor e fazer login nele (basicamente, ele configura um único usuário "admin" com seu nome de usuário com quem você fará o login) :
```
$ brew services start postgresql
```
- Para o servidor
```
brew services stop postgresql
```
- Terminal do Postgres (use ``` \q ``` para sair)
```
$ psql postgres
```

## pgadmin4 
```
$ brew cask install pgadmin4
```

## Heroku CLI 
Criar uma conta no site do Heroku
https://devcenter.heroku.com/articles/heroku-cli#getting-started
- Instalar o heroku CLI
```
$ brew tap heroku/brew && brew install heroku
```
- Vincular a sua conta com a instalação no computador
```
$ heroku autocomplete
```
- Esse comando irá abrir o site de login, faça login com seu usuário e senha

## Node & NPM 
```
$ brew install node
```

## YARN (Caso queira usar o YARN ao invés do NPM)

```
$ brew install yarn
```

## VS Code

1. Download Visual Studio Code for macOS. https://go.microsoft.com/fwlink/?LinkID=534106
2. No Finder abrir a pasta de downloads e localizar o arquivo baixado. 
3. Arrastar o Visual Studio Code.app para a pasta Applications , para que ele fique disponível no macOS Launchpad.
5. Adicionar VS Code na Dock clicando com o botão direito no icone e no menu de contexto selecionar: Options, Keep in Dock.

## Git
```
$ brew install git
```
