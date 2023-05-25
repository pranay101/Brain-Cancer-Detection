import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Set the path to the dataset
dataset_path = "C:/Users/Pranay Prajapati/Downloads/Compressed/Dataset"
# Create a test data generator
test_datagen = ImageDataGenerator(rescale=1./255)

test_generator = test_datagen.flow_from_directory(
    dataset_path + '/Testing',
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical',
    shuffle=False
)

# Load the saved DenseNet model
model = load_model('./models/densenet_model_50epoch.h5')

# Evaluate the model on the testing dataset
scores = model.evaluate(test_generator)

# Extract the loss and accuracy from the scores
test_loss = scores[0]
test_accuracy = scores[1]

print("Test Loss:", test_loss)
print("Test Accuracy:", test_accuracy)
