FROM python:3.11-slim

RUN apt-get update && apt-get install -y gcc libpq-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY pyproject.toml ./
COPY app/ ./app/
RUN pip install -e ".[dev]"

EXPOSE 8123

CMD ["uvicorn", "app.api.main:app", "--host", "0.0.0.0", "--port", "8123"]
