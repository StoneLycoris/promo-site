<template>
  <section class="experience">
    <h2 class="experience__title">Experience</h2>

    <div
      v-for="item in experience"
      :key="item.id"
      class="experience__item"
    >

      <div class="experience__header">
        <div>
          <h3>{{ item.company }}</h3>
          <p class="muted">
            {{ item.position }} • {{ item.location }}
          </p>
        </div>

        <span class="period">{{ item.period }}</span>
      </div>

      <p class="summary">
        {{ item.summary }}
      </p>

      <div
        v-for="project in item.projects"
        :key="project.name"
        class="project"
      >
        <h4>{{ project.name }}</h4>

        <div class="tags">
            <p>Stack:</p>
          <span v-for="tech in project.stack" :key="tech">
            {{ tech }}
          </span>
        </div>

        <div v-if="project.libraries" class="tags tags-libraries">
            <p>Libraries:</p>
          <span v-for="library in project.libraries" :key="library">
            {{ library }}
          </span>
        </div>

        <div v-if="project.testing" class="tags tags-tests">
            <p>Tests:</p>
            <span v-for="test in project.testing"  :key="test">
                {{ test }}
            </span>
        </div>

        <ul class="achievements">
          <li
            v-for="a in project.achievements"
            :key="a"
          >
            {{ a }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from '@/data/experience'
</script>

<style scoped lang="scss">
.experience {
  text-align: left;

  &__title {
    margin-bottom: 40px;
  }

  &__item {
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 12px;
    margin-bottom: 24px;
    background: var(--bg);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }
}

.period {
  font-size: 14px;
  color: var(--text);
  opacity: 0.7;
}

.summary {
  margin: 12px 0 16px;
  color: var(--text-h);
}

.project {
  margin-top: 16px;

  h4 {
    margin-bottom: 8px;
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;

  span {
    background: var(--accent-bg);
    color: var(--accent);
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 13px;
  }

  &-libraries,
  &-tests {
    opacity: 0.7;
  }
}

.achievements {
  padding-left: 18px;

  li {
    margin-bottom: 6px;
  }
}

.muted {
  opacity: 0.7;
  font-size: 14px;
}
</style>