FROM mysql:5.7

#ADD data.sql /docker-entrypoint-initdb.d/00-import-data.sql
ENV MYSQL_ROOT_PASSWORD 12345678
ENV MYSQL_DATABASE TopicFinder

EXPOSE 3306

RUN /entrypoint.sh
