<template>
  <div class="form_wrapper">
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="details">Details:</label>
        <input type="text" id="details" />
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" />
      </div>
      <div>
        <label for="background">Background:</label>
        <select id="background">
          <option value="#F34949">Red</option>
          <option value="#F07AEC">Pink</option>
          <option value="#997AF0">Purple</option>
          <option value="#7AD3F0">Blue</option>
          <option value="#68EE94">Green</option>
          <option value="#f9f970">Yellow</option>
          <option value="#EB9A0F">Orange</option>
        </select>
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  </div>
</template>
