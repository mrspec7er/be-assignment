FROM postgres:16-bookworm

WORKDIR /database

ENV POSTGRES_USER postgres

ENV POSTGRES_PASSWORD mrc201

COPY init.sql /docker-entrypoint-initdb.d/

VOLUME /var/lib/postgresql/data

EXPOSE 5432

CMD [ "postgres" ]