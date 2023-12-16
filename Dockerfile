FROM oven/bun:latest

RUN apt update -y && apt upgrade -y
RUN apt install git -y

WORKDIR /workspace
COPY . .

RUN chmod +x .devcontainer/postCreate.sh