FROM openjdk:17-jdk-alpine
ENV DBS_HOST=host \
     DBS_NAME=dbname \
     DBS_USERNAME=username \
     DBS_PASSWORD=password \
     PROFILE=profile
ARG JAR_FILE=targer/*.jar
COPY ./target/jotter-server-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]