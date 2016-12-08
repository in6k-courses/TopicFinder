FROM java:8
EXPOSE 8080
EXPOSE 3306
ADD /target/apiserver-1.0-SNAPSHOT.jar apiserver-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","apiserver-1.0-SNAPSHOT.jar"]