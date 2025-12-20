FROM nginx:alpine

LABEL org.opencontainers.image.source=https://github.com/ccxlv/ccxlv.dev

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
