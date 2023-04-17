<template>
  <div class="flex items-center cursor-pointer hover-text">
    <ElAvatar
      size="small"
      round
      class="bg-gray-200"
      src="https://n.sinaimg.cn/translate/w402h363/20180213/bg7r-fyrpeie1413753.jpg"
    ></ElAvatar>
    <span class="text-xs ml-1.5">{{ userInfo.userName }}</span>
  </div>
</template>

<script setup lang="ts">
import { Lock, Phone } from "@icon-park/vue-next";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { useLoginStore } from "@/stores/login";

const router = useRouter();
const userStore = useUserStore();
const { profile: userInfo } = storeToRefs(userStore);
onMounted(() => {
  if (!userStore.getUserInfo()) {
    window.localStorage.removeItem("token");
    router.replace("/login");
  }
});
</script>

<style lang="scss">
</style>
