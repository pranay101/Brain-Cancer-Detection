# Brain Tumor Classification Web App

This is a web application for classifying brain tumor images using deep learning models. The application provides an interface to upload an MRI image and predicts the type of brain tumor present in the image. The two supported models are ResNet and DenseNet.

## Features

- Classification of brain tumor images using ResNet and DenseNet models.
- User-friendly web interface for uploading images.
- Real-time prediction of the tumor type.
- Model training and evaluation on a labeled dataset.
- Easy deployment on a Flask server.

## Prerequisites

- Python 3.7 or higher
- TensorFlow 2.x
- Flask
- Numpy
- PIL (Python Imaging Library)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/pranay101/Brain-Cancer-Detection.git
   cd brain-tumor-classification-web-app
   ```

2. Install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

3. Download the dataset (brain tumor images) and place it in the appropriate location:
  - 'https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset'
  - 'https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri'

4. Train the model (optional):

   - If you want to train the model on your dataset, run the training script:

     ```
     python train.py --dataset_path <path_to_dataset>
     ```
    - Download Model: 'https://drive.google.com/drive/folders/1Ae9-xkhf1QBXJz8m0OWYuzepXBiqbtjG?usp=sharing'
   - Note: The training script is configured to train the ResNet model by default. You can modify the script to train the DenseNet model if desired.

5. Start the Flask server:

   ```
   python app.py
   ```
6. Open New Terminal cd in to Frontend and run ```npm start```

7. Access the web application:

   Open your web browser and navigate to `http://localhost:3000`

## Usage

1. Upload an MRI image:

   - Click on the "Choose File" button and select an MRI image of a brain tumor.

2. Click the "Predict" button:

   - The web application will process the uploaded image and display the predicted tumor type.

3. Repeat the process:

   - You can upload and classify multiple images using the web application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The dataset used in this project is sourced from [Brain Tumor Classification MRI](https://www.kaggle.com/navoneel/brain-mri-images-for-brain-tumor-detection) on Kaggle.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of the application, please submit a pull request.

## Authors

- Pranay Prajapati -  Backend
- Srishti Nimje - Frontend

## Contact

For any inquiries or questions, please contact `pranayprajapati101@gmail.com`.

## Suggested Project Name

"BrainTumorClassifierWeb"