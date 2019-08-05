# product-api - API de produtos com Nodejs

Operações HTTP atendidas: **GET, POST, PUT e DELETE.**

#### CRUD 
ACTION | RESULT | STATUS CODE
----- | ---- | ----
`GET /api/products` | Retorna uma lista com todos os produtos |200
`GET /api/products/:id` | Retorna um produto especifico  | 200
`POST /api/products` | Insere um novo produto  | 200
`PUT /api/products/:id` | Atualiza um produto especifico | 200
`DELETE /api/products/:id` | Remove um produto| 200

> Os dados são retornados no formato json.
Exemplo do formato retornado:
`GET /api/tasks/5915e7b1291d8a147874854e`

```json
{
	"_id": "5d47c187672aac0cc4be615f",
	"title": "Computador",
	"description": "Computador para uso pessoal",
	"url": "www.computador.com.br",
	"createdAt": "2019-08-05T05:41:27.248Z",
	"__v": 0
}
```