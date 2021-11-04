<template>
  <section>
    <h2 id="skills" class="section-title">SKILLS</h2>
    <ul class="flex flex-wrap justify-between">
      <SkillCard
        v-for="skill in skills"
        :key="skill.title"
        :title="skill.title"
        :experience="skill.experience"
        :description="skill.description"
        class="skill-card"
      />
      <li
        v-for="index in skillEmptyItmes"
        :key="index"
        class="skill-empty"
      ></li>
    </ul>
    <div class="skill-others-card">
      <h3>その他</h3>
      <p>{{ skillOthers.join(', ') }}</p>
    </div>
  </section>
</template>

<script>
import SkillCard from './SkillCard'
export default {
  components: {
    SkillCard,
  },
  computed: {
    skillEmptyCount() {
      return 1
    },
    skillEmptyItmes() {
      return [...Array(this.skillEmptyCount).keys()]
    },
    skills() {
      return [
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
        {
          title: 'PHP',
          experience: '実務4年',
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。'
        },
      ]
    },
    skillOthers() {
      return [
        'Java',
        'C++',
        'C#(Unity)',
        'Objective-C',
        'AngularJS',
        'Line Messaging API',
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.skill-empty {
  width: 300px;
}
.skill-card {
  width: 300px;
}
.skill-others-card {
  padding: 10px 20px;
  border: solid 1px $gray-3;
  border-radius: 10px;
  * {
    text-align: left;
  }
  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 24px;
  }
}
</style>
