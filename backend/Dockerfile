#usa la imagen ligera de python
from python:3.11-slim

#evitamos que python genere archivos .pyc al ejecutar
ENV PYTHONDONTWRITEBYTECODE=1
#evitamos que python escriba buffer en archivos stdout y stderr
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Instalamos dependencias del sistema para PostgreSql
RUN apt-get update && apt-get install -y libpq-dev gcc


# Instalamos las libreiras de Python
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

#copiamos el resto del codigo
copy . .

#probar si levanta el servidor
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]