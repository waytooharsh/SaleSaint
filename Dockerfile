FROM waytooharsh/reactdeploy
WORKDIR app
COPY . .
RUN npm ci
EXPOSE 3000
CMD ["serve", "-s", "build"]