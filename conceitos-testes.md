# Testes automatizados

Que a nossa aplicação continue funcionando independente do número de novasfuncionalidades e do número de devs no time

1. Testes unitários (TDD)

Testam funcionalidades específicas da nossa aplicação (precisam ser funções puras).

JAMAIS: Chamada a uma API e efeito colateral.

2. Testes de integração

Testam uma funcionalidade completa, passando por várias camadas de aplicação.

Ex: Route -> Controller -> Serviço -> Repositório -> ...

3. Testes E2E (mais para React e React Native)

Testes que simulam a ação do ususário dentro da nossa aplicação.

ex:
- clique no input email
- preencha bruno@gmail.com
- clique no input de senha
- preencha 123456
- clique no botão "Logar"
- espero que a página tenha enviado o usuário para o dashboard

# TDD (Test Driven Development)

- Quando o usuário se cadastrar na aplicação, ele deve receber um email de boas-vindas;
