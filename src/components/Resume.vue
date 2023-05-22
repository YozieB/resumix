<template>
  <div class="container resume">
    <div class="resume__heading">
        <h1 class="resume__heading-title">Peter Jones</h1>
        <div class="resume__text">Front-end developer & designer</div>
        <div class="resume__text">I design and build website templates so you can launch your website in minutes. Check out my latest projects, templates and what I’m up to right now.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.resume {
  &__heading {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    &-title {
      font-weight: 900;
      font-family: 'Inter', sans-serif;
      font-style: italic;
      font-size: 48px;
      line-height: 58px;
    }
  }
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--gray);
  }
}
</style>
