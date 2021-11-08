<template>
  <section>
    <h2 id="skills" class="section-title">SKILLS</h2>
    <ul class="flex flex-wrap justify-around">
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
      <p>短期間の実務経験や実務外での利用</p>
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
          description: 'サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。',
        },
        {
          title: 'JavaScript',
          experience: '実務3年',
          description: 'Vue.jsを使うケースが多い。短期間で、nuxt.jsやAngularJSも実務で利用。',
        },
        {
          title: 'iOS/swift',
          experience: '実務1年',
          description: '受託開発にて、業務システムの制作などで利用。',
        },
        {
          title: 'Python',
          experience: '実務3ヶ月/実務外2年',
          description: '主に、学生時代の研究活動で利用した。numpy/pandas等を利用した統計解析や、簡単なシステム操作のUI作成など。',
        },
        {
          title: 'HTML/CSS',
          experience: '実務半年/実務外半年',
          description: '実務で使うケースは少なく、本ページは学習も兼ねて作成した。',
        },
        {
          title: '応用情報技術者',
          experience: '-',
          description: '情報処理の基礎知識習得のため、受験。2018/04に基本情報技術者試験、2018/10に応用情報技術者取得に合格'
        },
      ]
    },
    skillOthers() {
      return [
        'DB設計・SQL',
        'Java',
        'C++',
        'C#(Unity)',
        'Objective-C',
        'Go',
        'TypeScript',
        'AngularJS',
        'Line Messaging API',
        'Docker',
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
