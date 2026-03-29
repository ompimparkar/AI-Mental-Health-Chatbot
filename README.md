# 🧠 Sahayak: AI-Powered Mental Health Chatbot

**Sahayak** is an empathetic digital assistant designed to provide mental health support. Built during my 2nd year of AIML Engineering at Mumbai University, it uses **Deep Learning** and **Natural Language Processing (NLP)** to understand and respond to user emotions.

---

### 🚀 Key Features
- **Neural Network Architecture:** Custom-trained model using **PyTorch** for intent recognition.
- **NLP Pipeline:** Implementation of Tokenization, Stemming, and Bag-of-Words for text processing.
- **Web Interface:** A clean, responsive UI built with **Flask**, HTML, and CSS.
- **Self-Trained:** Uses a custom dataset (`intents.json`) to provide specific mental wellness guidance.

---

### 🛠️ Tech Stack
- **Language:** Python 🐍
- **AI Frameworks:** PyTorch, NLTK
- **Web Backend:** Flask
- **Frontend:** HTML5, CSS3, JavaScript

---

### 📂 Project Structure
- `app.py`: Flask backend to handle web requests.
- `chat.py`: Response generation logic.
- `train.py`: Script to train the Neural Network model.
- `model.py`: Defines the Neural Network architecture.
- `nlp_utils.py`: Text preprocessing functions.
- `intents.json`: The knowledge base for the chatbot.

---

### 🏃 How to Run Locally
1. Clone the repository.
2. Install dependencies: `pip install -r requirements.txt`
3. Run the application: `python app.py`
4. Open `http://127.0.0.1:5000` in your browser.
