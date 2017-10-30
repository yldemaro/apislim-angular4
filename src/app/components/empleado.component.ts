import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/empleado';

@Component({
	selector: 'empleado',
	templateUrl: '../views/empleado.component.html',
	providers: [EmpleadoService]
})
export class EmpleadoComponent{
	public titulo: string;
	public empleado: Empleado[];

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _empleadoService: EmpleadoService
		){
		this.titulo = 'Listado de Empleados';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente empleado.component.ts');

		this._empleadoService.getEmpleados().subscribe(
			result => {
				
				if(result.code != 200){
					console.log(result);
				}else{
					this.empleado = result.data;
				}

			},
			error => {
				console.log(<any>error);
			}
			);
	}
}