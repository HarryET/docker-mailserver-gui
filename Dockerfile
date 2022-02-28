FROM hayd/alpine-deno:latest

EXPOSE 8000

WORKDIR /usr/app

COPY . .

RUN deno cache --unstable main.ts

CMD [ "deno", "run", "--allow-net", "--allow-env", "--allow-read", "main.ts" ]