<template>
  <div class="playlist">
    <div class="p-5" v-if="playlist">
      <Info :playlist="playlist" :play-all="() => playAll()" />
      <el-tabs class="mt-3" v-model="tab">
        <el-tab-pane lazy :label="`歌曲 ${songs.length}`" name="tracks">
          <SongList :songs="songs" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import {
  getDayMusicRecommend,
  useDetail,
  usePlayListDetail,
  usePlayListTrackAll,
} from "@/utils/api";
import Info from "@/views/playlist/Info.vue";
import SongList from "@/views/playlist/SongList.vue";
import type { PlayListDetail } from "@/models/playlist";
import type { Song } from "@/models/song";
import { usePlayerStore } from "@/stores/player";

const tab = ref("tracks");

const route = useRoute();
const playlist = ref<PlayListDetail>();
const songs = ref<Song[]>([]);

const { pushPlayList, play } = usePlayerStore();

const playAll = () => {
  pushPlayList(true, ...songs.value);

  play(songs.value.first().id);
};

const getData = () => {
  const id: number = Number(route.query.id);

  if (id == 0) {
    getDayMusicRecommend().then((res) => {
      res.data.forEach(({ id }) => {
        useDetail(id).then((res) => {
          songs.value.push(res);
        });
      });
    });

    playlist.value = {
      name: "My Playlist",
      coverImgUrl: "https://example.com/cover.jpg",
      description: "This is my favorite playlist",
    };
    return;
  }

  usePlayListDetail(id).then((res) => {
    playlist.value = res;
  });
  usePlayListTrackAll(id).then((res) => {
    songs.value = res;
  });
};
onMounted(getData);
</script>

<style lang="scss">
.playlist {
  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-tabs__header {
    @apply m-0;
  }
}
</style>
