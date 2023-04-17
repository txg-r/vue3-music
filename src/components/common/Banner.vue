<template>
  <button class="recommendation-button daily-recommendation-button">
    每日推荐
  </button>
  <button
    class="recommendation-button random-recommendation-button"
    @click="oneRecommand"
  >
    随机推荐
  </button>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";
import CoverPlay from "@/components/common/CoverPlay.vue";

const { oneRecommand } = usePlayerStore();

const name = "1";
</script>

<style scoped>
.recommendation-button {
  width: 130px;
  height: 130px;
  font-size: 1.2rem;
  border-radius: 10%;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  transition: background-color 0.3s, color 0.3s;
  background-color: rgba(45, 212, 188, 0.6);
  color: #fff;
}

.recommendation-button:hover {
  background-color: #fff;
  color: #3c8dbc;
}

.random-recommendation-button:hover {
  color: #00a65a;
}
</style>
