const dockerTemplate = (userConfig: any) => {
  const template = `
    FROM node:20-alpine as builder

WORKDIR /${userConfig.projectName}

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine

COPY --from=builder /app/dist   .

EXPOSE ${userConfig.port}

CMD [ ${userConfig.scripts} ]`;

  return template;
};

export default dockerTemplate;
