import { createRouter,createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue"
import User from "../components/User.vue"
import NotFound from "../components/NotFound.vue"
import UserProfile from "../components/UserProfile.vue"
import UserSettings from "../components/UserSettings.vue"



const routes = [
    {path:"/", component:HelloWorld, name:"home"},
    { 
        path:"/user/:id?", 
        component:User, 
        name:"user", 
        children : [
            {path:"profile", component:UserProfile},
            {path:"settings", component:UserSettings},
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;