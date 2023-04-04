FROM python:3.8

WORKDIR /app/api

RUN pip install --upgrade pip
COPY ./requirements.txt /app/api/requirements.txt
RUN pip install -r requirements.txt

COPY . /app/api
RUN chmod a+x boot.sh

ENV FLASK_APP testnet.py

EXPOSE 5005
ENTRYPOINT ["./boot.sh"]
