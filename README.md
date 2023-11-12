**Aplicação de Chat em Laravel 10 com WebSockets**

## Visão Geral:

Esta aplicação Laravel 10 apresenta uma funcionalidade de chat em tempo real usando WebSockets, alimentada por `beyondcode/laravel-websockets` e `Echo` para o frontend. A aplicação aproveita as capacidades de transmissão ao vivo do Laravel para permitir uma comunicação contínua entre o servidor e os clientes.

### Componentes Principais:

1. **Configuração de Transmissão ao Vivo:**
   
   A aplicação está configurada para usar o Laravel Echo e o Pusher para transmitir eventos. O `BroadcastServiceProvider` é utilizado para configurar a transmissão.

2. **Tratamento de Eventos em Tempo Real:**
   
   O evento `App\Events\Chat\SendMessage` é implementado para capturar mensagens enviadas pelos usuários. Este evento é transmitido para o servidor WebSocket e, posteriormente, para os clientes conectados.

3. **Servidor WebSockets:**
   
   O pacote `beyondcode/laravel-websockets` alimenta o servidor WebSocket. Ele permite o manuseio eficiente da comunicação em tempo real, garantindo uma experiência de chat fluida.

4. **Frontend Vue JS:**
   
   O frontend é desenvolvido usando o Vue JS para criar uma interface de chat interativa e responsiva. O componente Vue se comunica com o servidor usando o Laravel Echo para atualizar mensagens em tempo real.

5. **MessageController:**
   
   O `MessageController` lida com a lógica para listar e enviar mensagens. Ele orquestra o fluxo de dados entre o servidor e os componentes Vue.

## Uso:

1. **Instalar Dependências:**
   
```bash
   composer install
   npm install
```

2. **Configuração do Ambiente:**
   
   Configure as variáveis de ambiente, incluindo as credenciais do Pusher além das variáveis de conexão com o banco de dados, no arquivo `.env`.

```env
    BROADCAST_DRIVER=pusher

    PUSHER_APP_ID=myapppid
    PUSHER_APP_KEY=myappkey
    PUSHER_APP_SECRET=myappsecret
    PUSHER_HOST="127.0.0.1"
    PUSHER_PORT=6001
    PUSHER_SCHEME=http
    PUSHER_APP_CLUSTER=mt1
```

3. **Migração do Banco de Dados:**
   
```bash
   php artisan migrate
```

4. **Executar Servidor WebSockets:**
   
```bash
   php artisan websockets:serve
```

5. **Compilar Ativos:**
   
```bash
   npm run dev
```

6. **Iniciar Servidor de Desenvolvimento:** (opcional, ignore caso esteja utilizando outro servidor web)
   
```bash
   php artisan serve
```

7. **Acessar a Aplicação:** (caso utilize o `artisan serve`)
   
   Visite `http://127.0.0.1:8000` no seu navegador e aproveite a funcionalidade de chat em tempo real.

## Referências:

- Documentação Laravel WebSockets: [Beyond Code](https://beyondco.de/docs/laravel-websockets/getting-started/installation)
- Instalação do Lado do Cliente com Laravel Echo: [Laravel Documentation](https://laravel.com/docs/10.x/broadcasting#client-side-installation)

**Notas Adicionais:**

- Ajuste a configuração do Pusher no arquivo `.env` de acordo com os detalhes da sua conta do Pusher.
- Certifique-se de que seu driver de transmissão (por exemplo, Pusher) está configurado corretamente e acessível.

Sinta-se à vontade para explorar e estender esta aplicação de chat Laravel 10 para atender às necessidades do seu projeto. Boa codificação!
