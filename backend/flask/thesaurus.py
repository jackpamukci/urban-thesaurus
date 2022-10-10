import requests
from urban import urba


def thesa(search):

    url = "https://thesaurus-by-api-ninjas.p.rapidapi.com/v1/thesaurus"

    querystring = {"word": search}

    headers = {
        "X-RapidAPI-Key": "5eedf61a07mshe1107211ee7abd9p1f2468jsn27a6a95e8d4f",
        "X-RapidAPI-Host": "thesaurus-by-api-ninjas.p.rapidapi.com"
    }

    response = requests.request(
        "GET", url, headers=headers, params=querystring)

    x = response.json()

    x = list(x['synonyms'])

    defa = {}

    for word in x[0:5]:
        # if (urba(word)):
        defa[f'{word}'] = urba(word)

    return {k: v for k, v in defa.items() if v}
