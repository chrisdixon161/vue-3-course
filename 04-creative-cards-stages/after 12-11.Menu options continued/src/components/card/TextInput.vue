<template>
  {{ currentSection }}
  <div
    class="text-input-wrapper"
    @mouseover="showOptions = true"
    @mouseout="showOptions = false"
  >
    <textarea v-model="currentSection.userInput" cols="50" rows="4"></textarea>
    <div class="menu" v-show="showOptions">
      <div class="menu-top" @mouseleave="showOptions = true">
        <select v-model="currentSection.fontFamily">
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Arial">Arial</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
        </select>
        <select v-model="currentSection.fontSize">
          <option value="1.6rem">Normal</option>
          <option value="2rem">Big</option>
          <option value="2.5rem">Bigger</option>
          <option value="3rem">Biggest</option>
        </select>
        <input type="color" v-model="currentSection.color" />
        <label>
          <input type="checkbox" v-model="currentSection.isBold" />
          <img src="@/assets/icons/bold.svg" alt="bold icon" />
        </label>
        <label>
          <input type="checkbox" v-model="currentSection.isItalic" />
          <img src="@/assets/icons/italic.svg" alt="italic icon" />
        </label>
      </div>
      <div class="menu-middle">
        <button>
          <img src="@/assets/icons/arrow-up.svg" alt="arrow up" />
        </button>
        <button>
          <img src="@/assets/icons/arrow-down.svg" alt="arrow down" />
        </button>
      </div>
      <div class="menu-bottom">
        <label>
          <input
            type="radio"
            v-model="currentSection.justifyContent"
            value="flex-start"
            name="horizontal"
          />
          <img src="@/assets/icons/left.svg" alt="left icon" />
        </label>
        <label>
          <input
            type="radio"
            v-model="currentSection.justifyContent"
            value="center"
            name="horizontal"
          />
          <img src="@/assets/icons/center.svg" alt="center icon" />
        </label>
        <label>
          <input
            type="radio"
            v-model="currentSection.justifyContent"
            value="flex-end"
            name="horizontal"
          />
          <img src="@/assets/icons/right.svg" alt="right icon" />
        </label>
        <label>
          <input
            type="radio"
            v-model="currentSection.alignItems"
            value="flex-start"
            name="vertical"
          />
          <img src="@/assets/icons/top.svg" alt="top icon" />
        </label>
        <label>
          <input
            type="radio"
            v-model="currentSection.alignItems"
            value="center"
            name="vertical"
          />
          <img src="@/assets/icons/middle.svg" alt="middle icon" />
        </label>
        <label>
          <input
            type="radio"
            v-model="currentSection.alignItems"
            value="flex-end"
            name="vertical"
          />
          <img src="@/assets/icons/bottom.svg" alt="bottom icon" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    section: Object,
  },
  setup(props) {
    const currentSection = ref({ ...props.section });
    const showOptions = ref(false);

    return {
      currentSection,
      showOptions,
    };
  },
};
</script>
