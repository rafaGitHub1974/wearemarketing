# Prueba We Are Marketing

## Librerías utilizadas en el proyecto

> Webpack + Vuetify + Vee-validate + Multidioma (i18n) + Axios

## Requisitos previos

Debemos tener instalado el client de Vue para que pueda compilar las extensiones .vue.

```bash
npm install -g vue-cli
```

## Clonando el repositorio

```bash
# Elijan la carpeta donde quiera clonar
cd my-project-path

# Ejecute el siguiente comando para clonar
git clone https://github.com/rafaGitHub1974/wearemarketing.git
cd my-project

# Instalamos las dependencias
npm install
```

## Compilando nuestros componentes

Si ya tienes todo listo ahora debemos compilar los componentes. Tenemos 2 entornos uno de DEV (para pruebas) el cual creará un servidor local para poder probar los componentes y luego el BUILD que será el de producción creando un archivo .js que deberemos agregar a nuestro proyecto final.

```bash
# Crea un servidor local para que puedas probar tus componentes
npm run dev

# Genera los javascripts
npm run build
```

## Para compilar en producción y visualizar el informe del analizador de paquetes

npm run build --report

## Para ejecutar pruebas unitarias

npm run unit

## Para ejecutar todas las pruebas

npm test

```
