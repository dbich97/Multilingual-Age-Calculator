# مرحلة البناء
FROM node:18-alpine AS build

WORKDIR /app

# انسخ فقط الملفات المهمة أولاً عشان caching
COPY package*.json ./
RUN npm ci

# انسخ باقي الملفات
COPY . .

# شغّل build
RUN npm run build

# مرحلة التشغيل
FROM node:18-alpine

WORKDIR /usr/src/app

# نزّل sirv-cli لتقديم ملفات static
RUN npm install -g sirv-cli

# انسخ ملفات build فقط
COPY --from=build /app/dist ./dist

EXPOSE 80

# شغّل السيرفر
CMD ["sirv", "dist", "--port", "80", "--host", "0.0.0.0", "--single"]
