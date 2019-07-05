export default {
    name:"search",
    path:"/search",
    component:()=>import("@/views/Sort/Search"),
    children:[
        {path:"/",redirect:"bodysearch"},
        {name:"bodysearch",path:"bodysearch",component:()=>import("@/views/Sort/bodysearch")},
        {name:"list",path:"list",
        component:()=>import("@/views/Sort/List")}
    ]
}