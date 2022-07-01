import { createApp } from 'vue'
import App from './App.vue'
import GAuth from 'vue3-google-oauth2'

const app = createApp(App)
app.mount('#app')

const gAuthOptions = 
{ clientId: '754430709039-jlssln6c4phugulm54tkp1iiaqib27el.apps.googleusercontent.com', 
scope: 'email', 
prompt: 'consent', 
fetch_basic_profile: true }

app.use((GAuth, gAuthOptions))