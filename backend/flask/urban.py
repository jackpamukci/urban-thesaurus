
import requests


def allUrbDef(search):
    url = "https://urban-dictionary7.p.rapidapi.com/v0/define"

    querystring = {"term": search}

    headers = {
        "X-RapidAPI-Key": "5eedf61a07mshe1107211ee7abd9p1f2468jsn27a6a95e8d4f",
        "X-RapidAPI-Host": "urban-dictionary7.p.rapidapi.com"
    }

    response = requests.request(
        "GET", url, headers=headers, params=querystring)

    x = response.json()

    return x


def urba(search):

    url = "https://urban-dictionary7.p.rapidapi.com/v0/define"

    querystring = {"term": search}

    headers = {
        "X-RapidAPI-Key": "5eedf61a07mshe1107211ee7abd9p1f2468jsn27a6a95e8d4f",
        "X-RapidAPI-Host": "urban-dictionary7.p.rapidapi.com"
    }

    response = requests.request(
        "GET", url, headers=headers, params=querystring)

    x = response.json()

    defa = {}

    count = 0
    for y in x['list']:
        if (y):
            defa[count] = y
            count += 1
        if count > 2:
            break

    # lisa = {
    # 	0: x['list'][0],
    # 	1: x['list'][1],
    # 	2: x['list'][2]
    # }

    return defa
