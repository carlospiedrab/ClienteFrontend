import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteInterface } from './interfaces/ClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baserUrl: string = 'https://localhost:44324/api/Clientes/';

  constructor(private http: HttpClient) { }

getClientes(){  

  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })

  return this.http.get(this.baserUrl, { headers: headers});
}

getCliente(id: number){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })
  return this.http.get(this.baserUrl+id, { headers: headers});
}

crearCliente(cliente: ClienteInterface){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })
  return this.http.post(this.baserUrl, cliente, { headers: headers});
}

actualizarCliente(id: number, cliente: ClienteInterface){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })

  return this.http.put(this.baserUrl+id, cliente , { headers: headers} );
}

deleteCliente(id: number){
  let auth_token = localStorage.getItem('token_value');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })


  return this.http.delete(this.baserUrl+id , { headers: headers});
}

}
