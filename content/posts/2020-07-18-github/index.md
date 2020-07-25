---
title: Configuracion de GitHub usando SHH
author: Jhohan Palpa
date: 2020-07-21
hero: ./images/post.png
excerpt: Bienvenidos a mi pagina
---

GitHub es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control del versiones Git y se utiliza principalmente para la creacion de codigo fuente de programas de ordenador.

1. Crear una cuenta en GitHub (https://github.com/)

![GitHub Homepage](/images/crear_cuenta.png)
![GitHub Homepage](/images/crear_cuenta2.png)
![GitHub Homepage](/images/crear_cuenta3.png)

2. Descargar el Git for Windows (gitforwindows.org)

3. Instalar el Git for Windows

![GitHub Homepage](/images/intalaciongit1.png)
![GitHub Homepage](/images/intalaciongit2.png)
![GitHub Homepage](/images/intalaciongit3.png)
![GitHub Homepage](/images/intalaciongit4.png)
![GitHub Homepage](/images/intalaciongit5.png)
![GitHub Homepage](/images/intalaciongit6.png)
![GitHub Homepage](/images/intalaciongit7.png)
![GitHub Homepage](/images/intalaciongit8.png)
![GitHub Homepage](/images/intalaciongit9.png)
![GitHub Homepage](/images/intalaciongit10.png)
![GitHub Homepage](/images/intalaciongit11.png)
![GitHub Homepage](/images/intalaciongit12.png)
![GitHub Homepage](/images/intalaciongit13.png)

4. Configurar el SSH

a.  Abrir el Git Bash

b.	Copiar el texto debajo, con tu direccion de correo GitHub 
 
```bash
 ssh-keygen –t rsa –b 4096 –C "tu_correo@ejemplo.com"
```

c.  Esto crea una nueva clave ssh, utilizando el correo electronico proporcionado como etiqueta
 
![GitHub Homepage](/images/gitbash2.png)

d.	Cuando se solicite , se ingresa un archivo en donde se va a guardar la clave, presionar enter.Esto acepta la ubicacion predeterminada del archivo, confirmar con (y)
 
 ![GitHub Homepage](/images/gitbash3.png)
 
 e.  Agregar un contraseña segura ejm: idat16, confirmar contraseña

![GitHub Homepage](/images/gitbash4.png)
![GitHub Homepage](/images/gitbash5.png)
![GitHub Homepage](/images/gitbash6.png)

 f.	Por ultimo agregar el siguiente comando

```bash
 clip < ~/.ssh/id_rsa.pub
```

 g.	Ir a GitHub y dirigirse a settings

![GitHub Homepage](/images/sshconfig1.png)

 h.  Dirigirse a SSH and GPG keys y click en New SSH key

![GitHub Homepage](/images/sshconfig2.png)

 i.	Colocar un titulo y dar (ctrl + v) en el cuadro grande key  . Click Add SSH key

 ![GitHub Homepage](/images/sshconfig3.png)
 ![GitHub Homepage](/images/sshconfig4.png)

