import nltk
import numpy as np
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('omw-1.4')
lemmatizer=WordNetLemmatizer()
stop_words=set(stopwords.words('english'))
def clean_text(text):
    tokens=word_tokenize(text.lower())
    cleaned_tokens=[lemmatizer.lemmatize(w) for w in tokens if w not in stop_words and w.isalnum()]
    return cleaned_tokens
def bag_of_words(tokenized_sentence,all_words):
    sentence_words=[lemmatizer.lemmatize(w.lower()) for w in tokenized_sentence]
    bag=np.zeros(len(all_words),"float32")
    for idx, w in enumerate(all_words):
        if w in sentence_words:
            bag[idx]=1.0
    return bag
if __name__=="__main__":
   vocab=["hi","hello","how","you","bye"]
   sentence=["hello","how","are","you"]
   result=bag_of_words(sentence,vocab)
   print("Bag of Words Result:", result)