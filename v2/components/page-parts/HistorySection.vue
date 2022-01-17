<template>
  <section>
    <h2 id="history" class="section-title">HISTORY</h2>
    <ul class="flex flex-col">
      <li
        v-for="history in histories"
        :key="history.title"
        class="flex flex-row items-stretch history-item"
      >
        <div class="timeline-date">
          <span class="timeline-icon"></span>
        </div>
        <history-card
          :title="history.title"
          :period="history.period"
          :description="history.description"
          :tech-stacks="history.techStacks"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import HistoryCard from './HistoryCard'

export default {
  components: {
    HistoryCard,
  },
  computed: {
    histories() {
      return [
        {
          title: '株式会社スマレジ',
          period: '2020/04〜現在',
          description: 'Webエンジニアとして、勤怠管理の自社サービスの開発に携わっています。'
            + 'リードエンジニアとして、重要度の高い実装や上流寄りの工程、教育やレビューを担当しています。'
            + '1on1の開始、振り返り会の企画・進行などといったチーム運営にも取り組んでいます。',
          techStacks: [
            'Laravel',
            'Vue.js',
            'CakePHP2',
          ],
        },
        {
          title: '株式会社SICデジタル',
          period: '2020/04〜現在',
          description: 'Webエンジニアとして、勤怠管理の自社サービスの開発に携わっています。'
            + 'リードエンジニアとして、重要度の高い実装や上流寄りの工程、教育やレビューを担当しています。'
            + '1on1の開始、振り返り会の企画・進行などといったチーム運営にも取り組んでいます。',
          techStacks: [
            'Laravel',
            'Vue.js',
            'CakePHP2',
          ],
        },
        {
          title: '株式会社Silett',
          period: '2020/04〜現在',
          description: 'Webエンジニアとして、勤怠管理の自社サービスの開発に携わっています。'
            + 'リードエンジニアとして、重要度の高い実装や上流寄りの工程、教育やレビューを担当しています。'
            + '1on1の開始、振り返り会の企画・進行などといったチーム運営にも取り組んでいます。',
          techStacks: [
            'Laravel',
            'Vue.js',
            'CakePHP2',
          ],
        },
        {
          title: '大阪大学大学院',
          period: '2020/04〜現在',
          description: 'Webエンジニアとして、勤怠管理の自社サービスの開発に携わっています。'
            + 'リードエンジニアとして、重要度の高い実装や上流寄りの工程、教育やレビューを担当しています。'
            + '1on1の開始、振り返り会の企画・進行などといったチーム運営にも取り組んでいます。',
          techStacks: [
            'Laravel',
            'Vue.js',
            'CakePHP2',
          ],
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  background-color: $bg-1;
}
.history-item {
  margin-bottom: 30px;
}
.timeline-date {
  position: relative;
  width: 2px;
  margin: 0 30px -30px;
  background-color: $gray-2;
}
.timeline-icon {
  position: absolute;
  top: 15px;
  left: -5px;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: $main-1;
}
</style>
