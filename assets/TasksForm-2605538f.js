import{s as o,a as e,c as t,m as a,n,e as i,o as s,p as r,q as l,b as d,r as c,j as p,F as u,i as m,I as b,t as h,v as x,w as f}from"./index-3aebe559.js";const g={ButtonsContainer:o.div.withConfig({displayName:"TasksForm__ButtonsContainer",componentId:"sc-13obn7x-0"})(["align-items:center;display:flex;gap:",";button{all:unset;background-color:",";border:1px solid ",";border-radius:4px;box-shadow:inset 0 -3px ",";color:",";cursor:pointer;font-size:16px;font-weight:500;padding:6px ",";text-align:center;text-transform:uppercase;&:focus-visible{outline:auto;}&:active{box-shadow:unset;transform:scaleY(0.94) translateY(2px);}}"],e.XXXXS,t.WHITE,t.TRANSPARENT_BLACK,t.TRANSPARENT_BLACK,t.LIGHTER_GREY,e.XXS),Form:o.form.withConfig({displayName:"TasksForm__Form",componentId:"sc-13obn7x-1"})([""," max-width:400px;"],a),Footer:o.div.withConfig({displayName:"TasksForm__Footer",componentId:"sc-13obn7x-2"})([""," align-items:center;display:flex;justify-content:space-between;button{all:unset;color:",";cursor:pointer;font-size:14px;font-weight:600;&:focus-visible{outline:auto;}}> div:last-child{display:flex;gap:",";> button:last-child{all:unset;background-color:",";border-radius:4px;color:",";cursor:pointer;display:block;font-size:12px;margin-left:auto;min-width:42px;opacity:0.8;padding:",";text-align:center;&:hover{opacity:0.9;}&:focus-visible{outline:auto;}&:disabled{background-color:",";color:",";cursor:unset;opacity:1;}}}"],n,t.LIGHT_GREY,e.S,t.BLACK,t.WHITE,e.XXS,t.LIGHTER_GREY,t.BLACK),Input:o.input.withConfig({displayName:"TasksForm__Input",componentId:"sc-13obn7x-3"})(["all:unset;color:",";font-size:18px;font-weight:600;padding:"," 0;width:100%;&::placeholder{color:",";font-size:18px;font-style:italic;font-weight:600;opacity:0.6;}"],t.LIGHT_GREY,e.M,t.LIGHTER_GREY),NoteContainer:o.div.withConfig({displayName:"TasksForm__NoteContainer",componentId:"sc-13obn7x-4"})(["margin-bottom:",";> button{all:unset;color:",";cursor:pointer;font-size:13px;text-decoration:underline;&:focus-visible{outline:auto;}}"],e.XS,t.LIGHTER_GREY),StepperContainer:o.div.withConfig({displayName:"TasksForm__StepperContainer",componentId:"sc-13obn7x-5"})(["display:flex;flex-direction:column;gap:",";margin-bottom:",";> label{color:",";font-size:14px;font-weight:600;user-select:none;width:max-content;}> div{align-items:center;display:flex;gap:",";}input{max-width:70px;}"],e.XXXS,e.XS,t.LIGHTER_GREY,e.XXXS)};function T({taskItem:o}){const{update:e,add:t,deleteTask:a}=i((o=>({update:o.editTask,add:o.addTask,deleteTask:o.deleteTask})),s),{register:n,handleSubmit:T,setValue:y,getValues:C,formState:{isValid:v}}=r({defaultValues:o?{...o}:{estimatedPomodoros:1},mode:"onChange",resolver:l(f)}),k=d((o=>o.close));c.useState(!!(null==o?void 0:o.note));const I=o=>()=>{const e="increase"===o?C("estimatedPomodoros")+1:Math.max(1,C("estimatedPomodoros")-1);y("estimatedPomodoros",e)};return p(u,{children:m(g.Form,{onSubmit:T((a=>{o?e(o.id,a):t(a),k()})),"aria-label":"Task Form",role:"dialog","aria-modal":"true",children:[p(g.Input,{placeholder:"Em que você está trabalhando?",...n("title")}),m(g.StepperContainer,{children:[p("label",{htmlFor:"estPomodoros","aria-label":"Estimated Pomodoros",children:"Pomodoros"}),m("div",{children:[p(b,{id:"estPomodoros",type:"number",...n("estimatedPomodoros",{valueAsNumber:!0})}),m(g.ButtonsContainer,{children:[p("button",{type:"button",onClick:I("increase"),"aria-label":"Increase Estimated Pomodoros",children:p(h,{})}),p("button",{type:"button",onClick:I("decrease"),"aria-label":"Decrease Estimated Pomodoros",children:p(x,{})})]})]})]}),m(g.Footer,{children:[p("div",{children:!!o&&p("button",{type:"button",onClick:()=>{o&&a(null==o?void 0:o.id),k()},children:"Deletar"})}),m("div",{children:[p("button",{type:"button",onClick:k,children:"Cancelar"}),p("button",{type:"submit",disabled:!v,children:"Salvar"})]})]})]})})}export{T as TasksForm,T as default};