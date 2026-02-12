FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY bun.lockb ./
RUN npm ci
COPY . .
RUN npm run build
