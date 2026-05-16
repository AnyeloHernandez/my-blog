---
title: Optimizing Docker images
date: "2026-05-15"
autor: Anyelo Hernández
summary: Sometimes we build big Docker images that doesn't require that much of resources. This is a little guide on how to optimize them :)
image: https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg
tags: [docker, information]
---

# Optimizing Docker images
Docker is a good tool when we want portability and reusability, it's easy to use and to manage. But we have to take in consideration how to optimize images because we could end with an image that is: too big, insecure and slow.

Take in consideration which dependencies you use, which files you ignore and don't end with a Docker image with the .env file loaded, lol.

## .dockerignore
Ahh, yes, we can ignore files too! It works similar as .gitignore. Create it on your working root directory.

```
# .dockerignore
.env
.env.*
*.log
node_modules/
.git/
__pycache__/
```

And now, if you do something like `COPY ...` inside the Dockerfile, these files inside the .dockerignore will be _ignored_.

## Multi-stage builds
We use multi-stage builds so in one stage, we set up the build environment: the toolchain, libraries like node_modules, source code, tests, config files and then we compile the binaries.

Once, the binary is compiled, we enter the runtime stage. We setup another base image and copy the output binary produced by the build stage.

![multi-stage-build](https://raw.githubusercontent.com/AnyeloHernandez/my-blog/refs/heads/main/myblog/public/assets/multi-stage-build.png)
### Go example
```
FROM golang:1.25-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go mod tidy

RUN CGO_ENABLED=0 GOOS=linux go build -o api1 main.go

FROM alpine:latest

WORKDIR /app

# We copy the binary from the builder stage.
COPY --from=builder /app/api1 ./

EXPOSE 8082

CMD ["./api1"]
```

## Rust example
```
FROM rust:1.95-alpine3.23 AS builder

# Dependencies for building Rust apps.
RUN apk add --no-cache musl-dev pkgconfig openssl-dev openssl-libs-static

WORKDIR /app

COPY Cargo.toml Cargo.lock ./

# Create src dummy to compile dependencies and cache them.
RUN mkdir src && echo "fn main() {}" > src/main.rs && \
    cargo build --release && \
    rm -rf src target/release/deps/radar*

COPY src ./src

# Compile
RUN cargo build --release && \
    strip target/release/radar-api

FROM alpine:3.20

RUN apk add --no-cache ca-certificates

# Non-root user for security.
RUN addgroup -S app && adduser -S app -G app
USER app

COPY --from=builder /app/target/release/radar-api /usr/local/bin/radar-api

EXPOSE 3033

ENTRYPOINT ["/usr/local/bin/radar-api"]
```