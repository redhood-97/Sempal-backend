


from flask import Flask
from flask import render_template
from flask_socketio import SocketIO, emit
import time
import monk
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret !'
socketio = SocketIO(app)

@app.route('/')  # for some reason, it's not rendering the HTML page
def index():
	return render_template('index.html')

@socketio.on('data_stream', namespace = '/watch')                          # Decorator to catch an event called "my event":	
def push_data():     
	voltage_data = 220
	print voltage_data
	emit('voltage_response', {'voltage_data' : voltage_data }, broadcast = True)
	time.sleep(1000)
socketio.start_background_task(target=push_data)	
                                       		           
if __name__ == '__main__':
    socketio.run(app, host='127.0.0.1', port = 8080, debug = True)
