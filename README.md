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
# 🛠️ Sentando Bases con NestJS

---

## **Objetivo:**
**Sentar las bases en NestJS** a través de una serie de temas fundamentales que permitirán al estudiante construir una comprensión sólida de este poderoso framework. Los temas a tocar en el taller incluyen:

- 🛡️ **¿Qué es Nest?**
- 🤔 **¿Por qué usarlo?**
- 🗂️ **Explicación sobre cada archivo en un proyecto nuevo de Nest**
- 🏗️ **Core Nest building blocks**
- 📦 **Módulos**
- 📋 **Controladores (Post, Patch, Get, Delete)**
- 🏷️ **Primeros decoradores**
- 💼 **Servicios**
- 💉 **Inyección de dependencias**
- 🧪 **Pipes**
- 🚨 **Exception Filters**

---

## **Introducción:**
> **¡Bienvenidos!** 🎉 Después de un viaje profundo por el mundo de Node.js, TypeScript, decoradores, pruebas de desempeño y otras cosas que generan una potencial frustración 😅, nos adentramos ahora en el universo de NestJS, un framework que nos permitirá estructurar nuestras aplicaciones de manera modular y escalable, llevando nuestras habilidades a un nuevo nivel. En este taller, crearemos una base sólida en NestJS, preparándonos para enfrentar problemas complejos en el ámbito de la tecnología financiera.

---

## **Instrucciones de Entrega:**
- **Subir tu proyecto a GitHub:** Crea un repositorio en GitHub y sube tu proyecto de NestJS.
- **Compartir el enlace:** Sube tu enlace a la plataforma de Laboratoria para que pueda revisar tu proyecto.
---

## **Problemática:**

**Contexto de la Problemática:**

Imagina que has sido contratado por una fintech emergente que busca revolucionar el mercado de microcréditos. La compañía, **QuickLoan**, quiere ofrecer préstamos rápidos a personas con poca o ninguna historia crediticia, pero se enfrenta a varios desafíos:

1. **Velocidad y Seguridad:** Los usuarios esperan decisiones inmediatas sobre sus solicitudes de préstamo, lo cual requiere un sistema rápido y seguro.
2. **Escalabilidad:** A medida que la fintech crezca, el sistema debe ser capaz de manejar miles de solicitudes simultáneamente.
3. **Modularidad y Mantenimiento:** El sistema debe ser modular para permitir la incorporación de nuevas funcionalidades y mejoras sin comprometer la estabilidad.
4. **Personalización y Manejo de Excepciones:** Se requiere un sistema que pueda personalizar las ofertas de crédito y manejar excepciones de manera eficiente para evitar posibles fraudes.

**Problemática**: QuickLoan necesita un sistema backend robusto que permita manejar solicitudes de préstamos de manera segura, rápida y escalable, asegurando una experiencia fluida para el usuario final. Debes crear la base de este sistema utilizando NestJS.

---

## **Epica:**

**Como** desarrollador backend en **QuickLoan**,
**Quiero** construir un sistema modular y seguro en NestJS,
**Para** gestionar ***solicitudes de préstamos*** de manera eficiente y escalable, mientras garantizo la seguridad de los datos y el manejo adecuado de excepciones.

---

## **Criterios de Aceptación:**

- **Comprensión y Explicación de la Estructura de un Proyecto NestJS**: El estudiante debe identificar y explicar la función de cada archivo en la estructura básica de un proyecto NestJS.
- **Implementación de Controladores Eficientes**: El estudiante debe crear controladores que manejen diferentes métodos HTTP (Post, Patch, Get, Delete) para gestionar solicitudes de préstamo.
- **Uso Efectivo de Decoradores y Servicios**: Implementar decoradores y servicios que permitan personalizar y manejar la lógica de negocio del sistema de préstamos.
- **Configuración Adecuada de Pipes y Exception Filters**: Configurar y aplicar pipes para la validación de datos y filtros de excepción para manejar errores y proteger el sistema.
- **Aplicación de la Inyección de Dependencias para Modularidad**: Usar inyección de dependencias para construir un sistema modular, permitiendo la fácil adición de nuevas funcionalidades.


---

## **Historias de Usuario**

## **Historia de Usuario 1: Configuración Inicial y Estructura del Proyecto**

**Como** desarrollador backend,  
**Quiero** aprender a configurar y entender la estructura básica de un proyecto NestJS,  
**Para** asegurarme de que la arquitectura del proyecto sea modular y fácilmente escalable.

**Tareas:**

### **1. Configuración del Proyecto**

- **Propuesta de Solución**:
   - Crear un nuevo proyecto NestJS llamado `quickloan-app` utilizando el CLI:
   ```bash
   nest new quickloan-app
   ```
   - Revisar y entender la estructura de archivos generada por defecto. Asegúrate de leer la documentación o las notas adicionales proporcionadas. Puedes explorar cada archivo y carpeta para comprender su propósito y cómo contribuye a la arquitectura del proyecto [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).
   - Identificar el propósito de cada archivo y cómo contribuye a la modularidad del proyecto. Puedes leer la siguiente documentación [Estructura propuesta aplicaciones NestJS](../notes/proposed-architecture.md).

- **Preguntas**:
   1. ¿Qué propósito cumple el archivo `main.ts` en un proyecto NestJS y por qué es crucial en la configuración inicial? Puedes leer más sobre el archivo [aquí](../first-step-project/src/main.ts) en la sección inferior de
   notas.
   
   El archivo main.ts en un proyecto NestJS es el punto de entrada de la aplicación.
   Rol en la arquitectura limpia: Capa de Configuración.
   Propósito: Aquí es donse se configura y arranca el servidor de la aplicación. En términos de arquitectura limpia,main.ts configura las capas externas, como la red(HTTP), y orquesta la inicialización de la aplicación sin involucrarse en la lógica de negocio. Es el archivo que conecta todos los componentes antes de que la
   aplicación comience a procesar solicitudes, por esto es crucial en la configuración inicial.

   2. ¿Qué diferencia existe entre `app.module.ts` y `app.controller.ts`? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? Puedes leer sobre el archivo [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).

   app.module.ts es el módulo raíz de la aplicación que organiza otros módulos necesarios.
   Este archivo agrupa y organiza la configuración y los módulos de la aplicación. En la Arquitectura Limpia, actúa como la capa de configuración que ensambla los módulos, controladores, y servicios, definiendo cómo se interrelacionan sin involucrarse en la lógica de negocio.
   
   Mientras que, app.controller.ts define un controlador básico que maneja las rutas y métodos HTTP.
   Dentro de la Arquitectura Limpia, el controlador actúa como la interfaz entre el mundo exterior y la lógica
   interna de la aplicación. Se encarga de recibir las solicitudes HTTP, delegar la lógica de negocio a los
   servicios y retornar las respuestas al cliente. No debería contener lógica de negocio, su función es coordinar y orquestar la interacción entre las capas.

---

### **2. Creación de Módulos Básicos**

- **Propuesta de Solución**:
   - Crear un módulo `LoansModule` para gestionar operaciones de préstamos:
   ```bash
   nest g mo loans
   ```
   - Crear un módulo `UsersModule` para gestionar la información de los usuarios:
   ```bash
   nest g mo users
   ```

- **Cascarita**: Revisa el nombre del módulo generado y asegúrate de que sea correcto y consistente con el estándar de nombres.

- **Preguntas**:
   1. ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos
   
   nest g mo loans: se utiliza para generar un nuevo módulo llamado loans.
   nest g mo users: se utiliza para generar un nuevo módulo llamado users.

  1. Organización y estructura: La modularización divide la aplicación en módulos independientes. Cada módulo se enfoca en una funcionalidad específica, lo que facilita la comprensión y el mantenimiento del código.

  2. Reutilización del código: Los módulos pueden reutilizarse en diferentes partes del proyecto o incluso en proyectos distintos. Esto ahorra tiempo y esfuerzo al no tener que escribir la misma lógica repetidamente.

  3. Trabajo en equipo: Diferentes miembros del equipo pueden enfocarse en módulos específicos. La modularización permite una colaboración más eficiente y reduce conflictos al trabajar en paralelo.

  4. Cambios sin afectar todo el sistema: Al dividir la aplicación en módulos, puedes realizar cambios o mejoras en una parte sin afectar al resto. Esto reduce el riesgo de errores y agiliza el desarrollo.

  En resumen, la modularización mejora la legibilidad, el mantenimiento y la escalabilidad de la aplicación.

   2. ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?

   1. Mantenimiento:

  *Facilita la corrección de errores: En un sistema modular, puedes aislar y solucionar problemas en un módulo específico sin afectar el resto de la aplicación.

  *Mejora la legibilidad: Los módulos bien definidos permiten una comprensión más rápida del código. Esto es crucial para el mantenimiento a largo plazo.

  *Actualizaciones más seguras: Puedes actualizar un módulo sin preocuparte por romper otras partes del sistema.

  2. Escalabilidad:

  *Escalabilidad horizontal: Puedes escalar solo los módulos que necesitan más recursos, en lugar de toda la aplicación.

  *Agregación de funcionalidades: Agregar nuevas características es más sencillo cuando se trata de módulos independientes.

  *Reutilización de código: Los módulos pueden utilizarse en diferentes proyectos, lo que acelera el desarrollo y la escalabilidad.

  3. Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?

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

---

### **3. Implementación de Controladores**

- **Propuesta de Solución**:
   - Crear un controlador `LoansController` para manejar solicitudes POST de creación de préstamos:
   ```bash
   nest g co loans
   ```
   - Implementar rutas GET para consultar el estado de un préstamo en el mismo controlador:
   ```typescript
   import { Controller, Get, Post, Body, Param } from '@nestjs/common';

   @Controller('loans')
   export class LoansController {
     @Post()
     createLoan(@Body() createLoanDto: any) {
       return 'Loan created';
     }

     @Get(':id')
     getLoanStatus(@Param('id') id: string) {
       return `Status of loan ${id}`;
     }
   }
   ```

- **Cascarita**: Asegúrate de que las rutas estén correctamente definidas y que los decoradores estén aplicados en los lugares correctos.

- **Preguntas**:

  NOTA: Después de crear el controlador LoansController con el comando npx nest g co loans, se crearon dentro de la carpeta loans dos módulos loans.controller.spec.ts y loans.controller.ts.

   1. ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?

   En NestJS, los decoradores se utilizan para agregar metadatos a las clases y métodos, lo que permite que el framework configure y maneje las rutas, inyección de dependencias, validaciones, entre otras funcionalidades.
   Si se define incorrectamente un decorador en un controlador, esto puede tener varios efectos negativos sobre 
   la funcionalidad del endpoint, dependiendo del tipo de error.

   Consecuencias de un decorador incorrecto

   *Ruta incorrecta o no disponible: 
   Si el decorador que define la ruta (@Get(), @Post(), etc.) está mal configurado o ausente, la ruta correspondiente podría no ser accesible. Por ejemplo, si olvidas agregar @Get('ruta') a un método, ese método no se expondrá como un endpoint GET en la ruta especificada.

   *Inyección de dependencias fallida:
   Decoradores como @Inject() o @Injectable() son esenciales para la inyección de dependencias. Un mal uso puede resultar en un fallo al iniciar la aplicación debido a que no se pueden resolver las dependencias, lo que provoca un error de tiempo de ejecución.

   *Problemas de validación y manejo de datos:
   Decoradores como @Body(), @Param(), @Query(), etc., se utilizan para extraer datos de la solicitud HTTP. Si se utilizan incorrectamente, podrían causar que los datos no se procesen correctamente, lo que lleva a errores en la validación o datos incompletos.

   2. ¿Por qué es importante manejar rutas dinámicas (por ejemplo, `@Get(':id')`) en aplicaciones que interactúan con bases de datos?

   Manejar rutas dinámicas en aplicaciones que interactuan con bases de datos es crucial porque permite a la aplicación ser flexible y accesible al momento de acceder, manipular y gestionar datos específicos.
   En el contexto de NestJS, el uso de rutas dinámicas, como @Get(':id'), es importante por las siguientes razones:

   *Acceso a recursos específicos: Las rutas dinámicas permiten a la aplicación acceder a recursos específicos 
   almacenados en la base de datos utilizando un identificador único, como un id. Por ejemplo, en una aplicación que maneja usuarios, @Get(':id') permite obtener los detalles de un usuario específico en función de su id.

   Esto es esencial para operaciones CRUD, ya que cada recurso en la base de datos puede ser referenciado y manipulado de manera directa mediante su identificador. 

   *Manejo de relaciones entre entidades: En aplicaciones que manejan relaciones entre diferentes entidades, las rutas dinámicas permiten navegar estas relaciones de manera intuitiva.

   Las rutas dinámicas son fundamentales en aplicaciones que interactúan con bases de datos porque proporcionan una manera flexible, eficiente y segura de acceder y manipular recursos específicos. Este enfoque es clave para construir aplicaciones robustas y escalables que cumplan con las expectativas de los usuarios y los requerimientos técnicos.
 
---

## **Historia de Usuario 2: Implementación de la Lógica de Negocio y Seguridad**

**Como** desarrollador backend,  
**Quiero** aprender a implementar la lógica de negocio y asegurar la seguridad de las transacciones,  
**Para** garantizar que el sistema maneje las solicitudes de préstamos de manera segura y eficiente.

**Tareas:**

### **1. Desarrollo de Servicios**

- **Propuesta de Solución**:
   - Crear un servicio `LoansService` para manejar la lógica de negocio de los préstamos:
   ```bash
   nest g s loans
   ```
   - Implementar un método para calcular el riesgo del préstamo basado en el perfil del usuario:
   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class LoansService {
     calculateLoanRisk(userProfile: any): string {
       // Lógica básica para determinar el riesgo
       if (userProfile.creditScore > 700) {
         return 'Low Risk';
       } else {
         return 'High Risk';
       }
     }
   }
   ```

- **Cascarita**: Verifica que el nombre del método y su propósito estén alineados con la lógica de negocio y que el servicio esté correctamente inyectado en el controlador.

- **Preguntas**:
   1. ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?
   2. ¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?

---

### **2. Aplicación de Decoradores y Pipes**

- **Propuesta de Solución**:
   - Utilizar decoradores como `@Body`, `@Param`, y `@Query` para manejar datos de las solicitudes en el `LoansController`:
   ```typescript
   @Post()
   createLoan(@Body() createLoanDto: any) {
     return `Loan created for ${createLoanDto.userId}`;
   }
   ```

   - Implementar un `ValidationPipe` para validar los datos de entrada:
   ```typescript
   import { ValidationPipe } from '@nestjs/common';

   // En main.ts
   app.useGlobalPipes(new ValidationPipe());
   ```

- **Cascarita**: Asegúrate de que el `ValidationPipe` esté configurado correctamente y aplicado en la instancia de la aplicación.

- **Preguntas**:
   1. ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?
   2. ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?

---

### **3. Configuración de Exception Filters**

- **Propuesta de Solución**:
   - Implementar filtros de excepción para manejar errores comunes:
   ```typescript
   import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

   @Catch(HttpException)
   export class HttpErrorFilter implements ExceptionFilter {
     catch(exception: HttpException, host: ArgumentsHost) {
       const ctx = host.switchToHttp();
       const response = ctx.getResponse();
       const status = exception.getStatus();

       response.status(status).json({
         statusCode: status,
         message: exception.message,
       });
     }
   }
   ```

   - Asegurarse de que los errores se manejen adecuadamente en las respuestas al usuario.

- **Cascarita**: Verifica que el filtro de excepción esté registrado correctamente en el módulo o aplicado globalmente.

- **Preguntas**:
   1. ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?
   2. ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

---
