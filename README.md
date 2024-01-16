# Currículo Minimalista

Um aplicativo web simples que gera um currículo minimalista com um layout amigável para impressão.

Built with Next.js and shadcn/ui, deployed on Vercel.

# Recursos

- A configuração leva apenas alguns minutos [arquivo de configuração único](./src/data/resume-data.tsx)
- Construído utilizando Next.js 14, React, TypeScript, Shadcn/ui, Tailwind CSS
- Responsivo para diferentes dispositivos
- Otimizado para Next.js e Vercel

# Iniciando Localmente

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/ArmandoAAJ/cv.git
   ```

2. Mude para o diretório clonado:

   ```bash
   cd cv
   ```

3. Instale as dependências:

   ```bash
   yarn install
   ```

4. Inicie o servidor local:

   ```bash
   yarn dev
   ```

5. Abra o [arquivo de configurações](./src/data/resume-data.tsx) e faça as alterações

# Execute com o Docker

Construa o contêiner

```
docker compose build
```

Execute o contêiner

```
docker compose up -d
```

Encerre o contêiner

```
docker compose down 
```

