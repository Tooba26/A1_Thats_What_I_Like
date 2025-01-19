from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import spacy

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow CORS for React frontend

# Load SpaCy language model
nlp = spacy.load("en_core_web_sm")

# Load the corpus (e.g., Brown Corpus sentences)
from nltk.corpus import brown
import nltk
nltk.download('brown')
corpus = [" ".join(sent) for sent in brown.sents()[:1000]]# Use the first 1000 sentences

# Process the corpus with SpaCy
tokenized_corpus = [nlp(doc) for doc in corpus]

def get_vector(text):
    """Get the vector representation of a text using SpaCy embeddings."""
    doc = nlp(text)
    return np.mean([token.vector for token in doc if token.has_vector], axis=0)

@app.route("/search", methods=["POST"])
@app.route("/search", methods=["POST"])
def search():
    """Compute similarity and return the top 10 results."""
    data = request.json
    query = data.get("query", "")

    if not query:
        return jsonify({"error": "Query cannot be empty"}), 400

    # Compute query vector
    query_vector = get_vector(query)

    # Compute dot product scores
    scores = [np.dot(query_vector, get_vector(doc.text)) for doc in tokenized_corpus]
    top_indices = np.argsort(scores)[::-1][:10]

    # Convert scores to float and return top results
    results = [{"text": corpus[i], "score": float(scores[i])} for i in top_indices]
    return jsonify({"query": query, "results": results})


if __name__ == "__main__":
    app.run(debug=True)
