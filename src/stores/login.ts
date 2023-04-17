import { defineStore } from "pinia";
import type { UserProfile } from "@/models/user";
import { userLogin, userRegister } from "@/utils/api"


export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            user: {} as UserProfile,
        }
    },

    getters: {

    },

    actions: {
        register() {
            return userRegister(this.user);
        },

        login() {
            return userLogin(this.user);
        }
    }
})