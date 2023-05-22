import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Aquí puedes manipular la solicitud antes de que se envíe al servidor
        // o la respuesta antes de que se entregue a la aplicación
    return next.handle(req);
    }
}

