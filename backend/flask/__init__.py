# from tkinter import Y
from flask import Flask
from thesaurus import thesa
from urban import urba

app = Flask(__name__)


@app.route('/')
def hello():
    return 'welcome to the urban thesaurus api'


@app.route('/<search>')
def find(search):
    default = {

        "search term": search,
        "urban terms": urba(search),

        "synonyms": thesa(search),

    }

    return default


if __name__ == '__main__':
    app.run(debug=True)
