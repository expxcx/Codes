#Para verificar o cep eu utilizei a biblioteca PyCEPCorreios (https://pypi.org/project/pycep-correios/)
#Já para obter a temperatura baseada na cidade do cep usei OpenWeather(https://openweathermap.org/current)

import requests
from pycep_correios import get_address_from_cep, WebService

def getTemperature(CEP):
    endereco = get_address_from_cep(CEP, webservice=WebService.APICEP)
    cidade = endereco["cidade"]
    
    API_key = "64ec0784561718d39bbbe76e14e2465d"
    API_link = (f"https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={API_key}&lang=pt_br&units=metric")

    API_call = requests.get(API_link)
    API_response = API_call.json()
    temperatura = API_response["main"]["temp"]
    print(f"Temperatura em {cidade}: {temperatura} C°")

getTemperature("57042610")