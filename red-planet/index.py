import logging, uuid
from logging.handlers import RotatingFileHandler
from flask import Flask
from flask_api import status


LOG_FORMAT = '[%(asctime)s %(pathname)s:%(lineno)d] %(levelname)s - %(message)s'
LOG_FILE = 'logs/app.log'
HOST = '0.0.0.0'
PORT = 8080

app = Flask(__name__)

@app.route("/red")
def red():
    app.logger.info('id: %s, %s' %(uuid.uuid1(), {
        'path': '/red'
    }))
    return 'deadeye-duck'

@app.route("/error")
def error():
    app.logger.error('id: %s, %s' %(uuid.uuid1(), {
        'path': '/error'
    }))
    return 'error', status.HTTP_500_INTERNAL_SERVER_ERROR

if __name__ == "__main__":
    print('server run at %d' % PORT)
    formatter = logging.Formatter(LOG_FORMAT)
    handler = RotatingFileHandler(LOG_FILE, maxBytes=10000000,
            backupCount=5)
    handler.setFormatter(formatter)
    handler.setLevel(logging.DEBUG)
    app.logger.addHandler(handler)
    app.logger.setLevel(logging.DEBUG)
    app.run(host=HOST, port=PORT)
