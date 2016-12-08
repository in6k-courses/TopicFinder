#!/bin/bash

echo "mvn package"
mvn package

echo "java -jar /api-server/target/apiserver-1.0-SNAPSHOT.jar"
java -jar /api-server/target/apiserver-1.0-SNAPSHOT.jar