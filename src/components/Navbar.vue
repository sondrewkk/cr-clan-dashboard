<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawerOpen = !drawerOpen"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text"> 
                <span class="font-weight-light">Clan</span> 
                <span>Dashboard</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawerOpen" app dark>
            <v-list>
                <v-list-tile v-for="menuItem in menuItems" :key="menuItem.text" router :to="menuItem.route">
                    <v-list-tile-action>
                        <v-icon>{{ menuItem.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ menuItem.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawerOpen: true,
            menuItems: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'group', text: 'Clan', route: '/clan' },
                { icon: 'device_hub', text: 'Family', route: '/family' },
                { icon: 'insert_chart_outlined', text: 'Reports', route: '/reports' },
                { icon: 'settings', text: 'Settings', route: '/settings' }
            ]
        }
    }
}
</script>

<style>

</style>
