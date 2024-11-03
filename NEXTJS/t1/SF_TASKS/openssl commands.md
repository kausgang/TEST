```shell
openssl genrsa -out private.key 2048
openssl req -new -x509 -key private.key -out public.pem -days 365
```

