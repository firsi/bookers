import Router from 'next/router';
import { auth } from './base';

export const authMiddleware = ctx => {
  let authenticated=false;

  auth.onAuthStateChanged((user) => {
        if(user){
            authenticated = true;
        }
        else{
            authenticated = false;
        }
  })
  console.log(authenticated)

  if (ctx.req && !authenticated) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return
  }

  if (!authenticated) {
    Router.push('/login');
  }

  return authenticated;
}