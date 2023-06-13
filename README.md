<div align="center">

# Solutoria Test App
# ![image](./public/solutoria.png)

</div>

# Características
Este repositorio contiene una aplicación web desarrollada con Next.js, que permite crear, editar, eliminar y listar indicadores del mercado. la cual esta desarrollada con las siguientes tecnologías: TailwindCSS, MongoDB, Next.js, React.js, Docker, Docker Compose. Se reailizo el deploy en Vercel

La aplicación estará disponible en [http://solutoria-test-app.vercel.app](https://solutoria-test-app.vercel.app/)


![image](https://github.com/luisnava6667/Solutoria-Test-App/assets/88040918/c66c324b-c073-49a0-9f62-537fb7ba9308)
![image](https://github.com/luisnava6667/Solutoria-Test-App/assets/88040918/82f0fcd3-58a8-4bc0-9936-fb94e95f2b06)
![image](https://github.com/luisnava6667/Solutoria-Test-App/assets/88040918/73cbc0b5-66b0-4dfe-a835-035f349701d9)


# Instalación

1. Clona el repositorio:
```
   git clone https://github.com/luisnava6667/Solutoria-Test-App
```

2. Ve al directorio del proyecto:
```
cd Solutoria-Test-App
```

3. Instala las dependencias:
```
npm install
```
4. Renombrar el archivo **.env.template** a **.env**

5. Configura la conexión a la base de datos MongoDB en el archivo .env. Asegúrate de tener una instancia de MongoDB en ejecución y proporciona los detalles de conexión adecuados.
Para correr localmente, se necesita la base de datos puedes usar DOCKER para levantar la base de datos

```
docker-compose up -d
```

MongoDB URL Local:

```
mongodb://localhost:27017/solutoria-db
```

6. Reconstruir los modulos de node y levantar next
```
npm run dev
```
7. Llenar la base de datos con la información de prueba
```
http://localhost:3000/api/seed
```

# Uso
Una vez que la aplicación esté en funcionamiento, podrás acceder a la interfaz de gestión de indicadores en el navegador web. Asegúrate de tener una instancia de MongoDB en ejecución para trabajarlo en localy configurada correctamente para que la aplicación pueda interactuar con la base de datos.

# Contribución:
¡Gracias por considerar contribuir a Solution-Test-App! Si deseas contribuir, puedes seguir los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu nueva función o mejora:
3. Realiza tus cambios y realiza commits descriptivos.
    ```shell
    git push origin nombre-de-la-rama
4. Envía tus cambios al repositorio remoto:
     ```shell
     git push origin nombre-de-la-rama
5. Abre una pull request en GitHub describiendo tus cambios.
