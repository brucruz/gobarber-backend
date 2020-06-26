# Recuperação de senha

**RF**

(x) O usuário deve poder recuperar sua senha informando o seu e-mail;
(x) O usuário deve receber um e-mail com instruções de recuperação de senha;
(x) O usuário deve poder resetar sua senha;

**RNF**

(x) Utilizar Etheral para testar envios em ambiente de desenvolvimento (https://ethereal.email);
( ) Utilizar Amazon SES para envios em produção;
( ) O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

(x) O link do email deve poder identificar o usuário para que a página contenha somente os inputs de senha
(x) O link enviado por email para resetar senha, deve expirar em 2h;
( ) O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

(x) O usuário deve poder atualizar seu nome, email e senha;

**RN**

(x) O usuário não pode alterar seu email para um email já utilizado;
(x) Para atualizar sua senha, o usuário deve informar a senha antiga;
( ) O usuário precisa confirmar a nova senha ao resetar sua senha;

# Painel do prestador

( ) O usuário deve poder listar seus agendamentos de um dia específico;
( ) O prestador deve receber uma notificação sempre que houver um novo agendamento;
( ) O prestador deve poder visualizar as notificações não lidas;

**RNF**

( ) Os agendamentos do prestador no dia devem ser armazenados em cache;
( ) As notificações do prestador devem ser armazenada no MongoDB;
( ) As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

( ) A notificação deve ter um status de lida ou não-lida, para que o prestador possa controlar

# Agendamento de serviços

**RF**

( ) O usuário deve poder listar todos os prestadores de serviço cadastrados;
( ) O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
( ) O usuário deve poder listar os horários disponíveis em um dia específico de um prrestador;
( ) O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

( ) A listagem de prestadores deve ser armazenada em cache;

**RN**

(x) Cada agendamento deve durar 1h exatamente;
(x) Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
(x) O usuário não pode agendar em um horário já ocupado;
(x) O usuário não pode agendar em um horário já passado;
(x) O usuário não pode agendar serviços consigo mesmo;
