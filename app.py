from flask import Flask, request, render_template, send_file
import pickle
import matplotlib.pyplot as plt
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    if file and file.filename.endswith('.pkl'):
        # Load the pickle file
        obj = pickle.load(file)
        
        # Check if the object is a matplotlib figure or a networkx graph
        if isinstance(obj, plt.Figure):
            return serve_figure(obj)
def serve_figure(fig):
    # Save the figure to a BytesIO object
    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    return send_file(buf, mimetype='image/png', as_attachment=True, attachment_filename='figure.png')

# def serve_graph(graph):
#     # Create a matplotlib figure from the networkx graph
#     fig, ax = plt.subplots()
#     nx.draw(graph, with_labels=True, ax=ax)
    
    # Save the figure to a BytesIO object
    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    plt.close(fig)  # Close the figure to free up memory
    return send_file(buf, mimetype='image/png', as_attachment=True, attachment_filename='graph.png')

if __name__ == '__main__':
    app.run(debug=True)
