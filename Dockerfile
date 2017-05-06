FROM mflo999/pi-run

# install the app
COPY dist.tar.gz /tmp/dist.tar.gz
RUN mkdir /pi-skeleton
RUN tar -zxf /tmp/dist.tar.gz -C /pi-skeleton

# start the app
WORKDIR /pi-skeleton
ENTRYPOINT ["/bin/bash", "./server.sh"]
