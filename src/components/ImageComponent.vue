<template>
    <div class="main">
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <input type="file" multiple name="file" id="fileInput" class="hidden-input" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="fileInput" class="file-label">
                <div v-if="isDragging">
                {{this.$i18n.messages.en.profileForm.imageText }} </div>
                <div v-else> {{this.$i18n.messages.en.profileForm.placeImageText }} </div>
            </label>
            <div class="preview-container mt-4" v-if="files.length">
                <div v-for="file in files" :key="file.name" class="preview-card">
                    <div>
                        <img class="preview-img" :src="generateURL(file)" />
                        <p>
                            {{ file.name }}
                        </p>
                    </div>
                    <div>
                        <button class="ml-2" type="button" @click="remove(files.indexOf(file))" title="Remove file">
                            <b>×</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isDragging: false,
            files: [],
        };
    },
    computed: {
    locale: function () {
      return this.$i18n.messages;
    },
  },
    methods: {
        generateURL(file) {
            let fileSrc = URL.createObjectURL(file);
            setTimeout(() => {
                URL.revokeObjectURL(fileSrc);
            }, 1000);
            return fileSrc;
        },
        onChange() {
            this.files = [...this.$refs.file.files];
            // this.filesArray = this.files;
            console.log(this.files)
        },
        dragover(e) {
            e.preventDefault();
            this.isDragging = true;
        },
        dragleave() {
            this.isDragging = false;
        },
        drop(e) {
            e.preventDefault();
            this.$refs.file.files = e.dataTransfer.files;
            this.onChange();
            this.isDragging = false;
        },
        remove(i) {
            this.files.splice(i, 1);
        }
    }
};
</script>
<style scoped>
.main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    /* height: 100vh; */
    justify-content: center;
    text-align: center;
}

.dropzone-container {
    padding: 4rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

.preview-container {
    display: flex;
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}
</style>