import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = getjwtToken();
  if(jwtToken){
   var cloned= req.clone( {
      setHeaders:{
        Authorization:`Bearer ${jwtToken}`,
      }

    });
    return next(cloned);
  }

  return next(req);
};


function getjwtToken():string | null {
  return localStorage.getItem('JWT_TOKEN');
}
