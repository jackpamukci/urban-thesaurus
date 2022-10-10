# from tkinter import Y
from flask import Flask
from thesaurus import thesa, justthewords
from urban import urba, allUrbDef

app = Flask(__name__)


@app.route('/')
def hello():
    return 'welcome to the urban thesaurus api'

# Route for the home screen, where the initial search
# term is inputted


@app.route('/homepage/<search>')
def thesaurus(search):
    return {
        'thesaurus': justthewords(search),
        'urbdefinition': allUrbDef(search)
    }

# Route for clicking on a term on the second page,
# definition will be shown on the third page


@app.route('/secondpage/<search>')
def definitions(search):
    return allUrbDef(search)


@app.route('/default/<search>')
def find(search):
    default = {

        "search term": search,
        "urban terms": urba(search),

        "synonyms": thesa(search),

    }

    return default


if __name__ == '__main__':
    app.run(debug=True)
