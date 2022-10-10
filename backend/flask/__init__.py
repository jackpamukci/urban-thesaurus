from tkinter import Y
from flask import Flask
from thesaurus import thesa
from urban import urba

app = Flask(__name__)


@app.route('/')
def hello():
    return 'welcome to the urban thesaurus api'


@app.route('/<search>')
def find(search):
    # x = thesa(search)
    # lisa.append(urba(x[0]))
    # lisa.append(urba(x[1]))
    # lisa.append(urba(x[2]))

    # y = urba(search)

    default = {

        "search term": search,
        "urban terms": urba(search),

        "synonyms": thesa(search),

    }

    # lisa.append()

    # for word in x:
    #     che = urba(word)
    #     if(che['list']):
    #         lisa.append(urba(word)['list'][0])
    #         lisa.append(urba(word)['list'][1])
    #         lisa.append(urba(word)['list'][2])

    return default


if __name__ == '__main__':
    app.run(debug=True)
