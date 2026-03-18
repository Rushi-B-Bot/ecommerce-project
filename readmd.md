backend/
│
├── app/
│   │
│   ├── main.py
│   │
│   ├── core/
│   │     ├── config.py
│   │     ├── security.py
│   │
│   ├── db/
│   │     ├── database.py
│   │     ├── redis.py
│   │
│   ├── models/
│   │     ├── user_model.py
│   │     ├── product_model.py
│   │
│   ├── schemas/
│   │     ├── user_schema.py
│   │     ├── product_schema.py
│   │
│   ├── services/
│   │     ├── auth_service.py
│   │     ├── product_service.py
│   │
│   ├── routers/
│   │     ├── auth_router.py
│   │     ├── product_router.py
│   │
│   └── utils/
│         ├── hashing.py
│
└── requirements.txt


-- backednd start in the venvv:
1) source venv/bin/activate