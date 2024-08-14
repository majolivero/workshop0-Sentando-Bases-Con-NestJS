<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

-----------

Notas importantes:

1.Instalación de NESTjs DE MANERA LOCAL:
npx @nestjs/cli new nombre-del-proyecto

2.Vincular el repositorio de GitHub con el proyecto local creado por Nest: 
```bash
git remote add origin https://github.com/tu-usuario/nombre-del-repositorio.git
git branch -M main
git push -u origin main
```

3.¿Qué es un módulo en NestJS?
En NestJS, un módulo es una unidad fundamental de la aplicación. Es una clase decorada con @Module(), que agrupa componentes relacionados, como controladores y servicios. Los módulos ayudan a organizar la aplicación de manera modular, promoviendo la separación de responsabilidades y facilitando el mantenimiento.

-----------
Historia de usuario 1:Configuración Inicial y Estructura del Proyecto

1.CONFIGURACIÓN DEL PROYECTO

Preguntas:

1.1¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial?

El archivo main.ts en un proyecto NestJS es el punto de entrada de la aplicación.
Rol en la arquitectura limpia: Capa de Configuración.
Propósito: Aquí es donse se configura y arranca el servidor de la aplicación. En términos de arquitectura limpia,
main.ts configura las capas externas, como la red(HTTP), y orquesta la inicialización de la aplicación sin involucrarse en la lógica de negocio. Es el archivo que conecta todos los componentes antes de que la aplicación comience a procesar solicitudes, por esto es crucial en la configuración inicial.

1.2¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación?

app.module.ts es el módulo raíz de la aplicación que organiza otros módulos necesarios.
Este archivo agrupa y organiza la configuración y los módulos de la aplicación. En la Arquitectura Limpia, actúa como la capa de configuración que ensambla los módulos, controladores, y servicios, definiendo cómo se interrelacionan sin involucrarse en la lógica de negocio.

Mientras que, app.controller.ts define un controlador básico que maneja las rutas y métodos HTTP.
Dentro de la Arquitectura Limpia, el controlador actúa como la interfaz entre el mundo exterior y la lógica
interna de la aplicación. Se encarga de recibir las solicitudes HTTP, delegar la lógica de negocio a los
servicios y retornar las respuestas al cliente. No debería contener lógica de negocio, su función es coordinar y orquestar la interacción entre las capas.

-----------

2.CREACIÓN DE MÓDULOS BÁSICOS

nest g mo loans: se utiliza para generar un nuevo módulo llamado loans.
nest g mo users: se utiliza para generar un nuevo módulo llamado users.

2.1¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?

1. Organización y estructura: La modularización divide la aplicación en módulos independientes. Cada módulo se enfoca en una funcionalidad específica, lo que facilita la comprensión y el mantenimiento del código.

2. Reutilización del código: Los módulos pueden reutilizarse en diferentes partes del proyecto o incluso en proyectos distintos. Esto ahorra tiempo y esfuerzo al no tener que escribir la misma lógica repetidamente.

3. Trabajo en equipo: Diferentes miembros del equipo pueden enfocarse en módulos específicos. La modularización permite una colaboración más eficiente y reduce conflictos al trabajar en paralelo.

4. Cambios sin afectar todo el sistema: Al dividir la aplicación en módulos, puedes realizar cambios o mejoras en una parte sin afectar al resto. Esto reduce el riesgo de errores y agiliza el desarrollo.

En resumen, la modularización mejora la legibilidad, el mantenimiento y la escalabilidad de la aplicación. 

2.2¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?

1. Mantenimiento:

*Facilita la corrección de errores: En un sistema modular, puedes aislar y solucionar problemas en un módulo específico sin afectar el resto de la aplicación.

*Mejora la legibilidad: Los módulos bien definidos permiten una comprensión más rápida del código. Esto es crucial para el mantenimiento a largo plazo.

Actualizaciones más seguras: Puedes actualizar un módulo sin preocuparte por romper otras partes del sistema.

2. Escalabilidad:

*Escalabilidad horizontal: Puedes escalar solo los módulos que necesitan más recursos, en lugar de toda la aplicación.

*Agregación de funcionalidades: Agregar nuevas características es más sencillo cuando se trata de módulos independientes.

*Reutilización de código: Los módulos pueden utilizarse en diferentes proyectos, lo que acelera el desarrollo y la escalabilidad.

2.3Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?

MÓDULO Loans Module:
Después crear el módulo LoansModule con el comando npx nest g mo loans(por estar instalado nest localmente), la
CLI de NestJS genera un nuevo archivo de módulo con el nombre loans.module.ts dentro de una carpeta llamada loans, que hace parte de la carpeta src. 

El contenido del archivo es un módulo básico de NestJS, que es una clase decorada con @Module() y que sirve como un contenedor para otros componentes como controladores,servicios y otros módulos. 

Este nuevo módulo LoansModule puede luego ser importado en otros módulos de la aplicación o ampliado para incluir controladores, servicios, y otras dependencias que se necesiten para gestionar la funcionalidad relacionada con "loans" (préstamos, en este caso).

Este comando es muy útil para mantener la estructura de tu proyecto organizada, ya que NestJS fomenta la modularidad y la separación de responsabilidades dentro de las aplicaciones.

MÓDULO UsersModule:
Después de crear el módulo UsersModule con el mando npx nest g mo users(por estar instalado nest localmente), la CLI de NestJS genera un nuevo archivo de módulo con el nombre users.module.ts dentro de una carpeta llamada users, que hace parte de la carpeta src.

Con este módulo podemos:
*Agregar controladores y servicios: Puedes agregar controladores y servicios específicos al módulo Users. Por ejemplo, puedes crear un controlador UsersController y un servicio UsersService para manejar las operaciones relacionadas con los usuarios.
*Importar otros módulos: Puedes importar otros módulos dentro del UsersModule para usar sus funcionalidades, como conectores de base de datos o módulos compartidos.
*Configurar dependencias: Puedes definir dependencias que serán utilizadas dentro del módulo, configurando como interactúa con otros módulos y servicios en la aplicación. 

3. IMPLEMENTACIÓN DE CONTROLADORES

Después de crear el controlador LoansController con el comando npx nest g co loans, se crearon dentro de la carpeta loans dos módulos loans.controller.spec.ts y loans.controller.ts.