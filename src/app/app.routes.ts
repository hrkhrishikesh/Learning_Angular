import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { Forloopcontextualvar } from './forloopcontextualvar/forloopcontextualvar';
import { Getsetinputfield } from './getsetinputfield/getsetinputfield';
import { Ifelseloops } from './ifelseloops/ifelseloops';
import { SignalBasics } from './signal-basics/signal-basics';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Homepage } from './homepage/homepage';
import { Profile } from './profile/profile';
import { Formcontrols } from './formcontrols/formcontrols';
import { Parentchild } from './parentchild/parentchild';
import { Pipes } from './pipes/pipes';
import { ApiCalls } from './api-calls/api-calls';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', component: Homepage},
    { path: 'login', component: Login },
    { path: 'counter', component: Counter },
    { path: 'forLoop', component: Forloopcontextualvar },
    { path: 'getset', component: Getsetinputfield },
    { path: 'ifelse', component: Ifelseloops },
    { path: 'signal', component: SignalBasics },
    { path: 'profile', component:Profile, data:{name:'hrk'}},
    { path: 'forms', component: Formcontrols},
    { path: 'parent', component: Parentchild},
    { path: 'pipes', component: Pipes},
    { path: 'apicalls', component: ApiCalls},
    { path: '**', component: Pagenotfound },
    
];
