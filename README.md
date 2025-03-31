# Upload de Arquivos PDF para Vercel (Node.js + Express + Multer)

Este é um projeto simples e funcional para fazer upload de arquivos PDF usando **Node.js + Multer**, pronto para ser hospedado na **Vercel**.

## 🚀 Funcionalidades

- Upload de arquivos PDF com limite de 10MB
- Interface amigável com Tailwind CSS
- API `/api/upload` usando Serverless Functions da Vercel
- Link direto para o PDF enviado:
  ```
  https://seuprojeto.vercel.app/uploads/arquivo.pdf
  ```

---

## 🛠️ Como usar

### 1. Faça o download ou clone este repositório

```bash
git clone https://github.com/seu-usuario/upload-pdf-vercel.git
cd upload-pdf-vercel
```

### 2. Suba o projeto no GitHub

Crie um novo repositório no GitHub e envie os arquivos para lá.

### 3. Importe para a Vercel

Acesse: [https://vercel.com/import](https://vercel.com/import)  
E importe o repositório que você acabou de subir.

### 4. Instale as dependências

A Vercel detectará automaticamente o `package.json` com a dependência do **Multer** e instalará tudo corretamente.

---

## 📂 Estrutura

```
/
├── api/
│   └── upload.js     # API para upload dos arquivos
├── public/
│   └── uploads/      # Onde os arquivos são salvos (criada automaticamente)
├── index.html        # Formulário de upload
├── package.json      # Dependências (Multer)
```

---

## ❗ Observações

- Apenas arquivos PDF são permitidos.
- O nome do arquivo é convertido para algo único usando timestamp.
- A pasta `uploads/` fica pública via `/public/uploads`.

---

Feito com ❤️ para facilitar uploads rápidos e públicos de arquivos PDF.
