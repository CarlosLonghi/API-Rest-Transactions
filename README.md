## Start
- Instalação
```bash
    npm install
```

- Comando para execultar as migrações e criar o Banco de Dados.
```bash
    npm run knex -- migrate:latest
```

- Comando para execultar a API
```bash
    npm run run dev
```

# RF (Requisitos Funcionais)

- [X] O usuário deve poder criar uma nova transação;
- [X] O usuário deve poder obter um resumo da sua conta;
- [X] O usuário deve poder listar todas as transações que já ocorreram;
- [X] O usuário deve poder visualizar uma transação única;

# RN (Regra de Negócio)

- [X] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá;
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] O Usuário só pode visualizar transações o qual ele realizou;