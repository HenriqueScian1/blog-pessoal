# 🚀 Projeto - Blog Pessoal Simples (Next.js App Router)

📌 **Projeto Individual**  
Este projeto consiste na criação de um **blog pessoal minimalista** usando **Next.js 15** com **App Router**, explorando os conceitos fundamentais de **Server Components** e **Client Components**.

---

## 📝 Conceito da Aplicação

Um blog simples com funcionalidades essenciais:

1. **Página inicial** – Lista de posts do blog (**Server Component**)  
2. **Posts individuais** – Páginas dinâmicas para cada post  
3. **Página Sobre** – Página estática com informações pessoais  
4. **Navegação global** – Layout compartilhado entre todas as páginas  
5. **Botão de curtir** – Interatividade via **Client Component**  

---

## ⚡ Conceitos Next.js que serão praticados

### 01 - App Router Structure
- Roteamento baseado em sistema de arquivos  
- Páginas definidas por `page.tsx`  
- Layouts com `layout.tsx`  
- Rotas dinâmicas com `[slug]`  

### 02 - Server Components (Padrão)
- Executam no servidor  
- Acesso direto a APIs e banco de dados  
- Melhor performance  
- Nenhum JavaScript enviado ao cliente  

### 03 - Client Components
- Componentes interativos com estado  
- Executam no navegador  
- Necessários para `useState`, `useEffect` e eventos  
- Declarados com `"use client"`  

### 04 - Layouts e Templates
- Layout compartilhado entre páginas  
- Navegação persistente  
- Estrutura HTML consistente  

### 05 - Roteamento Dinâmico
- Páginas baseadas em parâmetros  
- Geração de URLs dinâmicas  
- Acesso aos parâmetros da URL  

---

## 📂 Estrutura da Aplicação

```bash
app/
├── layout.tsx        # Layout global com navegação
├── page.tsx          # Página inicial (lista de posts)
├── about/
│   └── page.tsx      # Página sobre
├── posts/
│   └── [slug]/
│       └── page.tsx  # Post individual dinâmico
└── components/
    ├── PostCard.tsx  # Card do post (Server Component)
    └── LikeButton.tsx # Botão curtir (Client Component)
