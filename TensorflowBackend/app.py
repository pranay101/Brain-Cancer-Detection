from flask import Flask, request, jsonify
from PIL import Image
import tensorflow as tf
import numpy as np
from flask_cors import CORS
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)
import os
from werkzeug.utils import secure_filename
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.densenet import preprocess_input, decode_predictions


# Load the trained model
resnet = tf.keras.models.load_model('./models/resnet50.h5')
denseNet = tf.keras.models.load_model('./models/densenet121.h5')
# class_names = ['None', 'Meningioma', 'Glioma', 'Pitutary']
class_names = ["GLioma","Meningioma","None","Pitutary"]
UPLOAD_FOLDER = './static/images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg']



# Define the image preprocessing function
def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image

# Define the predictRes route
@app.route('/', methods=['GET'])
def home():
    return "<h1>This is brain cancer home page</h1>"


@app.route('/predictResnet', methods=['POST'])
def predictResnet():
    f = request.files["file"]
    print(request.files)
    filename = str(f.filename)
    if filename!='':
        ext = filename.split(".")
        
        if ext[1] in ALLOWED_EXTENSIONS:
            filename = secure_filename(f.filename)

            f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # with open(os.path.join(app.config['UPLOAD_FOLDER'], filename),'rb') as img:
            image_path =os.path.join(app.config['UPLOAD_FOLDER'], filename)

            img = image.load_img(image_path, target_size=(224, 224))
            # Preprocess the image
            img = preprocess_image(img)
            
            # Make a prediction using the resnet
            prediction = resnet.predict(img)
            predicted_class_index = np.argmax(prediction)
            predicted_class = class_names[predicted_class_index]
            print(predicted_class)
            # Return the prediction as JSON
            return jsonify({'result': predicted_class})
        

@app.route('/predictDenseNet', methods=['POST'])
def predictDenseNet():
    f = request.files["file"]
    print(request.files)
    filename = str(f.filename)
    if filename!='':
        ext = filename.split(".")
        
        if ext[1] in ALLOWED_EXTENSIONS:
            filename = secure_filename(f.filename)

            f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # with open(os.path.join(app.config['UPLOAD_FOLDER'], filename),'rb') as img:
            image_path =os.path.join(app.config['UPLOAD_FOLDER'], filename)

            img = image.load_img(image_path, target_size=(224, 224))
            # Preprocess the image
            img = preprocess_image(img)
            
            # Make a prediction using the resnet
            prediction = resnet.predict(img)
            predicted_class_index = np.argmax(prediction)
            predicted_class = class_names[predicted_class_index]
            print(predicted_class)
            # Return the prediction as JSON
            return jsonify({'result': predicted_class})




if __name__ == '__main__':
    app.run(debug=True)
