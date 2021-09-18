import http.client
import json

conn = http.client.HTTPSConnection("localhost", 3000)
payload = json.dumps({
  "usuario": "digao 02",
  "Cliente": "Rodrigo",
  "pet": "sonic",
  "servico": "tosa",
  "status": "agendado",
  "observacoes": "bonzinho"
})
headers = {
  'Content-Type': 'application/json'
}
conn.request("POST", "/atendimentos", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))