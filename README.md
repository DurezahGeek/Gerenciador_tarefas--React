# Tarefas App

>Este é um aplicativo simples de lista de tarefas desenvolvido em React e integrado ao Firebase para armazenamento e autenticação. O aplicativo permite que os usuários realizem login, cadastrem novas contas, registrem e gerenciem suas tarefas.

## Funcionalidades

| Funcionalidades                         | Descrição                                           |
|----------------------------------|-----------------------------------------------------|
| Login e Cadastro    | Os usuários podem realizar login usando seu e-mail e senha cadastrados. Se não tiverem uma conta, também podem se cadastrar.    |
| Dashboard do Administrador   | Após o login, os usuários são redirecionados para a página do administrador, onde podem visualizar, adicionar, editar e excluir suas tarefas.  |
| Adicionar Tarefa       | Os usuários podem adicionar novas tarefas à sua lista. As tarefas são associadas ao usuário logado. |
| Concluir e Excluir Tarefa:        | Os usuários podem marcar as tarefas como concluídas e, ao fazer isso, a tarefa será excluída automaticamente. |

## Tecnologias Utilizadas

> [!NOTE]
> React: O frontend do aplicativo é construído usando a biblioteca React.

> Firebase: O Firebase é utilizado para autenticação de usuários, armazenamento de dados em tempo real e como backend para o aplicativo.

> React Toastify: A biblioteca React Toastify é usada para exibir notificações de ações, como sucesso, erro e confirmação.

## Estrutura do Projeto
- **src/components/Admin:** Contém o componente principal que representa a página do administrador, onde as tarefas são gerenciadas.

- **src/components/Home:** Contém o componente responsável pela página inicial de login.

- **src/components/Register:** Contém o componente para a página de registro de novos usuários.

- **src/firebaseConnection:** Contém a configuração e a inicialização do Firebase, bem como as instâncias do banco de dados e autenticação.

## Configuração do Firebase
Para usar este aplicativo, você precisará configurar seu próprio projeto no Firebase e substituir as configurações no arquivo firebaseConnection.js com as credenciais do seu projeto.

Este projeto é uma base simples que pode ser expandida com mais funcionalidades, autenticação aprimorada e estilos. Sinta-se à vontade para adaptá-lo de acordo com suas necessidades.
