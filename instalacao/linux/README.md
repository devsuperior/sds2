# SDS1: Instalação das ferramentas no Linux (Ubuntu/Debian)

## ATENÇÃO:

**É MUITO IMPORTANTE que todos instalem as mesmas versões para evitar imprevistos durante a construção do projeto, e aumentar as chances de que suas dúvidas sejam respondidas.**

## Ferramentas que você deverá instalar no seu computador:

- Curl
- Git
- Java JDK 11
- Maven
- STS
- Postman
- Postgresql e pgAdmin
- Heroku CLI
- Node & NPM
- VS Code

## Playlist mostrando a instalação:

https://www.youtube.com/playlist?list=PLNuUvBZGBA8mcAF-YX7RJhA26TBLdG5yk

## Curl

- Instalar o curl
```
sudo apt-get install -y curl
```
- Conferir a instalação: 
```
curl
```

## Git

- Instalar: 
```
sudo apt-get install -y git
```

- Conferir a instalação: 
```
git
```

## Java JDK 11

- Instalar Java: 
```
sudo apt install openjdk-11-jdk
```

- Verificar a instalação: 
```
java -version
```
- Configurar JAVA_HOME:
  - Verificar caminho Java: 
  ```
  sudo update-alternatives --config java
  ```
  - Copie o caminho do Java
  - Edite o arquivo .bashrc: 
  ```
  sudo gedit ~/.bashrc
  ```
  - Copie o código abaixo no final do arquivo. Salve o arquivo.
  - Abra um novo terminal e teste: 
  ```
  echo $JAVA_HOME
  ```

```
JAVA_HOME=/usr/...
export JAVA_HOME
export PATH=$PATH:$JAVA_HOME
```

## Maven

- Instalar Maven: 
```
sudo apt-get install maven
```
- Verificar a instalação: 
```
mvn -v
```

## STS

- Google: STS
- Baixar
- Descompactar (exemplo: /home/user/apps)
- Iniciar STS
  - Selecione um workspace (exemplo: /home/user/Workspaces/ws-sts)
- Liberar permissão na pasta do workspace: 
```
sudo chmod -R ugo+rw /home/user/Workspaces/ws-sts
```

## Postman

- Instalar com snap: 
```
snap install postman
```

## Postgresql

```
https://www.postgresql.org/download/linux/ubuntu/
```

## pgAdmin

```
https://www.pgadmin.org/download/pgadmin-4-apt/
```

## Heroku CLI

```
https://devcenter.heroku.com/articles/heroku-cli
```

## Node & NPM

```
sudo apt update

curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install nodejs
```

## YARN (Caso queira usar o YARN ao invés do NPM)
No Debian e no Ubuntu:
```
 curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 
 echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
 
 sudo apt-get update && sudo apt-get install yarn

```
Caso tenha problemas de instalação a própria DOC do Yarn é muito útil: https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable

## VS Code

```
https://code.visualstudio.com/download

sudo snap install code --classic
```

