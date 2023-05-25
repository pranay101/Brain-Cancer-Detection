import tensorflow as tf

# Define the path to the saved model file
model_path = './models/resnet_model_50epochImrpoved.h5'

# Load the model
model = tf.keras.models.load_model(model_path)


# Assuming you have a testing dataset stored in a directory
test_data_dir = "C:/Users/Pranay Prajapati/Downloads/archive/Testing"

image_height = 512
image_width = 512
batch_size = 4

# Use an image data generator to preprocess and load the testing images
test_data_generator = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1./255)
test_data = test_data_generator.flow_from_directory(
    test_data_dir,
    target_size=(image_height, image_width),
    batch_size=batch_size,
    class_mode='categorical',
    shuffle=False
)

# Evaluate the model on the testing dataset
evaluation = model.evaluate(test_data)
print('Test Loss:', evaluation[0])
print('Test Accuracy:', evaluation[1])

