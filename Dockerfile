# 使用官方的 Node.js 執行環境作為基礎映像
FROM node:18.17.0-alpine

# 設定容器內的工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json (或 yarn.lock) 到工作目錄
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程式的其他代碼到工作目錄
COPY . .

# 列出文件查看內容是否正確複製
RUN ls -al

# 構建 Next.js 應用程式
RUN npm run build

# 暴露應用程式運行的端口
EXPOSE 3001

# 啟動應用程式的命令
CMD ["npm", "start"]
