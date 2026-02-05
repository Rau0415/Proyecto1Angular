import { Component, computed, signal } from '@angular/core';
import { form, FormField} from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado',
  imports: [RouterLink, FormField],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {

  departamentoModel = signal(
    {
      departamento:"Todos"
    }
  );

  departamentoForm = form(this.departamentoModel);



  listaEmpleados = signal([
  {
    id: 1,
    nombre: 'Ana',
    apellido: 'García',
    departamento: 'Sistemas',
    correo: 'empleado6@gmail.com',
    foto: 'https://i.pravatar.cc/200?u=1'
  },
  {
    id: 2,
    nombre: 'Carlos',
    apellido: 'Ruiz',
    departamento: 'Recursos Humanos',
    correo: 'empleado6@gmail.com',
    foto: 'https://i.pravatar.cc/200?u=2'
  },
  {
    id: 3,
    nombre: 'Laura',
    apellido: 'Méndez',
    departamento: 'Marketing',
    correo: 'empleado6@gmail.com',
    foto: 'https://i.pravatar.cc/200?u=3'
  },
  {
    id: 4,
    nombre: 'Martina',
    apellido: 'Jiménez',
    departamento: 'Ventas',
    correo: 'empleado6@gmail.com',
    foto: 'https://i.pravatar.cc/200?u=4'
  },
  {
    id: 5,
    nombre: 'Luis',
    apellido: 'Torres',
    departamento: 'Contabilidad',
    correo: 'empleado6@gmail.com',
    foto: 'https://i.pravatar.cc/200?u=5'
  },
  {
    id: 6,
    nombre: 'Lucía',
    apellido: 'López',
    departamento: 'Contabilidad',
    correo: 'empleado6@gmail.com',
    foto: 'https://i.pravatar.cc/200?u=6'
  }
]);

  empleadosFiltrados = computed(() => {
    const departamento = this.departamentoForm.departamento().value();
    const empleados = this.listaEmpleados();

    if (departamento === 'Todos') {
      return empleados;
    }

    return empleados.filter(
      empleado => empleado.departamento === departamento
    );
  });

}
