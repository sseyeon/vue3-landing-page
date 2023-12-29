<template>
  <viewer :initialValue="viewerText" height="500px" />
</template>

<script>
// toastUi 불러오기
import Editor from "@toast-ui/editor";
// import "codemirror/lib/codemirror.css"; // Editor's Dependency Style
import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style

import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
export default {
  components: {
    viewer: Viewer,
  },
  mounted() {
    // 토스트 에디터 생성 함수
    const editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType: "markdown",
      previewStyle: "vertical",
    });

    editor.getMarkdown();
  },
};
</script>

<style>
</style>