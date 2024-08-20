FROM node:22-bookworm

WORKDIR /payment

COPY package.json ./

ENV DATABASE_URL="postgresql://postgres:mrc201@db:5432/be-assignment?schema=public"
ENV PORT=3001
ENV SUPABASE_URL="https://yalbdposmrnmwcvkfkoe.supabase.co"
ENV SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhbGJkcG9zbXJubXdjdmtma29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5NjU4MzAsImV4cCI6MjAzOTU0MTgzMH0.f_OURv4xOHNRPtsW9E_j2VboMKabKgw7QviBlxDcv5c"

RUN npm install

COPY . .

EXPOSE 3001

CMD npm run dev