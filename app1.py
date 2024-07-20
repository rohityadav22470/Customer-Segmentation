# Importing necessary libraries
from flask import Flask, render_template, request
import pickle
import matplotlib.pyplot as plt
import io
import base64

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    model_choice = request.radios['model_choice']

    if model_choice == 'Retail oriented Customer segmentation':
        model_path = 'retail_oriented.pkl'
    elif model_choice == 'Product oriented Customer segmentation':
        model_path = 'Product_oriented.pkl'

    # Load the model from the file
    with open(model_path, 'rb') as file:
        model = pickle.load(file)


    # Generate the appropriate plot based on the model_choice
    img = io.BytesIO()
    if model_choice == 'Retail oriented Customer segmentation':
        # Generate a GMM cluster graph for option1
        plt.figure()
        plt.scatter()
        plt.title('GMM Cluster Graph')
        plt.savefig(img, format='png')
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode()
        return render_template('result.html')

    elif model_choice == 'Product oriented Customer segmentation':
        # Generate a bar chart for option2
        plt.figure()
        plt.bar(range(len(prediction)), prediction)
        plt.title('Bar Chart')

    plt.savefig(img, format='png')
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode()

    return render_template('result.html')

if __name__ == '__main__':
    app.run(debug=True)
