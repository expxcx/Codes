#Para buscar o html da URL informada e conseguir ter acesso a tag meta e os atributos name e content usei a bibioteca BeautifulSoup (https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
import sys
import json
import requests
from bs4 import BeautifulSoup

def getMetas(URL):
    pagina_html = requests.get(URL)
    soup = BeautifulSoup(pagina_html.text,"html.parser")
    for tag in soup.find_all("meta"):
        if(tag.get("name")!= None and tag.get("content")!= None):
            nome_Meta = tag.get("name")
            content_Meta = tag.get("content")
            dicionario = {
               "meta name": nome_Meta,
               "meta content": content_Meta
            }
            print(json.dumps(dicionario), sep="", end="", file=sys.stdout)

getMetas("https://www.google.com/")