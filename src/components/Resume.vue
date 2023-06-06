<template>
  <div class="container resume">
    <div class="resume__heading">
        <h1 class="resume__heading-title">Peter Jones</h1>
        <div class="resume__text">Front-end developer & designer</div>
        <div class="resume__text">I design and build website templates so you can launch your website in minutes. Check out my latest projects, templates and what I’m up to right now.</div>
        <div class="resume__text resume__text-info">
            <div class="resume__text-info-item">
                <img src="@/assets/images/location.svg" alt="location">
                London,UK
            </div>
            <div class="resume__text-info-item">
                <div class="resume__text-info-status resume__text-info-status--available"></div>
                Available for work
            </div>
        </div>
    </div>
      <div class="resume__exp element">
          <h2 class="element-title">Work Experience</h2>
          <div class="resume__exp-item">
              <div class="resume__exp-item-heading">
                  <h3 class="resume__exp-item-title">88 Pixels</h3>
                  <div class="resume__exp-item-year">2023</div>
              </div>
              <div class="resume__exp-item-text">
                  A web design studio providing templates and bespoke solutions for your business or personal brand’s website
              </div>
              <a href="#" class="link">88pixels.co</a>
          </div>
          <div class="resume__exp-item">
              <div class="resume__exp-item-heading">
                  <h3 class="resume__exp-item-title">Frameplate</h3>
                  <div class="resume__exp-item-year">2023</div>
              </div>
              <div class="resume__exp-item-text">
                  A curated gallery of Framer templates built by the community.
              </div>
              <a href="#" class="link">frameplate.framer.website</a>
          </div>
          <div class="resume__exp-item">
              <div class="resume__exp-item-heading">
                  <h3 class="resume__exp-item-title">Staredown</h3>
                  <div class="resume__exp-item-year">2023</div>
              </div>
              <div class="resume__exp-item-text">
                  An online game to test your colour vision
              </div>
              <a href="#" class="link">staredown.netlify.app</a>
          </div>
          <div class="resume__exp-item">
              <div class="resume__exp-item-heading">
                  <h3 class="resume__exp-item-title">New Jobs Friday</h3>
                  <div class="resume__exp-item-year">2022</div>
              </div>
              <div class="resume__exp-item-text">
                  A weekly newsletter with a round-up of the latest job offers in the UK music industry.
              </div>
              <a href="#" class="link">newjobsfriday.com</a>
          </div>
          <div class="resume__exp-item">
              <div class="resume__exp-item-heading">
                  <h3 class="resume__exp-item-title">What To Listen To</h3>
                  <div class="resume__exp-item-year">2023</div>
              </div>
              <div class="resume__exp-item-text">
                  Discover new lofi tracks to listen to while working, coding, studying or relaxing.
              </div>
              <a href="#" class="link">whattolistento.netlify.app</a>
          </div>
      </div>
      <div class="element">
          <h2 class="element-title">Portfolio</h2>
          <div class="resume__projects">
              <div class="resume__projects-item">
                  <img class="resume__projects-image" src="@/assets/images/item.png" alt="Template #1" />
                  <div class="resume__projects-heading">
                      <h3 class="resume__projects-title">Template #1</h3>
                      <div class="resume__projects-badge">NEW</div>
                  </div>
                  <div class="resume__projects-text">This is the description for the template</div>
                  <a href="#" class="link">preview</a>
              </div>
              <div class="resume__projects-item">
                  <img class="resume__projects-image" src="@/assets/images/item.png" alt="Template #1" />
                  <div class="resume__projects-heading">
                      <h3 class="resume__projects-title">Template #1</h3>
                      <div class="resume__projects-badge">NEW</div>
                  </div>
                  <div class="resume__projects-text">This is the description for the template</div>
                  <a href="#" class="link">preview</a>
              </div>
              <div class="resume__projects-item">
                  <img class="resume__projects-image" src="@/assets/images/item.png" alt="Template #1" />
                  <div class="resume__projects-heading">
                      <h3 class="resume__projects-title">Template #1</h3>
                      <div class="resume__projects-badge">NEW</div>
                  </div>
                  <div class="resume__projects-text">This is the description for the template</div>
                  <a href="#" class="link">preview</a>
              </div>
              <div class="resume__projects-item">
                  <img class="resume__projects-image" src="@/assets/images/item.png" alt="Template #1" />
                  <div class="resume__projects-heading">
                      <h3 class="resume__projects-title">Template #1</h3>
                      <div class="resume__projects-badge">NEW</div>
                  </div>
                  <div class="resume__projects-text">This is the description for the template</div>
                  <a href="#" class="link">preview</a>
              </div>
          </div>
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
      font-size: 48px;
      line-height: 58px;
    }
  }
  &__text {
    &-info {
      display: flex;
      justify-content: space-between;
      &-item {
        display: flex;
        align-items: baseline;
        gap: 0 8px;
      }
      &-status {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #fff;
        &--available {
          background-color: var(--green);
        }
        &--pending {
          background-color: var(--yellow);
        }
        &--closed {
          background-color: var(--red);
        }
      }
    }
  }
  &__exp {
    &-item {
      display: flex;
      flex-direction: column;
      gap: 16px 0;
      padding: 16px;
      &-heading {
        display: flex;
        align-items: center;
        gap: 0 16px;
      }
      &-title {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
      }
      &-year {
        padding: 4px;
        color: var(--white);
        font-size: 12px;
        line-height: 12px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
      }
    }
  }
  &__projects {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
    &-item {
      padding: 16px;
      display: flex;
      flex-direction: column;
      grid-column: 6 span;
      gap: 16px 0;
    }
    &-heading {
      display: flex;
      align-items: center;
      gap: 0 16px;
    }
    &-title {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
    &-badge {
      padding: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      color: #fff;
      font-size: 12px;
      line-height: 12px;
    }
    &-image {
      max-width: 80%;
        align-self: center;
    }
  }
}
</style>
