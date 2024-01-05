<template>
  <div class="container mx-auto max-w-6xl my-8">
    <div class="flex items-center gap-x-4 mb-4">
      <SelectBox
        :options="selectOptions"
        v-model="selectedOption"
        @change="handleSelectChange"
      />
      <input
        type="text"
        v-model="editorContent"
        class="border border-gray-300 p-2 w-full"
      />
    </div>
    <section
      v-if="editor"
      class="buttons flex items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-300 p-4"
    >
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <font-awesome-icon :icon="['fas', 'bold']" />
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <font-awesome-icon :icon="['fas', 'italic']" />
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <font-awesome-icon :icon="['fas', 'strikethrough']" />
      </button>
      <button
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor.isActive('underline') }"
      >
        <font-awesome-icon :icon="['fas', 'underline']" />
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <font-awesome-icon :icon="['fas', 'list-ul']" />
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <font-awesome-icon :icon="['fas', 'list-ol']" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        &lt;hr/&gt;
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <font-awesome-icon :icon="['fas', 'rotate-left']" />
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <font-awesome-icon :icon="['fas', 'rotate-right']" />
      </button>
      <input
        type="file"
        ref="fileUpload"
        id="fileUpload"
        @change="addImage"
        style="display: none"
      />
      <button @click="triggerFileUpload">
        <font-awesome-icon :icon="['fas', 'image']" />
      </button>
    </section>
    <editor-content :editor="editor" />
    <div class="flex justify-center gap-x-2 mt-8">
      <button @click="handleSubmit" class="btn btn-primary">
        <font-awesome-icon :icon="['fas', 'save']" /> 등록
      </button>
      <button @click="handleCancel" class="btn btn-outline-primary">
        <font-awesome-icon :icon="['fas', 'times']" /> 뒤로가기
      </button>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import BulletList from "@tiptap/extension-bullet-list"
import Document from "@tiptap/extension-document"
import ListItem from "@tiptap/extension-list-item"
import OrderedList from "@tiptap/extension-ordered-list"
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"
import Image from "@tiptap/extension-image"
import SelectBox from "@/components/CustomSelectBox.vue"
// Image 확장을 커스터마이즈
const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      class: {
        default: "w-1/2 h-1/2 items-center rounded-lg mx-auto", // 여기에 CSS 클래스를 적용
      },
    }
  },
})

export default {
  components: {
    EditorContent,
    SelectBox,
  },

  data() {
    return {
      editor: null,
      selectOptions: [
        { label: "뉴스", value: "announcement" },
        { label: "공지사항", value: "press" },
      ],
      selectedOption: "announcement",
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Underline,
        Document,
        Paragraph,
        Text,
        BulletList,
        OrderedList,
        ListItem,
        Image,
        CustomImage,
      ],
      content: `
        <p>
          I like lists. Let’s add one:
        </p>
        <ul>
          <li>This is a bullet list.</li>
          <li>And it has three list items.</li>
          <li>Here is the third one.</li>
        </ul>
        <p>
          Do you want to see one more? I bet! Here is another one:
        </p>
        <ol>
          <li>That’s a different list, actually it’s an ordered list.</li>
          <li>It also has three list items.</li>
          <li>And all of them are numbered.</li>
        </ol>
        <p>
          Lists would be nothing without list items.
        </p>
      `,
      editorProps: {
        attributes: {
          class:
            "border border-gray-300 p-4 min-h-[24rem] max-h-[24rem] overflow-auto outline-none prose max-w-none",
        },
      },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },

  methods: {
    triggerFileUpload() {
      this.$refs.fileUpload.click() // Now correctly references the input element
    },

    addImage(event) {
      const file = event.target.files[0]

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader()

        reader.onload = e => {
          // Assuming 'editor' is your tiptap Editor instance
          this.editor.chain().focus().setImage({ src: e.target.result }).run()
        }

        reader.readAsDataURL(file)
      } else {
        alert("이미지 파일만 선택 가능합니다.")
      }
    },
    handleCancel() {
      const confirm = window.confirm("게시물 등록을 취소하시겠습니까?")
      if (confirm) window.history.back()
    },
    methods: {
      handleSelectChange(value) {},
    },
  },
}
</script>
<style >
.tiptap h1 {
  font-size: 32px;
  font-weight: bold;
}
.tiptap h2 {
  font-size: 28px;
  font-weight: bold;
}
.tiptap h3 {
  font-size: 24px;
  font-weight: bold;
}
.tiptap ul,
.tiptap ol {
  padding: 0 1rem;
}
.tiptap ul {
  list-style-type: disc; /* or 'circle' or 'square', depending on preference */
}
.tiptap ol {
  list-style-type: decimal; /* for numbers */
}
.is-active {
  background-color: #cbd5e1;
  border-radius: 0.25rem;
  padding-inline: 0.25rem;
}
.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>