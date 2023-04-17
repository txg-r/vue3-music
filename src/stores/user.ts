import { defineStore } from "pinia";
import { useUserInfo } from "@/utils/api";
import { resolveResPromise } from "@/utils/tools"
import type { UserProfile } from "@/models/user";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            profile: {} as UserProfile,
        }
    },
    getters: {

    },
    actions: {
        getUserInfo() {
            let isLogin = true;
            resolveResPromise(useUserInfo(), 200, (data) => {
                this.profile = data;
            }, () => {
                isLogin = false;
            }, false)
            return isLogin;
        }
    }
})
