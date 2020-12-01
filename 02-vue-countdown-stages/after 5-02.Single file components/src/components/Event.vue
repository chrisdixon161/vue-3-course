<template>
  <article>
    <div class="data">
      <h3 class="name">Graduation!</h3>
      <p class="details">Party time!!!</p>
    </div>
    <div class="countdown">
      <div class="remove_btn_wrapper">
        <button class="remove_btn">&#10060;</button>
      </div>
      <p>
        56
        <br />
        <small>days left</small>
      </p>
    </div>
  </article>
</template>
<script>
export default {
  name: "Event",
};
</script>
<style scoped>
article {
  background: lightslategray;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 0.2rem 1rem;
  color: whitesmoke;
  font-weight: 300;
}

.data {
  flex: 3;
}

.countdown {
  flex: 1;
  text-align: center;
  font-size: 1.6rem;
  border-left: 1px solid;
}

.name {
  font-size: 1.8rem;
}

.details {
  font-size: 1.6rem;
}

.remove_btn {
  background: transparent;
  border: none;
  cursor: pointer;
}

.remove_btn_wrapper {
  text-align: right;
}
</style>